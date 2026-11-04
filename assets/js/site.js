/* Veronika Dominiková — portfolio. Plain JS, no build step. Content lives in data.js. */
(() => {
  const D = window.NOROLL, A = D.about;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const view = $('#view'), track = $('#track'), strip = $('.strip');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const product = D.product.filter(p => !p.draft), films = D.cinematic;
  const all = [...product, ...films];
  const vthumb = {};
  const thumb = p => p.cover || vthumb[p.vimeo] || '';
  films.forEach(p => fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent('https://vimeo.com/' + p.vimeo)}&width=640`).then(r => r.ok ? r.json() : null).then(j => { if (j && j.thumbnail_url) { vthumb[p.vimeo] = j.thumbnail_url; $$(`[data-thumb="${p.id}"]`).forEach(i => { i.src = j.thumbnail_url; }); } }).catch(() => {}));

  /* side strip: screens from whatever you're looking at */
  const imgsOf = p => (p.chapters || []).flatMap(c => [...(c.images || []), ...(c.steps || []).flatMap(s => s.images || [])]).filter(i => (i.size !== 'third') && !/journey|boarding|emails|components/.test(i.src)).map(i => i.src);
  let stripImgs = '';
  function setStrip(list) {
    const key = list.join();
    if (key === stripImgs) return; stripImgs = key;
    track.innerHTML = [...list, ...list, ...list].slice(0, 24).map(s => `<img src="${s}" alt="" loading="lazy">`).join('');
  }
  let t0 = performance.now();
  function tick(now) { if (!reduce) track.style.transform = `translateY(${-((now - t0) / 70 % 900) - scrollY * .22}px)`; requestAnimationFrame(tick); }
  requestAnimationFrame(tick);

  const rows = list => `<div class="list">${list.map(p => `<a class="row" href="#${p.id}"><img data-thumb="${p.id}" src="${thumb(p)}" alt="" loading="lazy"><span><b>${esc(p.title)}</b><small>${esc(p.subtitle)}</small></span><em>${p.reel ? 'Showreel' : p.vimeo ? 'Film' : 'Case study'}</em></a>`).join('')}</div>`;
  const talks = () => A.talks.map(t => `<li>${t.url ? `<a href="${t.url}" target="_blank" rel="noopener">${esc(t.what)}</a>` : esc(t.what)}</li>`).join('');
  const works = () => `<section class="section" id="work"><div class="count">${String(product.length).padStart(2, '0')} <i>case studies</i></div>${rows(product)}</section>
    <section class="section"><p class="eyebrow">On the side</p><h2 class="h2">AI campaigns</h2><p class="prose muted">${esc(A.fameplay)}</p>${rows(films)}</section>`;

  function home() {
    setStrip(['kiwi-hero', 'kbc-flow-builder', 'kiwi-ff-desktop', 'extit-hero', 'kiwi-bundles-desktop', 'kbc-dashboard', 'clash-hero', 'x-fameplay-humanoid'].map(n => `assets/img/work/${n}.jpg`));
    view.innerHTML = `<section class="hero"><h1>Lead Product Designer. <span>Monetization and complex flows.</span></h1>
      <p class="lead">I co-led Ancillaries at Kiwi.com, the sub-domain behind <b>70% of company revenue</b>, and built product research from zero at Keboola. Former CMO and co-founder, so I tend to ask what a feature earns before asking what colour it is.</p>
      <div class="cta"><a class="btn" href="#kiwi">Start with Kiwi.com</a><a class="btn btn--g" href="#work">All work</a><a class="btn btn--g" href="resume.html">CV</a></div>
      <a class="now" href="#kiwi" aria-label="Kiwi.com showreel"><span>Now playing</span><video src="assets/video/kiwi-showreel.mp4" poster="assets/img/work/kiwi-reel-poster.jpg" muted loop playsinline ${reduce ? '' : 'autoplay'}></video></a></section>
      <p class="path">${esc(A.path)}</p>${works()}`;
  }

  /* a page for one reader */
  const FOR = {
    revolut: {
      h: 'Hi Revolut.', s: 'This page exists for one reader. Hopefully you.',
      lead: 'I design commercial products end to end, on iOS, Android and web, in places where a tap has to earn something and a wrong one means a refund. Here’s the short route through my work, in the order I’d show it in the room.',
      why: [
        ['Discovery to delivery, on all three platforms', 'Fare Families at Kiwi.com: from the first sketch to handoff on web, iOS and Android, including refunds and the customer-service tool.', 'See Fare Families', 'kiwi/fare-families'],
        ['Decisions I can defend', 'One feature, from the ticket and benchmark to design critique and what we took forward.', 'Read the decision story', 'kiwi/decision'],
        ['Details that earn money', 'Co-led Ancillaries, the sub-domain behind 70% of Kiwi.com’s revenue: when an upsell appears, and when it should stay quiet.', 'See Bundles', 'kiwi/bundles'],
        ['Research and data, built from zero', 'At Keboola I set up user research, data tracking and the product process, then took a data engineers’ platform to pay-as-you-go users.', 'See Keboola', 'keboola'],
        ['Clean craft, beyond the product', 'Typography, grids and visual systems, from a whole studio identity to the websites I still design. I also prototype in code. This site is one.', 'See Fameplay', 'fameplay'],
      ],
    },
  };
  function forReader(k) {
    const f = FOR[k]; setStrip(['kiwi-ff-desktop', 'kiwi-bundles-desktop', 'kbc-flow-builder', 'kiwi-ff-desktop2', 'kbc-dashboard'].map(n => `assets/img/work/${n}.jpg`));
    view.innerHTML = `<section class="hero hero--for" style="min-height:0;padding-top:130px"><h1>${esc(f.h)} <span>${esc(f.s)}</span></h1><p class="lead">${esc(f.lead)}</p></section>
      <div class="for__why">${f.why.map(([b, s, c, l]) => `<a href="#${l}"><b>${esc(b)}</b><span>${esc(s)}</span><em>${esc(c)} ›</em></a>`).join('')}</div>
      <blockquote class="quote" style="max-width:var(--col);margin-top:48px">“${esc(D.product[0].quote.text)}”<cite>${esc(D.product[0].quote.who)}</cite></blockquote>
      <div class="cta" style="margin-top:32px"><a class="btn" href="mailto:${D.owner.email}">Talk to me</a><a class="btn btn--g" href="resume.html">CV</a><a class="btn btn--g" href="#work">All work</a></div>
      <p class="path" style="margin-top:56px">${esc(A.path)}</p>`;
  }

  function about() {
    setStrip([1, 2, 3, 4].map(i => `assets/img/portrait-${i}.jpg`));
    view.innerHTML = `<section class="case"><h1>About</h1>
      <p class="prose">${A.intro.map(esc).join('</p><p class="prose">')}</p><p class="prose">${esc(A.path)}</p>
      <div class="tags">${A.canDo.map(c => `<span>${esc(c)}</span>`).join('')}</div>
      <div class="ch"><h2>On stage</h2><ul class="ul">${talks()}</ul></div>
      <div class="ch"><h2>CV</h2><div style="margin-top:14px">${A.cv.map(r => `<div class="cvr"><span>${esc(r.when)}</span><div>${esc(r.what)}<small>${esc(r.where)}</small></div></div>`).join('')}</div><div class="cta"><a class="btn btn--g" href="resume.html">Plain-text CV</a><a class="btn btn--g" href="${D.owner.linkedin}" target="_blank" rel="noopener">LinkedIn</a></div></div>
      <div class="ch"><h2>What people say</h2>${A.references.map(r => `<blockquote class="quote">“${esc(r.text)}”<cite>${esc(r.who)}, ${esc(r.role)}</cite></blockquote>`).join('')}</div>
      <div class="ch"><h2>Tools</h2><div class="tags">${A.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div></div></section>`;
  }

  const fig = o => `<figure class="g g--${o.size || 'full'}"><img src="${o.src}"${o.w ? ` width="${o.w}" height="${o.h}"` : ''} alt="${esc(o.alt || '')}" loading="lazy" decoding="async" data-zoom${o.full ? ` data-full="${o.full}"` : ''}></figure>`;
  const gal = l => l ? `<div class="gallery">${l.map(fig).join('')}</div>` : '';
  const lis = l => l ? `<ul class="ul">${l.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';

  function kase(p, chapter) {
    const list = p.vimeo ? films : product, i = list.indexOf(p), prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const shots = imgsOf(p); setStrip(shots.length ? shots.slice(0, 10) : films.map(thumb).filter(Boolean));
    const media = p.vimeo ? `<iframe class="media" src="https://player.vimeo.com/video/${p.vimeo}?title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`
      : p.reel ? `<video class="media" src="${p.reel}" poster="${p.poster || p.hero}" controls muted loop playsinline preload="metadata" ${reduce ? '' : 'autoplay'} aria-label="${esc(p.title)} showreel with captions"></video>`
      : p.hero ? `<img class="media heroimg" src="${p.hero}" alt="${esc(p.heroAlt || p.title)}" data-zoom>` : '';
    const chs = p.chapters || [];
    view.innerHTML = `<article class="case"><div class="case__n">${String(i + 1).padStart(2, '0')} — ${String(list.length).padStart(2, '0')}</div><h1>${esc(p.title)}</h1><p class="case__sub">${esc(p.subtitle)}</p>${media}
      <div class="meta"><span><b>${esc(p.type)}</b></span><span>${esc(p.client)}</span>${p.production ? `<span>${esc(p.production)}</span>` : ''}${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${esc(p.link.replace(/^https:\/\/(www\.)?/, '').replace(/\/.*$/, ''))} ↗</a>` : ''}</div>
      ${chs.length ? `<nav class="chips" aria-label="Chapters"><button data-j="o" class="on">Overview</button>${chs.map(c => `<button data-j="${c.id}"${c.highlight ? ' class="hl"' : ''}>${c.highlight ? '★ ' : ''}${esc(c.title)}</button>`).join('')}</nav>` : ''}
      <section id="ch-o" style="scroll-margin-top:110px">
      ${p.facts ? `<div class="facts">${p.facts.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join('')}</div>` : ''}
      ${p.problem ? `<p class="prose">${esc(p.problem)}</p>` : ''}<p class="prose ${p.problem ? 'muted' : ''}">${esc(p.text)}</p>
      ${p.decisions ? `<div class="ch" style="padding-top:44px"><h2>Key decisions</h2>${lis(p.decisions)}</div>` : ''}${p.role ? `<div class="ch" style="padding-top:44px"><h2>My role</h2>${lis(p.role)}</div>` : ''}
      ${p.tools ? `<div class="tags">${p.tools.map(t => `<span>${esc(t)}</span>`).join('')}</div>` : ''}
      ${p.quote ? `<blockquote class="quote">“${esc(p.quote.text)}”<cite>${esc(p.quote.who)}</cite></blockquote>` : ''}${p.vimeo ? '<p class="prose muted" style="font-size:14px">Produced for Czech Video Center (Fameplay) as a freelancer. All rights belong to Czech Video Center a.s.</p>' : ''}</section>
      ${chs.map(c => `<section class="ch${c.highlight ? ' ch--hl' : ''}" id="ch-${c.id}"><h2>${esc(c.title)}</h2>${c.kicker ? `<p class="ch__k">${esc(c.kicker)}</p>` : ''}${c.text ? `<p class="t">${esc(c.text)}</p>` : ''}${lis(c.list)}${gal(c.images)}${(c.steps || []).map(s => `<div class="step"><h3>${esc(s.title)}</h3>${s.text ? `<p class="t">${esc(s.text)}</p>` : ''}${lis(s.list)}${gal(s.images)}</div>`).join('')}</section>`).join('')}
      <nav class="next"><a href="#${prev.id}"><small>Previous</small>${esc(prev.title)}</a><a href="#${next.id}"><small>Next</small>${esc(next.title)}</a></nav></article>`;
    $$('[data-j]').forEach(b => b.addEventListener('click', () => $('#ch-' + b.dataset.j)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })));
    const secs = $$('[id^="ch-"]');
    window.__spy = () => { let cur = secs[0]; secs.forEach(s => { if (s.getBoundingClientRect().top < 170) cur = s; }); const id = cur?.id.slice(3); $$('[data-j]').forEach(b => { const on = b.dataset.j === id; if (on && !b.classList.contains('on')) b.parentElement.scrollTo({ left: b.offsetLeft - 40, behavior: 'smooth' }); b.classList.toggle('on', on); }); };
    if (chapter) setTimeout(() => $('#ch-' + chapter)?.scrollIntoView(), 60);
  }
  addEventListener('scroll', () => window.__spy && window.__spy(), { passive: true });

  function route() {
    window.__spy = null;
    const h = decodeURIComponent(location.hash.slice(1)), r = (D.redirects && D.redirects[h]) || h, [id, ch] = r.split('/');
    const p = all.find(x => x.id === id);
    const scrollTop = id !== 'work';
    if (p) kase(p, ch); else if (id === 'about') about(); else if (FOR[id]) forReader(id); else home();
    strip.classList.add('on');
    view.style.animation = 'none'; void view.offsetWidth; view.style.animation = '';
    $$('.top nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + id));
    if (id === 'work') setTimeout(() => $('#work')?.scrollIntoView(), 30); else if (scrollTop && !ch) scrollTo({ top: 0, behavior: 'auto' });
    document.title = (p ? p.title + ' — ' : FOR[id] ? 'For ' + id[0].toUpperCase() + id.slice(1) + ' — ' : '') + 'Veronika Dominiková, Lead Product Designer';
  }
  addEventListener('hashchange', route);

  /* dock */
  $$('[data-go]').forEach(b => b.addEventListener('click', () => { const g = '#' + b.dataset.go; if (location.hash === g) route(); else location.hash = g; }));
  const dialog = (title, html, cta) => {
    const m = $('#modal'); m.innerHTML = `<div class="dlg" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="dlg__b"><h3>${esc(title)}</h3>${html}<button class="btn">${esc(cta)}</button></div></div>`;
    const close = () => { m.innerHTML = ''; }; $('.btn', m).focus(); $('.btn', m).addEventListener('click', close); $('.dlg', m).addEventListener('click', e => { if (e.target.classList.contains('dlg')) close(); });
  };
  const jokes = { figma: ['Figma', 'Someone renamed “Final_v7_REAL” to “Final_v8”. Engineering is already building v6.', 'Accept fate'], claude: ['Claude', 'Helped build this portfolio. Still not allowed to pick the final font.', 'Fair'] };
  $$('[data-joke]').forEach(b => b.addEventListener('click', () => { const [t, x, c] = jokes[b.dataset.joke]; dialog(t, `<p>${esc(x)}</p>`, c); }));
  $('[data-bin]').addEventListener('click', () => dialog('Bin of rejected rolls', '<p>Every shot in this portfolio had siblings. Most of them had seven fingers.</p><p>Also in here: one horse with five legs, and roughly 2,400 generations that were “almost there”.</p><p>You don’t ship the bin.</p>', 'Empty it. Don’t.'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { $('#modal').innerHTML = ''; $('.lb')?.remove(); } });
  document.addEventListener('click', e => {
    const img = e.target.closest('img[data-zoom]'); if (!img) return;
    const lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = `<img src="${img.dataset.full || img.currentSrc || img.src}" alt="${esc(img.alt)}">`; lb.addEventListener('click', () => lb.remove()); document.body.appendChild(lb);
  });
  route();
})();
