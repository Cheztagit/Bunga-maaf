/* =========================================================================
   Buket Biru untuk Kak Nadya — interaction logic
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------ *
   *  1. FALLING PETALS
   * ------------------------------------------------------------------ */

  const petalField = document.getElementById('petal-field');

  function spawnPetal(seed) {
    const p = document.createElement('span');
    const roll = Math.random();
    p.className = 'petal' + (roll < 0.30 ? ' is-blue' : roll < 0.60 ? ' is-gold' : '');

    const size = 10 + Math.random() * 15;
    const duration = 10 + Math.random() * 8;

    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.setProperty('--drift', (Math.random() * 140 - 70).toFixed(0) + 'px');
    p.style.animationDuration = duration.toFixed(2) + 's';
    p.style.animationDelay = seed
      ? '-' + (Math.random() * duration).toFixed(2) + 's'
      : (Math.random() * 0.8).toFixed(2) + 's';

    petalField.appendChild(p);
    const lifetime = (seed ? duration : duration + 0.6) * 1000;
    setTimeout(() => p.remove(), lifetime);
  }

  for (let i = 0; i < 60; i++) spawnPetal(true);
  setInterval(() => spawnPetal(false), 100);

  /* ------------------------------------------------------------------ *
   *  2. BUILD THE BOUQUET (generated SVG)
   * ------------------------------------------------------------------ */

  function petalPath(len, wid) {
    const w = (wid / 2).toFixed(1);
    const l = len.toFixed(1);
    const mid = (len * 0.72).toFixed(1);
    return `M0,0 C -${w},-${(len * 0.26).toFixed(1)} -${(w * 0.9).toFixed(1)},-${mid} 0,-${l} ` +
           `C ${(w * 0.9).toFixed(1)},-${mid} ${w},-${(len * 0.26).toFixed(1)} 0,0 Z`;
  }

  function makeSpike(angleDeg, len, wid, fill, stroke, strokeWidth) {
    return `<g transform="rotate(${angleDeg.toFixed(1)})">` +
           `<path d="${petalPath(len, wid)}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>` +
           `</g>`;
  }

  function makeRose(cx, cy, scale, tilt) {
    let g = `<g transform="translate(${cx},${cy}) rotate(${tilt}) scale(${scale})">`;

    const outerCount = 7;
    for (let i = 0; i < outerCount; i++) {
      const angle = i * (360 / outerCount) + (Math.random() * 6 - 3);
      g += `<g transform="rotate(${angle.toFixed(1)})">` +
           `<path d="${petalPath(46, 30)}" fill="url(#roseOuter)" stroke="#0C1E63" stroke-width="1.1" stroke-opacity="0.35"/>` +
           `</g>`;
    }

    const innerCount = 6;
    for (let i = 0; i < innerCount; i++) {
      const angle = (360 / innerCount) / 2 + i * (360 / innerCount) + (Math.random() * 5 - 2.5);
      g += `<g transform="rotate(${angle.toFixed(1)})">` +
           `<path d="${petalPath(29, 21)}" fill="url(#roseInner)" stroke="#12308F" stroke-width="0.9" stroke-opacity="0.3"/>` +
           `</g>`;
    }

    g += `<circle r="6.5" fill="url(#roseCenter)"/>`;
    g += `</g>`;
    return g;
  }

  function buildBouquetSVG() {
    const fanCx = 200, fanCy = 190;

    /* --- starburst paper wrap (black + gold, like the reference photo) --- */
    let fan = `<g transform="translate(${fanCx},${fanCy})">`;
    const spikeCount = 18;
    for (let i = 0; i < spikeCount; i++) {
      const angle = i * (360 / spikeCount);
      const long = i % 2 === 0;
      const len = long ? 195 + Math.random() * 12 : 165 + Math.random() * 10;
      const wid = long ? 58 : 46;
      const fill = i % 3 === 0 ? '#1B1930' : '#151220';
      fan += makeSpike(angle, len, wid, fill, '#D8AE55', 2.4);
    }
    // thin gold-only spikes peeking between the black paper
    for (let i = 0; i < spikeCount; i++) {
      const angle = i * (360 / spikeCount) + (360 / spikeCount) / 2;
      fan += makeSpike(angle, 140 + Math.random() * 10, 14, 'none', '#E7C170', 2);
    }
    // paint-splatter dots for texture
    let dots = '';
    for (let i = 0; i < 30; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 70 + Math.random() * 110;
      const x = (Math.cos(a) * r).toFixed(1);
      const y = (Math.sin(a) * r).toFixed(1);
      const rad = (0.8 + Math.random() * 1.8).toFixed(1);
      dots += `<circle cx="${x}" cy="${y}" r="${rad}" fill="#F4F2EE" opacity="${(0.35 + Math.random() * 0.45).toFixed(2)}"/>`;
    }
    fan += dots + `</g>`;

    /* --- rose cluster (7 tangkai) --- */
    const roses = [
      makeRose(200, 150, 1.05, 0),
      makeRose(142, 187, 0.92, -8),
      makeRose(258, 187, 0.92, 8),
      makeRose(168, 227, 1.0, -4),
      makeRose(232, 227, 1.0, 4),
      makeRose(118, 152, 0.78, -14),
      makeRose(282, 152, 0.78, 14),
    ].join('');

    /* --- ribbon band + bow (left plain, no printed text) --- */
    const ribbon = `
      <g>
        <rect x="103" y="215" width="194" height="34" rx="9" fill="url(#ribbonGrad)" stroke="#12308F" stroke-width="1.2"/>
        <rect x="103" y="215" width="194" height="8" rx="4" fill="#BFD6FF" opacity="0.55"/>
        <g transform="translate(112,232)">
          <path d="M0,0 C -20,-16 -34,-4 -20,10 C -8,18 0,10 0,0 Z" fill="url(#roseInner)" stroke="#12308F" stroke-width="1"/>
          <path d="M0,0 C 20,-16 34,-4 20,10 C 8,18 0,10 0,0 Z" fill="url(#roseInner)" stroke="#12308F" stroke-width="1"/>
          <rect x="-7" y="-7" width="14" height="14" rx="4" fill="url(#roseOuter)" stroke="#0C1E63" stroke-width="1"/>
        </g>
      </g>`;

    /* --- little butterfly accent --- */
    const butterfly = `
      <g transform="translate(258,246) rotate(-6)">
        <ellipse cx="0" cy="0" rx="2.6" ry="9" fill="#1B1930"/>
        <path d="M-1,-6 C -20,-22 -34,-10 -18,2 C -10,7 -3,2 -1,-6 Z" fill="#F4F2EE" stroke="#D8AE55" stroke-width="1"/>
        <path d="M1,-6 C 20,-22 34,-10 18,2 C 10,7 3,2 1,-6 Z" fill="#F4F2EE" stroke="#D8AE55" stroke-width="1"/>
        <path d="M-1,2 C -14,10 -22,20 -10,22 C -4,22 -1,14 -1,2 Z" fill="#DCE8FF" stroke="#D8AE55" stroke-width="0.8"/>
        <path d="M1,2 C 14,10 22,20 10,22 C 4,22 1,14 1,2 Z" fill="#DCE8FF" stroke="#D8AE55" stroke-width="0.8"/>
      </g>`;

    /* --- gathered paper handle beneath the ribbon --- */
    const handle = `
      <g>
        <path d="M150,248 L250,248 L222,438 L178,438 Z" fill="url(#handleGrad)"/>
        <path d="M150,248 L178,438" stroke="#D8AE55" stroke-width="3" fill="none"/>
        <path d="M250,248 L222,438" stroke="#D8AE55" stroke-width="3" fill="none"/>
        <path d="M188,300 L212,300" stroke="#3A3550" stroke-width="2" opacity="0.5"/>
        <path d="M185,360 L215,360" stroke="#3A3550" stroke-width="2" opacity="0.5"/>
      </g>`;

    const defs = `
      <defs>
        <radialGradient id="roseOuter" cx="35%" cy="20%" r="85%">
          <stop offset="0%" stop-color="#C7DAFF"/>
          <stop offset="35%" stop-color="#5B8DFF"/>
          <stop offset="72%" stop-color="#2A4FCB"/>
          <stop offset="100%" stop-color="#11205E"/>
        </radialGradient>
        <radialGradient id="roseInner" cx="40%" cy="25%" r="88%">
          <stop offset="0%" stop-color="#EEF4FF"/>
          <stop offset="42%" stop-color="#8FB2FF"/>
          <stop offset="100%" stop-color="#2C55C9"/>
        </radialGradient>
        <radialGradient id="roseCenter" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#F6F9FF"/>
          <stop offset="100%" stop-color="#6F97F5"/>
        </radialGradient>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4E78EE"/>
          <stop offset="100%" stop-color="#1F3FA0"/>
        </linearGradient>
        <linearGradient id="handleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#231F33"/>
          <stop offset="100%" stop-color="#0C0A14"/>
        </linearGradient>
      </defs>`;

    return `<svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">` +
           defs + handle + fan + roses + ribbon + butterfly +
           `</svg>`;
  }

  const bouquetEl = document.getElementById('bouquet');
  bouquetEl.innerHTML = buildBouquetSVG();

  /* ------------------------------------------------------------------ *
   *  3. DRAG THE BOUQUET INTO THE BASKET
   * ------------------------------------------------------------------ */

  const basketEl = document.getElementById('basket');
  const sparkleLayer = document.getElementById('sparkleLayer');
  const yeayEl = document.getElementById('yeayText');
  const questionCard = document.getElementById('questionCard');

  let currentDX = 0, currentDY = 0;
  let delivered = false;
  let dragging = false;
  let startX = 0, startY = 0, originX = 0, originY = 0;

  function setBouquetTransform(dx, dy, scale) {
    bouquetEl.style.transform =
      `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${scale === undefined ? 1 : scale})`;
  }

  function isOverBasket() {
    const bRect = bouquetEl.getBoundingClientRect();
    const basketRect = basketEl.getBoundingClientRect();
    const cx = bRect.left + bRect.width / 2;
    const cy = bRect.top + bRect.height * 0.72;
    const pad = 16;
    return (
      cx > basketRect.left - pad && cx < basketRect.right + pad &&
      cy > basketRect.top - pad && cy < basketRect.bottom + pad
    );
  }

  function onPointerDown(e) {
    if (delivered) return;
    bouquetEl.classList.remove('idle-hint');
    bouquetEl.setPointerCapture(e.pointerId);
    bouquetEl.classList.add('dragging');
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    originX = currentDX;
    originY = currentDY;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }

  function onPointerMove(e) {
    if (!dragging) return;
    currentDX = originX + (e.clientX - startX);
    currentDY = originY + (e.clientY - startY);
    setBouquetTransform(currentDX, currentDY);
    basketEl.classList.toggle('hover', isOverBasket());
  }

  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    bouquetEl.classList.remove('dragging');
    basketEl.classList.remove('hover');

    if (isOverBasket()) {
      placeInBasket();
    }
    // kalau bukan di keranjang, buketnya tetap diam di posisi terakhir dilepas
  }

  bouquetEl.addEventListener('pointerdown', onPointerDown);

  bouquetEl.addEventListener('keydown', (e) => {
    if (delivered) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      placeInBasket();
    }
  });

  window.addEventListener('resize', () => {
    if (!dragging && !delivered) {
      currentDX = 0;
      currentDY = 0;
      bouquetEl.style.transition = 'none';
      setBouquetTransform(0, 0, 1);
      requestAnimationFrame(() => { bouquetEl.style.transition = ''; });
    }
  });

  /* ------------------------------------------------------------------ *
   *  4. SPARKLES + "YEAY"
   * ------------------------------------------------------------------ */

  function spawnSparkles() {
    const symbols = ['✦', '✧', '❀', '✿', '⋆'];
    const colors = ['var(--gold-500)', 'var(--blue-500)', 'var(--pink-500)', 'var(--gold-300)'];

    for (let i = 0; i < 22; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      s.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 75;
      s.style.setProperty('--dx', (Math.cos(angle) * dist).toFixed(0) + 'px');
      s.style.setProperty('--dy', (Math.sin(angle) * dist - 20).toFixed(0) + 'px');
      s.style.setProperty('--size', (12 + Math.random() * 14).toFixed(0) + 'px');
      s.style.setProperty('--spark-color', colors[Math.floor(Math.random() * colors.length)]);
      s.style.animationDelay = (Math.random() * 0.15).toFixed(2) + 's';

      sparkleLayer.appendChild(s);
      setTimeout(() => s.remove(), 1200);
    }
  }

  /* ------------------------------------------------------------------ *
   *  5. PLACE BOUQUET → SPARKLE → SWITCH TO DELIVERY SCENE
   * ------------------------------------------------------------------ */

  function placeInBasket() {
    if (delivered) return;
    delivered = true;

    bouquetEl.setAttribute('aria-hidden', 'true');
    bouquetEl.tabIndex = -1;
    if (questionCard) questionCard.style.opacity = '0';

    const bRect = bouquetEl.getBoundingClientRect();
    const basketRect = basketEl.getBoundingClientRect();
    const targetX = currentDX + (basketRect.left + basketRect.width / 2) - (bRect.left + bRect.width / 2);
    const targetY = currentDY + (basketRect.top + basketRect.height * 0.32) - (bRect.top + bRect.height / 2);

    bouquetEl.style.transition = 'transform 0.45s cubic-bezier(0.5,-0.3,0.7,1)';
    setBouquetTransform(targetX, targetY, 0.16);

    spawnSparkles();
    yeayEl.classList.add('show');

    setTimeout(() => bouquetEl.classList.add('delivered'), 420);
    setTimeout(() => goToDeliveryScene(), 2000);
  }

  /* ------------------------------------------------------------------ *
   *  6. DELIVERY SCENE — TRUCK DRIVES TO THE HOUSE
   * ------------------------------------------------------------------ */

  const gardenScene = document.getElementById('scene-garden');
  const deliveryScene = document.getElementById('scene-delivery');
  const truckEl = document.getElementById('truck');
  const deliveredBouquetEl = document.getElementById('deliveredBouquet');
  const deliveryMessageEl = document.getElementById('deliveryMessage');
  const restartBtn = document.getElementById('restartBtn');

  function goToDeliveryScene() {
    gardenScene.classList.remove('is-active');
    deliveryScene.classList.add('is-active');
    setTimeout(() => truckEl.classList.add('drive'), 300);
  }

  truckEl.addEventListener('animationend', (e) => {
    if (e.animationName === 'driveIn' || e.animationName === 'driveInSmall') {
      deliveredBouquetEl.classList.add('show');
      setTimeout(() => deliveryMessageEl.classList.add('show'), 450);
    }
  });

  function resetExperience() {
    deliveryScene.classList.remove('is-active');
    gardenScene.classList.add('is-active');

    deliveryMessageEl.classList.remove('show');
    deliveredBouquetEl.classList.remove('show');
    truckEl.classList.remove('drive');
    void truckEl.offsetWidth; // restart CSS animation next time

    sparkleLayer.innerHTML = '';
    yeayEl.classList.remove('show');

    delivered = false;
    currentDX = 0;
    currentDY = 0;
    bouquetEl.classList.remove('delivered');
    bouquetEl.classList.add('idle-hint');
    bouquetEl.removeAttribute('aria-hidden');
    bouquetEl.tabIndex = 0;
    if (questionCard) questionCard.style.opacity = '';
    bouquetEl.style.transition = 'transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
    setBouquetTransform(0, 0, 1);
  }

  restartBtn.addEventListener('click', resetExperience);

  /* gentle idle wiggle to hint that the bouquet can be dragged */
  bouquetEl.classList.add('idle-hint');
});
