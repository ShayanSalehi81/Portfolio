/* Renders the portfolio from SITE (content.js) and wires up the few interactions. */
(() => {
  'use strict';
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* preference stays in memory */ } }
  };
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  let lang = root.lang === 'fa' ? 'fa' : 'en';
  let paused = (store.get('ss-motion') || (reduceMotion.matches ? 'paused' : 'playing')) === 'paused';
  let openRow = 0;
  const meshes = [];

  /* ---------- helpers ---------- */
  const t = o => (o && typeof o === 'object' && !Array.isArray(o) && 'en' in o) ? (o[lang] ?? o.en) : o;
  const ui = k => S.ui[lang][k];
  const num = (n, digits = 0) => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
  const fa = s => lang === 'fa' ? String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(s);
  const toMonths = ym => { const [y, m] = ym.split('-').map(Number); return y * 12 + m - 1; };
  const month = (ym, style = 'short') => {
    if (!ym) return ui('present');
    const [y, m] = ym.split('-').map(Number);
    return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US', { year: 'numeric', month: lang === 'fa' ? 'long' : style, timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, 15)));
  };
  const range = (a, b, style) => a === b ? month(a, style) : `${month(a, style)} – ${month(b, style)}`;
  const decimals = v => (String(v).split('.')[1] || '').length;

  const ic = paths => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
  const icon = {
    email: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
    scholar: ic('<path d="M2 9.5 12 4l10 5.5-10 5.5z"/><path d="M6 12v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3V12M22 9.5V15"/>'),
    github: ic('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'),
    linkedin: ic('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    cv: ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    copy: ic('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4"/>')
  };
  const external = 'target="_blank" rel="noopener noreferrer"';
  const profileLinks = () => [
    ['scholar', S.links.scholar, ui('scholar')],
    ['github', S.links.github, ui('github')],
    ['linkedin', S.links.linkedin, ui('linkedin')]
  ];
  const head = (title, aside = '') => `<header class="sec-head"><h2 class="sec-title">${title}</h2>${aside}</header>`;

  /* ---------- sections ---------- */
  function renderProfile() {
    const p = S.profile[lang];
    $('#identity').innerHTML = `
      <h1 class="name" id="name">${p.name}</h1>
      <p class="role">${p.role}</p>
      <p class="affil">${p.affiliation}</p>
      <ul class="id-links">
        <li><a href="mailto:${S.links.email}">${icon.email}<span dir="ltr">${S.links.email}</span></a></li>
        ${profileLinks().map(([k, href, label]) => `<li><a href="${href}" ${external}>${icon[k]}<span>${label}</span></a></li>`).join('')}
        <li><a href="${S.links.cv}" ${external}>${icon.cv}<span>${ui('cv')}</span></a></li>
      </ul>`;
  }

  function renderAbout() {
    const A = S.about, d = A[lang];
    $('#about-body').innerHTML = `
      <div class="about-grid">
        <div class="about-text">
          ${head(d.title)}
          ${d.body.map(p => `<p>${p}</p>`).join('')}
        </div>
        <aside class="interests" aria-labelledby="interests-title">
          <h3 class="sub-title" id="interests-title">${ui('interests')}</h3>
          <ul>${A.interests.map(i => `<li>${t(i)}</li>`).join('')}</ul>
        </aside>
      </div>`;
  }

  function renderPubs() {
    const P = S.publications;
    let n = 0;
    const groups = ['published', 'review', 'progress'].map(status => {
      const items = P.items.filter(p => p.status === status);
      if (!items.length) return '';
      return `<h3 class="pub-group">${ui(status)} <span class="count">(${num(items.length)})</span></h3>
        <ol class="pubs">${items.map(p => {
          n += 1;
          return `<li class="pub">
            <span class="pub-num">[${fa(n)}]</span>
            <div class="pub-body">
              <p class="pub-title"><span dir="ltr" lang="en">${p.title}</span></p>
              <p class="pub-authors"><span dir="ltr" lang="en">${p.authors.replace('S. Salehi', '<b>S. Salehi</b>')}</span></p>
              ${p.venue ? `<p class="pub-venue">${t(p.venue)}</p>` : ''}
            </div>
            ${p.short ? `<span class="pub-tag" dir="ltr">${p.short}</span>` : ''}
          </li>`;
        }).join('')}</ol>`;
    }).join('');
    $('#pubs-body').innerHTML = `${head(P[lang].title, `<a class="aside-link" href="${S.links.scholar}" ${external}>${ui('scholarAll')}</a>`)}${groups}`;
  }

  function renderWork() {
    const W = S.experience;
    $('#work-body').innerHTML = `
      ${head(W[lang].title)}
      <ol class="jobs">${W.items.map(w => `
        <li class="job">
          <p class="job-when">${range(w.start, w.end)}</p>
          <div class="job-body">
            <h3 class="job-role">${t(w.role)}</h3>
            <p class="job-org">${t(w.org)}</p>
            <ul class="bullets">${w[lang].map(p => `<li>${p}</li>`).join('')}</ul>
            <p class="job-tech"><span>${ui('technologies')}:</span> <span dir="ltr">${w.stack.join(', ')}</span></p>
          </div>
        </li>`).join('')}</ol>`;
  }

  function renderResearch() {
    const R = S.research;
    const [a0, a1] = R.axis.map(toMonths), total = a1 - a0;
    const pos = ym => Math.min(100, Math.max(0, (toMonths(ym) - a0) / total * 100));
    const today = new Date(), nowPos = pos(`${today.getFullYear()}-${today.getMonth() + 1}`);
    const years = [];
    for (let y = Number(R.axis[0].slice(0, 4)); y < Number(R.axis[1].slice(0, 4)); y++) years.push(y);
    $('#research-body').innerHTML = `
      ${head(R[lang].title)}
      <div class="gantt" style="--now:${nowPos}%;--years:${years.length}">
        <div class="g-axis" aria-hidden="true"><span></span>
          <div class="g-scale">${years.map((y, i) => `<span class="g-year" style="--x:${i / years.length * 100}%">${fa(y)}</span>`).join('')}
            <span class="g-now-label" style="--x:${nowPos}%">${ui('now')}</span></div>
          <span></span>
        </div>
        <ol class="g-rows">${R.items.map((r, i) => {
          const x = r[lang], s = pos(r.start), e = pos(r.end);
          return `<li class="g-row${i === openRow ? ' open' : ''}">
            <button type="button" class="g-btn" aria-expanded="${i === openRow}" aria-controls="g-d-${i}" data-row="${i}">
              <span class="g-label"><span class="g-title">${x.title}</span><span class="g-inst">${x.inst}<span class="g-dates">${range(r.start, r.end)}</span></span></span>
              <span class="g-track" aria-hidden="true"><span class="g-bar" style="--s:${s}%;--w:${e - s}%"></span></span>
              <span class="g-toggle" aria-hidden="true"></span>
            </button>
            <div class="g-detail" id="g-d-${i}"><div class="g-detail-inner">
              <dl class="g-meta">
                <div><dt>${ui('supervisor')}</dt><dd>${x.sup}</dd></div>
                <div><dt>${ui('institution')}</dt><dd>${x.inst}${r.remote ? ` (${ui('remote')})` : ''}</dd></div>
                <div><dt>${ui('period')}</dt><dd>${range(r.start, r.end, 'long')}</dd></div>
              </dl>
              <ul class="bullets">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
            </div></div>
          </li>`;
        }).join('')}</ol>
      </div>`;
  }

  function renderEducation() {
    const E = S.education;
    const gpa = v => `<b>${num(v, 2)}</b> ${ui('of20')}`;
    const row = c => `<tr><td data-label="${ui('course')}">${t(c)}</td><td data-label="${ui('level')}">${ui(c.grad ? 'graduate' : 'undergraduate')}</td><td class="n" data-label="${ui('grade')}">${num(c.grade, 1)}</td></tr>`;
    $('#edu-body').innerHTML = `
      ${head(E[lang].title)}
      <div class="degrees">${E.degrees.map(g => `
        <article class="degree">
          <p class="deg-dates">${range(g.start, g.end, 'long')}</p>
          <h3 class="deg-title">${t(g.degree)}</h3>
          <p class="deg-school">${t(g.school)}</p>
          <p class="deg-gpa">${ui('gpa')}: ${gpa(g.gpa)}${g.major ? `<span class="sep" aria-hidden="true">·</span>${ui('majorGpa')}: ${gpa(g.major)}` : ''}</p>
        </article>`).join('')}</div>
      <h3 class="sub-title">${ui('coursework')}</h3>
      <div class="table-wrap"><table class="table">
        <thead><tr><th scope="col">${ui('course')}</th><th scope="col">${ui('level')}</th><th scope="col" class="n">${ui('grade')}</th></tr></thead>
        <tbody>${E.courses.map(row).join('')}</tbody>
      </table></div>`;
  }

  function renderHonors() {
    const H = S.honors;
    const rank = a => lang === 'en' ? (a.topN ? `Top ${num(a.rank)}` : ui('ordinal')(a.rank)) : (a.topN ? `${num(a.rank)} نفر برتر` : num(a.rank));
    const pool = a => lang === 'en'
      ? `${num(a.pool)}+ ${t(a.unit)} (top ${num(a.top, decimals(a.top))}%)`
      : `بیش از ${num(a.pool)} ${t(a.unit)} (${num(a.top, decimals(a.top))}٪ برتر)`;
    $('#honors-body').innerHTML = `
      ${head(H[lang].title)}
      <div class="table-wrap"><table class="table honors-table">
        <thead><tr><th scope="col">${ui('rank')}</th><th scope="col">${ui('competition')}</th><th scope="col">${ui('pool')}</th><th scope="col" class="n">${ui('date')}</th></tr></thead>
        <tbody>${H.items.map(a => `<tr>
          <td class="rank" data-label="${ui('rank')}">${rank(a)}</td>
          <td class="strong" data-label="${ui('competition')}">${t(a)}</td>
          <td data-label="${ui('pool')}">${pool(a)}</td>
          <td class="n" data-label="${ui('date')}">${month(a.date)}</td>
        </tr>`).join('')}</tbody>
      </table></div>`;
  }

  function renderTeaching() {
    const T = S.teaching, d = T[lang];
    const terms = c => c.terms.map(([s, y]) => `${T.seasons[lang][s]} ${fa(y)}`).join(lang === 'fa' ? '، ' : ', ');
    const rows = list => list.map(c => `<tr>
        <td class="strong" data-label="${ui('course')}">${t(c)}</td>
        <td data-label="${ui('instructor')}">${t(c.by)}</td>
        <td data-label="${ui('terms')}">${terms(c)}</td>
      </tr>`).join('');
    $('#teach-body').innerHTML = `
      ${head(d.title)}
      <p class="lede">${d.lede}</p>
      <div class="table-wrap"><table class="table teach-table">
        <thead><tr><th scope="col">${ui('course')}</th><th scope="col">${ui('instructor')}</th><th scope="col">${ui('terms')}</th></tr></thead>
        <tbody>
          <tr class="group"><th scope="rowgroup" colspan="3">${ui('headTa')}</th></tr>
          ${rows(T.courses.filter(c => c.head))}
          <tr class="group"><th scope="rowgroup" colspan="3">${ui('ta')}</th></tr>
          ${rows(T.courses.filter(c => !c.head))}
        </tbody>
      </table></div>`;
  }

  function renderProjects() {
    const P = S.projects;
    $('#projects-body').innerHTML = `
      ${head(P[lang].title, `<a class="aside-link" href="${S.links.github}" ${external} dir="ltr">github.com/ShayanSalehi81</a>`)}
      <div class="projects">${P.items.map(p => {
        const [title, ctx, desc] = p[lang];
        return `<article class="project">
          <h3 class="proj-title">${title}</h3>
          <p class="proj-meta">${ctx}<span class="sep" aria-hidden="true">·</span>${range(p.start, p.end)}</p>
          <p class="proj-desc">${desc}</p>
          <a class="proj-link" href="${S.links.github}/${p.repo}" ${external}>${icon.github}<span>${ui('code')}</span></a>
        </article>`;
      }).join('')}</div>`;
  }

  function renderSkills() {
    const K = S.skills;
    $('#skills-body').innerHTML = `
      ${head(K[lang].title)}
      <div class="skills-grid">
        <div>
          <h3 class="sub-title">${ui('skills')}</h3>
          <dl class="kv">${K.groups.map(g => `<div><dt>${t(g)}</dt><dd><span dir="ltr">${g.items}</span></dd></div>`).join('')}</dl>
        </div>
        <div>
          <h3 class="sub-title">${ui('languages')}</h3>
          <dl class="kv">${K.languages.map(l => {
            const [name, level, note] = l[lang];
            return `<div><dt>${name}</dt><dd>${level}${note ? `<span class="note">${note}</span>` : ''}</dd></div>`;
          }).join('')}</dl>
        </div>
      </div>`;
  }

  function renderService() {
    const V = S.service;
    $('#service-body').innerHTML = `
      ${head(V[lang].title)}
      <div class="service">${V.items.map(s => {
        const x = s[lang];
        return `<article class="svc">
          <h3 class="svc-title">${x.title}</h3>
          <p class="svc-meta">${x.role}<span class="sep" aria-hidden="true">·</span>${x.org}${s.date ? `<span class="sep" aria-hidden="true">·</span>${month(s.date)}` : ''}</p>
          <ul class="bullets">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
        </article>`;
      }).join('')}</div>`;
  }

  function renderContact() {
    const c = S.contact[lang];
    $('#contact-body').innerHTML = `
      <div class="contact-grid">
        <div>${head(c.title)}<p class="lede">${c.body}</p></div>
        <dl class="contact-list">
          <div><dt>${ui('email')}</dt><dd><a href="mailto:${S.links.email}" dir="ltr">${S.links.email}</a>
            <button type="button" class="copy" id="copy-email">${icon.copy}<span>${ui('copy')}</span></button></dd></div>
          <div><dt>${ui('location')}</dt><dd>${ui('locationValue')}</dd></div>
          <div><dt>${ui('profiles')}</dt><dd class="inline-links">${profileLinks().map(([, href, label]) => `<a href="${href}" ${external}>${label}</a>`).join('')}</dd></div>
          <div><dt>CV</dt><dd><a href="${S.links.cv}" ${external}>${ui('cv')}</a></dd></div>
        </dl>
      </div>`;
    $('#footer-body').innerHTML = `
      <span>© ${fa(2026)} ${S.profile[lang].name}</span>
      <span>${ui('updated')}: ${month(S.updated, 'long')}</span>
      <a href="#top">${ui('backTop')}</a>`;
  }

  function renderChrome() {
    const nav = ui('nav');
    root.lang = lang; root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = ui('pageTitle');
    $('meta[name="description"]').content = ui('description');
    $('#brand').textContent = S.profile[lang].name;
    $$('[data-nav]').forEach(a => { a.textContent = nav[a.dataset.nav]; });
    $$('[data-t]').forEach(el => { el.textContent = ui(el.dataset.t); });
    $$('[data-alt]').forEach(el => { el.alt = ui(el.dataset.alt); });
    const lt = $('#lang-toggle');
    lt.textContent = ui('langSwitch');
    lt.setAttribute('aria-label', ui('langLabel'));
    lt.lang = lang === 'fa' ? 'en' : 'fa';
    updateToggles();
  }

  function updateToggles() {
    const dark = root.dataset.theme === 'dark';
    const set = (el, label) => { el.setAttribute('aria-label', label); el.title = label; };
    set($('#theme-toggle'), ui(dark ? 'themeLight' : 'themeDark'));
    set($('#motion-toggle'), ui(paused ? 'motionPlay' : 'motionPause'));
    $('#motion-toggle').setAttribute('aria-pressed', String(paused));
    $('#menu-toggle').setAttribute('aria-label', ui($('#nav').classList.contains('menu-open') ? 'menuClose' : 'menuOpen'));
  }

  function render() {
    renderChrome(); renderProfile(); renderAbout(); renderPubs(); renderWork(); renderResearch(); renderEducation();
    renderHonors(); renderTeaching(); renderProjects(); renderSkills(); renderService(); renderContact();
  }

  /* ---------- interactions ---------- */
  document.addEventListener('click', e => {
    const row = e.target.closest('.g-btn');
    if (row) {
      const i = Number(row.dataset.row);
      openRow = row.getAttribute('aria-expanded') === 'true' ? -1 : i;
      $$('.g-row').forEach((li, k) => { const open = k === openRow; li.classList.toggle('open', open); $('.g-btn', li).setAttribute('aria-expanded', String(open)); });
      return;
    }
    if (e.target.closest('#copy-email')) copyEmail();
  });

  function toast(message) {
    const el = $('.toast'); el.textContent = message; el.classList.add('show');
    clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(S.links.email); }
    catch {
      const ta = Object.assign(document.createElement('textarea'), { value: S.links.email });
      document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    toast(ui('copied'));
  }

  $('#lang-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'fa' : 'en';
    store.set('ss-lang', lang);
    const url = new URL(location.href);
    if (lang === 'fa') url.searchParams.set('lang', 'fa'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render();
  });

  $('#theme-toggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('ss-theme', root.dataset.theme);
    $('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#1c1f21' : '#ffffff';
    meshes.forEach(m => m.refresh());
    updateToggles();
  });

  $('#motion-toggle').addEventListener('click', () => {
    paused = !paused;
    store.set('ss-motion', paused ? 'paused' : 'playing');
    root.classList.toggle('still', paused);
    meshes.forEach(m => m.setPaused(paused));
    updateToggles();
  });

  const nav = $('#nav');
  const closeMenu = () => { nav.classList.remove('menu-open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); updateToggles(); };
  $('#menu-toggle').addEventListener('click', () => {
    const open = !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', open);
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
    updateToggles();
  });
  $$('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('menu-open')) { closeMenu(); $('#menu-toggle').focus(); } });

  const spy = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    if (id === 'top') { $$('[data-nav]').forEach(a => a.classList.remove('active')); return; }
    if (!$(`[data-nav="${id}"]`)) return;
    $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  $$('main > section[id]').forEach(s => spy.observe(s));

  /* ---------- boot ---------- */
  render();
  root.classList.toggle('still', paused);
  [['.banner', 'hero'], ['.contact', 'plain']].forEach(([sel, mode]) => meshes.push(window.Mesh.field($(sel), { mode, paused })));
})();
