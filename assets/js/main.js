/* Renders the portfolio from SITE (content.js) and wires up interactions. */
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
  let pubFilter = 'all', openRow = 0, workTab = 0;
  const meshes = [];

  /* ---------- helpers ---------- */
  const t = o => (o && typeof o === 'object' && !Array.isArray(o) && 'en' in o) ? (o[lang] ?? o.en) : o;
  const ui = k => S.ui[lang][k];
  const num = (n, digits = 0) => new Intl.NumberFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
  const fa = s => lang === 'fa' ? String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]) : String(s);
  const pad = n => fa(String(n).padStart(2, '0'));
  const toMonths = ym => { const [y, m] = ym.split('-').map(Number); return y * 12 + m - 1; };
  const month = (ym, style = 'short') => {
    if (!ym) return ui('present');
    const [y, m] = ym.split('-').map(Number);
    return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US', { year: 'numeric', month: lang === 'fa' ? 'long' : style, timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, 15)));
  };
  const range = (a, b, style) => a === b ? month(a, style) : `${month(a, style)} – ${month(b, style)}`;
  const ordinal = n => lang === 'en' ? `${n}<sup>${ui('ordinal')(n).slice(String(n).length)}</sup>` : (n === 1 ? 'اول' : fa(n));

  const ic = (paths, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;
  const icon = {
    email: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
    scholar: ic('<path d="M2 9.5 12 4l10 5.5-10 5.5z"/><path d="M6 12v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3V12M22 9.5V15"/>'),
    github: ic('<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>'),
    linkedin: ic('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
    download: ic('<path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 20h14"/>'),
    arrow: ic('<path d="M7 17 17 7M9 7h8v8"/>', 'ic-arrow'),
    copy: ic('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4"/>'),
    pin: ic('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>')
  };
  const external = 'target="_blank" rel="noopener noreferrer"';
  const socialLinks = cls => [['email', `mailto:${S.links.email}`], ['scholar', S.links.scholar], ['github', S.links.github], ['linkedin', S.links.linkedin]]
    .map(([k, href]) => `<a class="${cls}" href="${href}" ${k === 'email' ? '' : external} aria-label="${ui(k)}" title="${ui(k)}">${icon[k]}<span class="lbl">${ui(k)}</span></a>`).join('');

  const head = (n, d, cls = '') => `<header class="sec-head ${cls}" data-reveal>
      <p class="sec-kicker"><span class="sec-num">§ ${pad(n)}</span><span class="sec-eyebrow">${d.eyebrow}</span></p>
      <h2 class="sec-title">${d.title}</h2>${d.lede ? `<p class="sec-lede">${d.lede}</p>` : ''}
    </header>`;

  /* ---------- sections ---------- */
  function renderHero() {
    const h = S.hero[lang];
    $('#hero-copy').innerHTML = `
      <p class="hero-eyebrow rise" style="--d:1"><span class="diamond" aria-hidden="true"></span>${h.eyebrow}</p>
      <h1 class="hero-name rise" id="hero-name" style="--d:2">${h.name}</h1>
      <span class="hero-rule rise" style="--d:3" aria-hidden="true"></span>
      <p class="hero-lead rise" style="--d:3">${h.lead}</p>
      <p class="hero-status rise" style="--d:4"><span class="pulse" aria-hidden="true"></span>${h.status}</p>
      <div class="hero-actions rise" style="--d:5">
        <a class="btn btn-light" href="${S.links.cv}" download>${icon.download}<span>${ui('cv')}</span></a>
        <div class="icon-links">${socialLinks('icon-link')}</div>
      </div>`;
    $('#hero-stats').innerHTML = `<div class="container stats-row">${S.hero.stats.map((s, i) => `
      <div class="stat rise" style="--d:${6 + i * 0.5}">
        <span class="stat-num">${s.ordinal ? ordinal(s.value) : `<span data-count="${s.value}">${num(s.value)}</span>`}</span>
        <span class="stat-label">${t(s)}</span>
      </div>`).join('')}</div>`;
  }

  function renderAbout() {
    const A = S.about, d = A[lang];
    $('#about-body').innerHTML = `
      <div class="about-grid">
        <div class="about-side">${head(1, d)}</div>
        <div class="about-main" data-reveal>
          <p class="about-lead">${d.body[0]}</p>
          <p class="about-text">${d.body[1]}</p>
          <div class="collab">
            <p class="label">${ui('collaborationsLabel')}</p>
            <ul>${A.collaborations.map(c => `<li>${t(c)}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
      <div class="interests" data-reveal>
        <p class="label">${ui('interestsLabel')}</p>
        <ol class="tess">${A.interests.map((it, i) => {
          const [title, note] = it[lang], up = i % 2 === 0;
          return `<li class="tri ${up ? 'up' : 'down'}" style="--i:${i}">
            <svg viewBox="0 0 100 86.6" preserveAspectRatio="none" aria-hidden="true"><polygon points="${up ? '50,0 100,86.6 0,86.6' : '0,0 100,0 50,86.6'}"/></svg>
            <div class="tri-text"><span class="tri-idx">${pad(i + 1)}</span><span class="tri-title">${title}</span><span class="tri-note">${note}</span></div>
          </li>`;
        }).join('')}</ol>
      </div>`;
  }

  function renderPubs() {
    const P = S.publications, d = P[lang];
    const counts = { all: P.items.length };
    P.items.forEach(p => { counts[p.status] = (counts[p.status] || 0) + 1; });
    const filters = [['all', 'filterAll'], ['published', 'filterPublished'], ['review', 'filterReview'], ['progress', 'filterProgress']];
    const statusKey = { published: 'statusPublished', review: 'statusReview', progress: 'statusProgress' };
    $('#pubs-body').innerHTML = `
      <div class="pubs-top">
        ${head(2, d)}
        <div class="pub-tools" data-reveal>
          <div class="seg" role="group" aria-label="${d.eyebrow}">${filters.map(([f, k]) =>
            `<button type="button" data-filter="${f}" aria-pressed="${f === pubFilter}">${ui(k)}<span class="count">${num(counts[f])}</span></button>`).join('')}</div>
          <a class="text-link" href="${S.links.scholar}" ${external}>${ui('scholarAll')}${icon.arrow}</a>
        </div>
      </div>
      <ol class="pub-list">${P.items.map((p, i) => `
        <li class="pub" data-status="${p.status}" data-reveal style="--i:${i % 4}">
          <span class="pub-idx">[${fa(i + 1)}]</span>
          <div class="pub-venue">
            ${p.short ? `<span class="pv-name">${p.short}</span>` : `<span class="pv-name pv-wip">${ui('inPrep')}</span>`}
            ${p.year ? `<span class="pv-year">${fa(p.year)}</span>` : ''}${p.kind ? `<span class="pv-kind">${t(p.kind)}</span>` : ''}
          </div>
          <div class="pub-body">
            <h3 class="pub-title"><span dir="ltr" lang="en">${p.title}</span></h3>
            <p class="pub-authors"><span dir="ltr" lang="en">${p.authors.replace('S. Salehi', '<span class="me">S. Salehi</span>')}</span></p>
            ${p.venue ? `<p class="pub-where">${t(p.venue)}</p>` : ''}
            <p class="pub-tags"><span class="badge b-${p.status}">${ui(statusKey[p.status])}</span>${p.first ? `<span class="badge b-first">${ui('firstAuthor')}</span>` : ''}</p>
          </div>
        </li>`).join('')}</ol>`;
    applyPubFilter();
  }

  function applyPubFilter() {
    $$('.pub').forEach(li => { li.hidden = pubFilter !== 'all' && li.dataset.status !== pubFilter; });
    $$('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === pubFilter)));
  }

  function renderResearch() {
    const R = S.research, d = R[lang];
    const [a0, a1] = R.axis.map(toMonths), total = a1 - a0;
    const pos = ym => Math.min(100, Math.max(0, (toMonths(ym) - a0) / total * 100));
    const today = new Date(), nowPos = pos(`${today.getFullYear()}-${today.getMonth() + 1}`);
    const years = [];
    for (let y = Number(R.axis[0].slice(0, 4)); y < Number(R.axis[1].slice(0, 4)); y++) years.push(y);
    $('#research-body').innerHTML = `
      ${head(3, d, 'center')}
      <div class="gantt" data-reveal style="--now:${nowPos}%;--years:${years.length}">
        <div class="g-axis" aria-hidden="true"><span></span>
          <div class="g-scale">${years.map((y, i) => `<span class="g-year" style="--x:${i / years.length * 100}%">${fa(y)}</span>`).join('')}
            <span class="g-now-label" style="--x:${nowPos}%">${ui('now')}</span></div>
        </div>
        <ol class="g-rows">${R.items.map((r, i) => {
          const x = r[lang], s = pos(r.start), e = pos(r.end);
          return `<li class="g-row${i === openRow ? ' open' : ''}">
            <button type="button" class="g-btn" aria-expanded="${i === openRow}" aria-controls="g-d-${i}" data-row="${i}">
              <span class="g-label"><span class="g-title">${x.title}</span><span class="g-inst">${x.inst}<span class="g-dates">${range(r.start, r.end)}</span></span></span>
              <span class="g-track" aria-hidden="true"><span class="g-bar" style="--s:${s}%;--w:${e - s}%;--i:${i}"></span></span>
              <span class="g-chev" aria-hidden="true"></span>
            </button>
            <div class="g-detail" id="g-d-${i}"><div class="g-detail-inner">
              <dl class="g-meta">
                <div><dt>${ui('supervisor')}</dt><dd>${x.sup}</dd></div>
                <div><dt>${ui('institution')}</dt><dd>${x.inst}</dd></div>
                <div><dt>${ui('period')}</dt><dd>${range(r.start, r.end, 'long')}</dd></div>
                ${r.remote ? `<div><dt>${ui('mode')}</dt><dd>${ui('remote')}</dd></div>` : ''}
              </dl>
              <ul class="g-points">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
            </div></div>
          </li>`;
        }).join('')}</ol>
        <p class="g-hint">${ui('ganttHint')}</p>
      </div>`;
  }

  function renderEducation() {
    const E = S.education, d = E[lang], C = 2 * Math.PI * 52;
    const ring = gpa => `<div class="ring-wrap">
        <svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle class="ring-bg" cx="60" cy="60" r="52"/><circle class="ring-fg" cx="60" cy="60" r="52" style="--c:${C.toFixed(2)};--dash:${(C * gpa / 20).toFixed(2)}"/></svg>
        <span class="ring-val"><span data-count="${gpa}" data-dec="2">${num(gpa, 2)}</span><small>/ ${fa(20)}</small></span>
      </div>`;
    $('#edu-body').innerHTML = `
      ${head(4, d)}
      <div class="degrees">${E.degrees.map((g, i) => `
        <article class="degree" data-reveal style="--i:${i}">
          <div class="deg-main">
            <p class="deg-level">${t(g.level)}</p>
            <h3 class="deg-field">${t(g.field)}</h3>
            <p class="deg-school">${t(g.school)}</p>
            <p class="deg-dates">${range(g.start, g.end, 'long')}</p>
          </div>
          <div class="deg-gpa">${ring(g.gpa)}
            <p class="ring-label">${ui('overallGpa')}</p>
            ${g.major ? `<p class="deg-major">${ui('majorGpa')} <b>${num(g.major, 2)}</b></p>` : ''}
          </div>
        </article>`).join('')}</div>
      <div class="transcript" data-reveal>
        <div class="tr-head"><h3>${ui('coursework')}</h3><span>${ui('gradesNote')}</span></div>
        <ul class="tr-list">${E.courses.map((c, i) => `
          <li style="--i:${i}"><span class="tr-name">${t(c)}${c.grad ? `<span class="tr-tag">${ui('msc')}</span>` : ''}</span><span class="tr-dots" aria-hidden="true"></span><span class="tr-grade">${num(c.grade, 1)}</span></li>`).join('')}</ul>
      </div>`;
  }

  function renderHonors() {
    const H = S.honors, d = H[lang];
    $('#honors-body').innerHTML = `
      <div class="honors-grid">
        <div class="honors-head">${head(5, d)}</div>
        <ol class="awards">${H.items.map((a, i) => {
          const rank = `<span class="aw-num" data-count="${a.rank}">${num(a.rank)}</span>`;
          const label = lang === 'en'
            ? (a.topN ? `<span class="aw-pre">Top</span>${rank}` : `${rank}<sup>${ui('ordinal')(a.rank).slice(String(a.rank).length)}</sup>`)
            : (a.topN ? `${rank}<span class="aw-post">نفر برتر</span>` : `<span class="aw-pre">رتبه</span>${rank}`);
          const pool = lang === 'en' ? `among ${num(a.pool)}+ ${t(a.unit)}` : `در میان بیش از ${num(a.pool)} ${t(a.unit)}`;
          const dp = (String(a.top).split('.')[1] || '').length;
          const pct = lang === 'en' ? `Top ${num(a.top, dp)}%` : `${num(a.top, dp)}٪ برتر`;
          return `<li class="award${i === 0 ? ' featured' : ''}" data-reveal style="--i:${i}">
            <p class="aw-rank">${label}</p>
            <p class="aw-pool">${pool}</p>
            <h3 class="aw-title">${t(a)}</h3>
            <p class="aw-foot"><span>${month(a.date)}</span><span class="aw-pct">${pct}</span></p>
          </li>`;
        }).join('')}</ol>
      </div>`;
  }

  function renderTeaching() {
    const T = S.teaching, d = T[lang];
    const offerings = T.courses.reduce((n, c) => n + c.terms.length, 0);
    const distinct = new Set(T.courses.map(c => c.en[0].replace(/ \(M\.Sc\.\)$/, ''))).size;
    const headOfferings = T.courses.filter(c => c.head).reduce((n, c) => n + c.terms.length, 0);
    const semesters = T.terms.filter(x => x[0] !== 'gap').length;
    const stats = [[offerings, 'offerings'], [distinct, 'courses'], [headOfferings, 'headOfferings'], [semesters, 'span']];
    $('#teach-body').innerHTML = `
      <div class="teach-top">
        ${head(6, d)}
        <dl class="teach-stats" data-reveal>${stats.map(([v, k]) => `<div><dt>${ui(k)}</dt><dd data-count="${v}">${num(v)}</dd></div>`).join('')}</dl>
      </div>
      <div class="board-wrap" data-reveal>
        <div class="legend"><span class="lg lg-ta">${ui('ta')}</span><span class="lg lg-head">${ui('headTa')}</span></div>
        <div class="board">${T.terms.map((term, ti) => {
          if (term[0] === 'gap') return '<div class="term gap" aria-hidden="true"><span></span></div>';
          const [id, season, year] = term, list = T.courses.filter(c => c.terms.includes(id));
          return `<div class="term" style="--t:${ti}">
            <div class="stack">${list.map((c, k) => `<button type="button" class="chip${c.head ? ' head' : ''}" data-course="${c.id}" style="--k:${k}">${c[lang][1]}</button>`).join('')}</div>
            <p class="term-label"><span>${T.seasons[lang][season]}</span><span>${fa(year)}</span></p>
          </div>`;
        }).join('')}</div>
        <p class="board-info" aria-live="polite">${ui('boardHint')}</p>
      </div>`;
  }

  function courseInfo(id) {
    const T = S.teaching, c = T.courses.find(x => x.id === id);
    const terms = c.terms.map(tid => { const [, season, year] = T.terms.find(x => x[0] === tid); return `${T.seasons[lang][season]} ${fa(year)}`; });
    const sep = lang === 'fa' ? '، ' : ', ';
    return `<b>${c[lang][0]}</b><span class="sep">·</span>${t(c.by)}<span class="sep">·</span>${c.head ? ui('headTa') : ui('ta')}<span class="sep">·</span>${ui('taughtIn')} ${terms.join(sep)}`;
  }

  function renderWork() {
    const W = S.experience, d = W[lang];
    $('#work-body').innerHTML = `
      ${head(7, d)}
      <div class="work-grid" data-reveal>
        <div class="tabs" role="tablist" aria-orientation="vertical" aria-label="${d.eyebrow}">${W.items.map((w, i) => `
          <button type="button" class="tab" role="tab" id="tab-${i}" aria-controls="panel-${i}" aria-selected="${i === workTab}" tabindex="${i === workTab ? 0 : -1}">
            <span class="tab-org">${t(w.org)}</span><span class="tab-role">${t(w.role)}</span><span class="tab-dates">${range(w.start, w.end)}</span>
          </button>`).join('')}</div>
        <div class="panels">${W.items.map((w, i) => `
          <div class="panel" role="tabpanel" id="panel-${i}" aria-labelledby="tab-${i}" tabindex="0"${i === workTab ? '' : ' hidden'}>
            <span class="panel-num" aria-hidden="true">${pad(i + 1)}</span>
            <p class="panel-dates">${range(w.start, w.end, 'long')}</p>
            <h3 class="panel-role">${t(w.role)}<span class="panel-org">${t(w.org)}</span></h3>
            <ul class="panel-points">${w[lang].map(p => `<li>${p}</li>`).join('')}</ul>
            <p class="panel-stack"><span class="label">${ui('stack')}</span>${w.stack.map(s => `<span class="tag">${s}</span>`).join('')}</p>
          </div>`).join('')}</div>
      </div>`;
  }

  function selectTab(i, focus) {
    workTab = i;
    $$('.tab').forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    $$('.panel').forEach((p, k) => { p.hidden = k !== i; });
    if (focus) $(`#tab-${i}`).focus();
  }

  function renderProjects() {
    const P = S.projects, d = P[lang];
    $('#projects-body').innerHTML = `
      ${head(8, d, 'split')}
      <div class="bento">${P.items.map((p, i) => {
        const [title, ctx, desc] = p[lang];
        return `<a class="proj${p.wide ? ' wide' : ''}" href="${S.links.github}/${p.repo}" ${external} data-reveal style="--i:${i % 4}">
          <div class="proj-top">${window.Mesh.emblem(p.repo, p.wide ? 70 : 54)}<span class="proj-arrow">${icon.arrow}</span></div>
          <p class="proj-ctx">${ctx}</p>
          <h3 class="proj-title">${title}</h3>
          <p class="proj-desc">${desc}</p>
          <p class="proj-foot"><span class="proj-date">${range(p.start, p.end)}</span><span class="proj-tags">${p.tags.map(x => `<span>${x}</span>`).join('')}</span></p>
          <span class="sr-only">${ui('viewCode')}</span>
        </a>`;
      }).join('')}
        <a class="proj more" href="${S.links.github}" ${external} data-reveal style="--i:3">
          <div class="proj-top">${icon.github}<span class="proj-arrow">${icon.arrow}</span></div>
          <h3 class="proj-title">${ui('moreGithub')}</h3>
          <p class="proj-desc">${ui('moreGithubNote')}</p>
          <p class="proj-foot"><span class="proj-date" dir="ltr">github.com/ShayanSalehi81</span></p>
        </a>
      </div>`;
  }

  function toolkitCode() {
    const span = (c, s) => `<span class="c-${c}">${s}</span>`;
    const MAX = 58, lines = [span('cm', '# the tools I reach for most'), `${span('v', 'toolkit')} ${span('p', '=')} ${span('p', '{')}`];
    S.beyond.toolkit.forEach(([key, items], k) => {
      const prefix = `    "${key}": [`;
      let line = `    ${span('k', `"${key}"`)}${span('p', ':')} ${span('p', '[')}`, len = prefix.length;
      items.forEach((item, j) => {
        const piece = `"${item}"` + (j < items.length - 1 ? ', ' : '');
        if (len + piece.length > MAX && j > 0) { lines.push(line.replace(/\s+$/, '')); line = ' '.repeat(prefix.length); len = prefix.length; }
        line += span('s', `"${item}"`) + (j < items.length - 1 ? span('p', ', ') : '');
        len += piece.length;
      });
      lines.push(line + span('p', ']') + (k < S.beyond.toolkit.length - 1 ? span('p', ',') : ''));
    });
    lines.push(span('p', '}'));
    return lines.join('\n');
  }

  function renderBeyond() {
    const B = S.beyond, d = B[lang];
    const tools = B.toolkit.reduce((n, [, v]) => n + v.length, 0);
    $('#beyond-body').innerHTML = `
      ${head(9, d)}
      <div class="beyond-grid">
        <figure class="cell" data-reveal>
          <figcaption class="cell-bar"><span class="cell-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>${ui('toolkit')}</span><span class="cell-file" dir="ltr">toolkit.py</span></figcaption>
          <div class="cell-row" dir="ltr"><span class="cell-prompt">In [1]:</span><pre><code>${toolkitCode()}</code></pre></div>
          <div class="cell-row out" dir="ltr"><span class="cell-prompt">Out[1]:</span><pre><code>${B.toolkit.length} areas · ${tools} tools</code></pre></div>
        </figure>
        <div class="langs" data-reveal>
          <h3 class="mini-title">${ui('languages')}</h3>
          <ul>${B.languages.map(l => {
            const [name, level] = l[lang];
            return `<li class="lang-row">
              <div class="lang-main"><span class="lang-name">${name}</span><span class="lang-level">${level}</span>
                <span class="dots" aria-hidden="true">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= l.level ? 'on' : ''}"></i>`).join('')}</span></div>
              ${l.ielts ? `<div class="ielts"><p class="ielts-head"><span>IELTS</span><b>${num(l.ielts.overall, 1)}</b></p>${l.ielts.parts.map(([k, v]) => `
                <div class="bar-row"><span>${B.ieltsParts[lang][k]}</span><span class="bar"><span style="--v:${(v / 9 * 100).toFixed(1)}%"></span></span><span class="bar-val">${num(v, 1)}</span></div>`).join('')}</div>` : ''}
            </li>`;
          }).join('')}</ul>
        </div>
        <div class="service" data-reveal>
          <h3 class="mini-title">${ui('service')}</h3>
          <div class="svc-grid">${B.service.map(s => {
            const x = s[lang];
            return `<article class="svc"><p class="svc-role">${x.role}</p><h4 class="svc-title">${x.title}</h4>
              <p class="svc-org">${x.org}${s.date ? ` · ${month(s.date)}` : ''}</p>
              <ul>${x.points.map(p => `<li>${p}</li>`).join('')}</ul></article>`;
          }).join('')}</div>
        </div>
      </div>`;
  }

  function renderContact() {
    const c = S.contact[lang];
    $('#contact-body').innerHTML = `
      <div class="contact-inner" data-reveal>
        <p class="sec-kicker"><span class="sec-num">§ ${pad(10)}</span><span class="sec-eyebrow">${c.eyebrow}</span></p>
        <h2 class="contact-title">${c.title}</h2>
        <p class="contact-body">${c.body}</p>
        <div class="mail-row">
          <a class="mail" href="mailto:${S.links.email}" dir="ltr">${S.links.email}</a>
          <button type="button" class="copy" id="copy-email">${icon.copy}<span>${ui('copy')}</span></button>
        </div>
        <div class="contact-links">${socialLinks('pill').replace(/<a class="pill" href="mailto[^]*?<\/a>/, '')}
          <a class="pill pill-solid" href="${S.links.cv}" download>${icon.download}<span class="lbl">${ui('cv')}</span></a></div>
        <p class="contact-loc">${icon.pin}${ui('location')}</p>
      </div>`;
    $('#footer-body').innerHTML = `
      <span>© ${fa(2026)} ${ui('footer')}</span>
      <span>${ui('updated')}: ${month(S.updated, 'long')}</span>
      <a href="#top">${ui('backTop')} <span aria-hidden="true">↑</span></a>`;
  }

  function renderChrome() {
    const nav = ui('nav');
    root.lang = lang; root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.title = ui('pageTitle');
    $('meta[name="description"]').content = ui('description');
    $$('[data-nav]').forEach(a => { a.textContent = nav[a.dataset.nav]; });
    $$('[data-t]').forEach(el => { el.textContent = ui(el.dataset.t); });
    $$('[data-alt]').forEach(el => { el.alt = ui(el.dataset.alt); });
    const lt = $('#lang-toggle');
    lt.querySelector('span').textContent = ui('langSwitch');
    lt.setAttribute('aria-label', ui('langLabel'));
    lt.lang = lang === 'fa' ? 'en' : 'fa';
    updateToggles();
  }

  function updateToggles() {
    const dark = root.dataset.theme === 'dark';
    $('#theme-toggle').setAttribute('aria-label', ui(dark ? 'themeLight' : 'themeDark'));
    $('#theme-toggle').title = ui(dark ? 'themeLight' : 'themeDark');
    $('#motion-toggle').setAttribute('aria-label', ui(paused ? 'motionPlay' : 'motionPause'));
    $('#motion-toggle').title = ui(paused ? 'motionPlay' : 'motionPause');
    $('#motion-toggle').setAttribute('aria-pressed', String(paused));
    const open = $('#nav').classList.contains('menu-open');
    $('#menu-toggle').setAttribute('aria-label', ui(open ? 'menuClose' : 'menuOpen'));
  }

  /* ---------- reveal + counters ---------- */
  function countUp(el) {
    const target = Number(el.dataset.count), dec = Number(el.dataset.dec || 0);
    if (paused || reduceMotion.matches) { el.textContent = num(target, dec); return; }
    const t0 = performance.now(), dur = 1300;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - (1 - p) ** 3;
      el.textContent = num(target * e, dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  const revealer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    $$('[data-count]', entry.target).forEach(countUp);
    revealer.unobserve(entry.target);
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observe(instant) {
    revealer.disconnect();
    $$('[data-reveal]').forEach(el => { if (instant) el.classList.add('in'); else revealer.observe(el); });
  }

  /* ---------- render all ---------- */
  function render(instant = false) {
    renderChrome(); renderHero(); renderAbout(); renderPubs(); renderResearch(); renderEducation();
    renderHonors(); renderTeaching(); renderWork(); renderProjects(); renderBeyond(); renderContact();
    observe(instant);
    if (!instant) $$('#hero-stats [data-count]').forEach(el => setTimeout(() => countUp(el), 900));
  }

  /* ---------- delegated interactions (bound once) ---------- */
  document.addEventListener('click', e => {
    const f = e.target.closest('[data-filter]');
    if (f) { pubFilter = f.dataset.filter; applyPubFilter(); return; }
    const row = e.target.closest('.g-btn');
    if (row) {
      const i = Number(row.dataset.row), wasOpen = row.getAttribute('aria-expanded') === 'true';
      openRow = wasOpen ? -1 : i;
      $$('.g-row').forEach((li, k) => { const open = k === openRow; li.classList.toggle('open', open); $('.g-btn', li).setAttribute('aria-expanded', String(open)); });
      return;
    }
    const tab = e.target.closest('.tab');
    if (tab) { selectTab(Number(tab.id.split('-')[1])); return; }
    if (e.target.closest('#copy-email')) copyEmail();
  });

  document.addEventListener('keydown', e => {
    const tab = e.target.closest && e.target.closest('.tab');
    if (!tab) return;
    const n = S.experience.items.length, i = Number(tab.id.split('-')[1]);
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      let step = keys[e.key];
      if (root.dir === 'rtl' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) step = -step;
      e.preventDefault(); selectTab((i + step + n) % n, true);
    } else if (e.key === 'Home') { e.preventDefault(); selectTab(0, true); }
    else if (e.key === 'End') { e.preventDefault(); selectTab(n - 1, true); }
  });

  // Teaching board: highlight every semester a course was taught in.
  const showCourse = chip => {
    const board = chip.closest('.board'), id = chip.dataset.course;
    board.classList.add('focusing');
    $$('.chip', board).forEach(c => c.classList.toggle('related', c.dataset.course === id));
    $('.board-info').innerHTML = courseInfo(id);
  };
  const clearCourse = () => {
    const board = $('.board'); if (!board) return;
    board.classList.remove('focusing');
    $$('.chip', board).forEach(c => c.classList.remove('related'));
    $('.board-info').textContent = ui('boardHint');
  };
  document.addEventListener('pointerover', e => { const chip = e.target.closest && e.target.closest('.chip'); if (chip) showCourse(chip); });
  document.addEventListener('pointerout', e => { if (e.target.closest && e.target.closest('.chip') && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.chip'))) clearCourse(); });
  document.addEventListener('focusin', e => { const chip = e.target.closest('.chip'); if (chip) showCourse(chip); });
  document.addEventListener('focusout', e => { if (e.target.closest('.chip') && !(e.relatedTarget && e.relatedTarget.closest('.chip'))) clearCourse(); });

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

  /* ---------- chrome: language, theme, motion, menu, scroll ---------- */
  $('#lang-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'fa' : 'en';
    store.set('ss-lang', lang);
    const url = new URL(location.href);
    if (lang === 'fa') url.searchParams.set('lang', 'fa'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render(true);
  });

  $('#theme-toggle').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    store.set('ss-theme', root.dataset.theme);
    $$('meta[name="theme-color"]').forEach(m => { m.content = root.dataset.theme === 'dark' ? '#1b1c1f' : '#ffffff'; });
    meshes.forEach(m => m.refresh());
    updateToggles();
  });

  function setMotion(value) {
    paused = value;
    root.classList.toggle('still', paused);
    meshes.forEach(m => m.setPaused(paused));
    updateToggles();
  }
  $('#motion-toggle').addEventListener('click', () => { setMotion(!paused); store.set('ss-motion', paused ? 'paused' : 'playing'); });

  const nav = $('#nav');
  $('#menu-toggle').addEventListener('click', () => {
    const open = !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', open);
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
    updateToggles();
  });
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('menu-open'); $('#menu-toggle').setAttribute('aria-expanded', 'false'); updateToggles();
  }));

  const hero = $('.hero'), progress = $('.progress');
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle('solid', y > (innerWidth < 900 ? 60 : hero.offsetHeight - 200));
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  const spy = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    if (id === 'top') { $$('[data-nav]').forEach(a => a.classList.remove('active')); return; }
    if (!$(`[data-nav="${id}"]`)) return;
    $$('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach(s => spy.observe(s));

  // Subtle depth on the portrait arch.
  const arch = $('#portrait');
  hero.addEventListener('pointermove', e => {
    if (paused || e.pointerType !== 'mouse') return;
    const r = arch.getBoundingClientRect();
    arch.style.setProperty('--ry', `${Math.max(-1, Math.min(1, (e.clientX - r.left) / r.width - 0.5)) * 6}deg`);
    arch.style.setProperty('--rx', `${Math.max(-1, Math.min(1, 0.5 - (e.clientY - r.top) / r.height)) * 5}deg`);
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { arch.style.setProperty('--rx', '0deg'); arch.style.setProperty('--ry', '0deg'); });

  /* ---------- boot ---------- */
  render();
  root.classList.toggle('still', paused);
  [['.hero', 'hero'], ['.honors', 'band'], ['.contact', 'plain']].forEach(([sel, mode]) => meshes.push(window.Mesh.field($(sel), { mode, paused })));
  onScroll();
  requestAnimationFrame(() => root.classList.add('ready'));
})();
