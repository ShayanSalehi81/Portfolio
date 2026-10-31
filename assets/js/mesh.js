/* Drifting triangulated field (adapted from the connected-triangle background in inspiring_repo)
   and deterministic low-poly emblems. No dependencies. */
(() => {
  'use strict';

  // Bowyer–Watson Delaunay triangulation; returns index triples into `points`.
  function triangulate(points) {
    const n = points.length;
    const span = Math.max(...points.flatMap(p => [Math.abs(p.x), Math.abs(p.y)])) * 12 + 100;
    const all = points.concat([{ x: -span, y: -span }, { x: span * 2, y: -span }, { x: 0, y: span * 2 }]);
    const circle = (a, b, c) => {
      const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
      if (Math.abs(d) < 1e-4) return { x: 0, y: 0, r: -1 };
      const aa = a.x * a.x + a.y * a.y, bb = b.x * b.x + b.y * b.y, cc = c.x * c.x + c.y * c.y;
      const x = (aa * (b.y - c.y) + bb * (c.y - a.y) + cc * (a.y - b.y)) / d;
      const y = (aa * (c.x - b.x) + bb * (a.x - c.x) + cc * (b.x - a.x)) / d;
      return { x, y, r: (x - a.x) ** 2 + (y - a.y) ** 2 };
    };
    const make = (a, b, c) => ({ ids: [a, b, c], ...circle(all[a], all[b], all[c]) });
    let triangles = [make(n, n + 1, n + 2)];
    points.forEach((point, index) => {
      const edges = new Map(), kept = [];
      triangles.forEach(t => {
        if ((point.x - t.x) ** 2 + (point.y - t.y) ** 2 <= t.r) {
          for (let j = 0; j < 3; j++) {
            const a = t.ids[j], b = t.ids[(j + 1) % 3], key = a < b ? a + ':' + b : b + ':' + a;
            if (edges.has(key)) edges.delete(key); else edges.set(key, [a, b]);
          }
        } else kept.push(t);
      });
      edges.forEach(([a, b]) => kept.push(make(a, b, index)));
      triangles = kept;
    });
    return triangles.filter(t => t.ids.every(id => id < n)).map(t => t.ids);
  }

  const hash = (i) => { const x = Math.sin(i * 127.1 + 41.7) * 43758.5453; return x - Math.floor(x); };
  const rgb = (el, name, fallback) => (getComputedStyle(el).getPropertyValue(name).trim() || fallback);

  /* mode: 'hero'  – tinted facets over a photograph, white edges
           'band'  – light edges over a dark band
           'plain' – faint edges over the page background */
  function field(element, { mode = 'plain', paused = false } = {}) {
    const canvas = element.querySelector('.mesh');
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return { setPaused() {}, refresh() {} };
    let width = 0, height = 0, nodes = [], triangles = [], edges = [], waves = [];
    let frame = 0, last = 0, time = 0, visible = false, stopped = paused;
    let pointer = { x: -1e4, y: -1e4, active: false };
    let line = '29,92,82', tint = '12,38,34';
    const phone = () => matchMedia('(max-width: 640px)').matches;

    function refresh() {
      line = rgb(element, '--mesh-line', line);
      tint = rgb(element, '--mesh-tint', tint);
      draw(0);
    }

    function resize() {
      const rect = element.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const spacing = phone() ? 108 : mode === 'hero' ? 152 : 140;
      const cols = Math.ceil(width / spacing) + 3, rows = Math.ceil(height / spacing) + 3;
      nodes = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const x = (c - 0.9) * spacing + (hash(i * 2) - 0.5) * spacing * 0.68;
        const y = (r - 0.9) * spacing + (hash(i * 2 + 1) - 0.5) * spacing * 0.68;
        nodes.push({ x, y, bx: x, by: y, vx: 0, vy: 0, phase: i * 1.618 });
      }
      triangles = triangulate(nodes).map((ids, i) => ({ ids, shade: hash(i + 7.3) }));
      const unique = new Map();
      triangles.forEach(({ ids }) => ids.forEach((id, k) => {
        const a = id, b = ids[(k + 1) % 3];
        unique.set(a < b ? a + ':' + b : b + ':' + a, a < b ? [a, b] : [b, a]);
      }));
      edges = [...unique.values()];
      waves = [];
      refresh();
    }

    function nearness(x, y, radius) {
      if (!pointer.active || stopped) return 0;
      return Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / radius);
    }

    function draw(delta) {
      time += delta;
      ctx.clearRect(0, 0, width, height);
      waves = waves.filter(w => time - w.time < 2.6);
      const step = delta ? Math.min(delta * 60, 2) : 0;
      for (const node of nodes) {
        let tx = node.bx + (stopped ? 0 : Math.sin(time * 0.37 + node.phase) * 15);
        let ty = node.by + (stopped ? 0 : Math.cos(time * 0.29 + node.phase) * 13);
        const dx = node.bx - pointer.x, dy = node.by - pointer.y, dist = Math.hypot(dx, dy);
        if (pointer.active && !stopped && dist < 220 && dist > 0) {
          const force = (1 - dist / 220) ** 2 * 54; tx += dx / dist * force; ty += dy / dist * force;
        }
        for (const w of waves) {
          const age = time - w.time, wx = node.bx - w.x, wy = node.by - w.y, d = Math.hypot(wx, wy);
          const pulse = Math.exp(-(((d - age * 360) / 85) ** 2)) * 32 * (1 - age / 2.6);
          if (d > 0) { tx += wx / d * pulse; ty += wy / d * pulse; }
        }
        if (step) {
          node.vx = (node.vx + (tx - node.x) * 0.04 * step) * 0.84;
          node.vy = (node.vy + (ty - node.y) * 0.04 * step) * 0.84;
          node.x += node.vx * step; node.y += node.vy * step;
        } else if (!delta && stopped) { node.x = node.bx; node.y = node.by; }
      }

      const hero = mode === 'hero';
      if (hero) { ctx.fillStyle = `rgba(${tint},.2)`; ctx.fillRect(0, 0, width, height); }
      triangles.forEach(({ ids, shade }, i) => {
        const [a, b, c] = ids.map(id => nodes[id]);
        const near = nearness((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3, 260);
        const breathe = stopped ? 0 : (Math.sin(time * 0.33 + i * 0.7) + 1) * 0.5;
        let alpha;
        if (hero) alpha = Math.max(0, 0.1 + shade * 0.3 + breathe * 0.05 - near * 0.3);
        else alpha = (i % 7 === 0 ? 0.05 : 0.008) + breathe * 0.022 + near * 0.09;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.closePath();
        ctx.fillStyle = `rgba(${hero ? tint : line},${alpha})`; ctx.fill();
      });

      const edge = hero ? '255,255,255' : line;
      const base = hero ? 0.1 : mode === 'band' ? 0.16 : 0.13;
      for (const [ai, bi] of edges) {
        const a = nodes[ai], b = nodes[bi];
        const near = nearness((a.x + b.x) / 2, (a.y + b.y) / 2, 250);
        ctx.strokeStyle = `rgba(${edge},${base + near * 0.32})`; ctx.lineWidth = 0.6 + near * 0.5;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      nodes.forEach((node, i) => {
        const near = nearness(node.x, node.y, 200) > 0;
        ctx.fillStyle = `rgba(${edge},${near ? 0.85 : 0.38})`;
        ctx.beginPath(); ctx.arc(node.x, node.y, near ? 2.4 : 1.4, 0, Math.PI * 2); ctx.fill();
        if (i % 13 === 0) { ctx.strokeStyle = `rgba(${edge},.3)`; ctx.lineWidth = 0.7; ctx.beginPath(); ctx.arc(node.x, node.y, 5, 0, Math.PI * 2); ctx.stroke(); }
      });
    }

    function loop(ts) {
      frame = 0;
      if (stopped || !visible || document.hidden) { last = 0; return; }
      if (!last || ts - last >= (phone() ? 1000 / 30 : 1000 / 50)) {
        draw(last ? Math.min((ts - last) / 1000, 0.06) : 0.016); last = ts;
      }
      frame = requestAnimationFrame(loop);
    }
    const start = () => { if (!frame && !stopped && visible && !document.hidden) frame = requestAnimationFrame(loop); };
    const stop = () => { cancelAnimationFrame(frame); frame = 0; last = 0; };
    function setPaused(value) {
      stopped = value;
      if (value) { stop(); pointer.active = false; waves = []; draw(0); } else start();
    }

    element.addEventListener('pointermove', e => {
      const r = element.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top, active: true };
    }, { passive: true });
    element.addEventListener('pointerleave', () => { pointer.active = false; }, { passive: true });
    element.addEventListener('pointerdown', e => {
      if (stopped || e.target.closest('a,button,input,summary')) return;
      const r = element.getBoundingClientRect();
      waves.push({ x: e.clientX - r.left, y: e.clientY - r.top, time });
      if (waves.length > 5) waves.shift();
    }, { passive: true });
    element.addEventListener('pointerup', e => { if (e.pointerType === 'touch') pointer.active = false; }, { passive: true });
    element.addEventListener('pointercancel', () => { pointer.active = false; }, { passive: true });
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; visible ? start() : stop(); }).observe(element);
    document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });
    new ResizeObserver(resize).observe(element);
    resize();
    return { setPaused, refresh };
  }

  // A small deterministic low-poly emblem (SVG markup) seeded by a string.
  function emblem(seed, size = 64) {
    let h = 2166136261;
    for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
    const rand = () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
    const pts = [{ x: 50, y: 4 }, { x: 96, y: 86 }, { x: 4, y: 86 }];
    for (let i = 0; i < 6; i++) {
      // sample inside the outer triangle so the emblem keeps a triangular silhouette
      let u = rand(), v = rand(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
      pts.push({ x: 50 + u * 46 - v * 46, y: 4 + u * 82 + v * 82 });
    }
    const tris = triangulate(pts);
    const accent = Math.floor(rand() * tris.length);
    const faces = tris.map((ids, i) => {
      const d = ids.map(id => `${pts[id].x.toFixed(1)},${pts[id].y.toFixed(1)}`).join(' ');
      const cls = i === accent ? 'e-accent' : `e-f${Math.floor(rand() * 3)}`;
      return `<polygon class="${cls}" points="${d}"/>`;
    }).join('');
    return `<svg class="emblem" viewBox="0 0 100 90" width="${size}" height="${size * 0.9}" aria-hidden="true" focusable="false">${faces}</svg>`;
  }

  window.Mesh = { triangulate, field, emblem };
})();
