/* ==========================================================================
   ★★★ SEMUA TULISAN YANG BISA KAMU GANTI ADA DI SINI ★★★
   --------------------------------------------------------------------------
   Kamu cuma perlu ngedit blok KONTEN di bawah ini. Sisa file di bawahnya
   nggak usah disentuh. Tulis {nama} di mana pun kalau mau nama pacarmu
   muncul otomatis di situ.
   ========================================================================== */
const KONTEN = {

  /* --- 0a. LAGU LATAR --------------------------------------------------
     aktif     : true = lagu diputar. false = matikan lagu.
     file      : nama file lagunya. Taruh file mp3-nya di folder yang sama
                 dengan index.html, lalu tulis namanya persis di sini.
                 Contoh: "lagu.mp3" atau "musik/lagu-kita.mp3"
     volume    : 0 sampai 1. 0.35 = pelan, 1 = paling keras.
     mulaiDetik: mulai dari detik ke berapa. Isi 0 kalau dari awal.
                 Berguna kalau mau langsung ke bagian reff.
     ulang     : true = lagu diulang terus sampai halaman ditutup.
     fadeMasuk : lama suara naik pelan-pelan (milidetik). 0 = langsung keras.
     matikanDrone: true = matikan dengungan sintetis bawaan biar nggak tabrakan
                   sama lagunya. Sangat disarankan true.
  -------------------------------------------------------------------- */
  musik: {
    aktif: true,
    file: "snap_out_of_it.mp3",
    volume: 0.45,
    mulaiDetik: 0,
    ulang: true,
    fadeMasuk: 2500,
    matikanDrone: true
  },

  /* --- 0. GERBANG NAMA (cuma satu nama yang boleh masuk) --------------
     aktif        : true = wajib isi nama yang cocok. false = siapa pun boleh masuk.
     namaDiizinkan: daftar tulisan yang kamu terima. Isi lebih dari satu kalau
                    mau jaga-jaga dia ngetik panggilan yang beda, contoh:
                    ["nabila", "bila", "dek bila"]
                    Huruf besar/kecil & spasi berlebih diabaikan otomatis.
     namaTampil   : nama yang dipakai di seluruh website, apa pun yang dia ketik.
                    Kosongkan ("") kalau mau pakai persis yang dia ketik.
     pesanSalah   : muncul kalau namanya nggak cocok.
     pesanKosong  : muncul kalau inputnya dibiarkan kosong.
  -------------------------------------------------------------------- */
  kunci: {
    aktif: true,
    namaDiizinkan: ["nadya", "Nadya" , "nara", "Nara", "Nadia"],
    namaTampil: "Nadya",
    pesanSalah: "AKSES DITOLAK · PESAN INI BUKAN BUAT KAMU",
    pesanKosong: "ISI NAMANYA DULU DONG"
  },

  /* --- 1. Teks hujan kode di background ------------------------------- */
  frasaHujan: [
    "I LOVE YOU ♡", "SAYANGKU ♥", "SEMANGAT YA ✦",
    "AKU NUNGGUIN KAMU ♡", "AKU KANGEN ✨", "AKU BUATIN BUAT KAMU ♥",
    "NIKAHIN AKU YA ♡", "SEMUANYA BUAT KAMU ✦", "FOREVER BARENG AKU YA? ♥",
    "I MISS YOU SAYANG ♡", "MAKASIH UDAH NEMENIN ♥", "KITA BAKAL KETEMU KAN? ♥",
    "AKU ADA DI TANGANMU SAYANG ✦", "HATIKU BUATMU ♡", "JANGAN TINGGALIN AKU ✦"
  ],

  /* Tambahan frasa yang menyertakan nama. {nama} otomatis diganti. */
  frasaHujanBernama: [
    "I LOVE YOU {nama} ♡",
    "{nama} SAYANGKU ♥",
    "SEMANGAT YA {nama} ✦",
    "{nama} NIKAHIN AKU YA ✨",
    "AKU KANGEN {nama} ♡"
  ],

  /* --- 2. Adegan cerita saat dekripsi ---------------------------------
     Mau nambah adegan? Tinggal copy satu blok { ... } dan taruh di bawahnya.
     pill    = label kecil di atas
     label   = tulisan di bar progress bawah
     persen  = 0-100
     teks    = kalimat besar yang muncul huruf per huruf
     bpm     = detak jantung di HUD atas
     jeda    = jeda setelah kalimat selesai (milidetik)
  --------------------------------------------------------------------- */
  adegan: [
    {
      pill: "✨ ADA PESAN MASUK",
      label: "MEMBACA PERASAAN [20%]",
      persen: 20,
      teks: "MAAF YA...",
      bpm: 88,
      durasi: 900,
      jeda: 750
    },
    {
      pill: "💭 ISI KEPALA TERDETEKSI",
      label: "MEMBUKA MEMORI [45%]",
      persen: 45,
      teks: "AKU LAGI MIKIRIN KAMU.",
      bpm: 105,
      durasi: 1200,
      jeda: 850
    },
    {
      pill: "🔒 MEMBUKA KUNCI ENKRIPSI",
      label: "KEMURNIAN PERASAAN 99.8% [70%]",
      persen: 70,
      teks: "DAN ADA SESUATU...",
      bpm: 125,
      durasi: 1050,
      jeda: 750
    },
    {
      pill: "💌 KHUSUS UNTUK {nama}",
      pillTanpaNama: "💌 PESAN INTI SIAP",
      label: "MENYELARASKAN DETAK JANTUNG [88%]",
      persen: 88,
      teks: "YANG HARUS BANGET AKU BILANG, {nama}...",
      teksTanpaNama: "YANG HARUS BANGET AKU BILANG...",
      bpm: 145,
      durasi: 1200,
      jeda: 900
    }
  ],

  /* --- 3. Kata pamungkas yang muncul satu per satu -------------------- */
  pillFinal: "💖 AKSES PENUH DIBERIKAN",
  labelFinal: "DEKRIPSI SELESAI [100%]",
  bpmFinal: 160,
  kataPamungkas: [
    { teks: "AKU",     partikel: 16, jeda: 500 },
    { teks: "SAYANG",  partikel: 22, jeda: 500 },
    { teks: "KAMU ♥",  partikel: 28, jeda: 700 }
  ],
  /* Nama pacarmu ikut muncul sebagai kata terakhir. Kosongkan kalau nggak mau. */
  kataNama: "{nama} ♡",

  /* --- 4. Layar terakhir (hati 3D) ------------------------------------ */
  tagAkhir: "-DEKRIPSI SELESAI- · 100% TERBUKA",
  bannerAkhir: "I LOVE YOU",
  namaAkhir: "UNTUK {nama} ♡",
  namaAkhirTanpaNama: "SELAMANYA MILIKMU ♡",
  dedikasi: "\"Kode - kode ini tidak akan bisa menyamai cintaku sayang,<br>tolong ya, stay bareng aku selamanya.\"",
  petunjuk: "✨ Gerakin kursor / miringin HP buat muterin hati · Tap buat kirim cinta",

  /* --- 5. Tombol-tombol ----------------------------------------------- */
  tombolMulai: "MULAI DEKRIPSI ❯",
  tombolPulse: "💓 Love buat mu sayang",
  tombolStar: "✨ Tambahan",
  tombolShare: "🔗 Nih pamer aja kalo mau",

  /* --- 6. Layar pertama ------------------------------------------------ */
  tagAwal: "PROTOCOL · SAYANG_AKU_NGGAK?",
  judulAwal: "PESAN TERENKRIPSI",
  subjudulAwal: "DATA LEVEL-TINGGI HANYA BISA DIBUKA OLEH SESEORANG YANG KHUSUS",
  labelInput: "MASUKAN NAMA SAMARAN:",
  placeholderInput: "Masukan nickname atau nama samaran",

  /* --- 7. Notifikasi & HUD --------------------------------------------- */
  statusSistem: "SISTEM ONLINE",
  pillAwal: "- Mendekripsi -",
  labelProgresAwal: "MENGINISIALISASI KODE [0%]",
  audioNyala: "🔊 AUDIO ON",
  audioMati: "🔇 AUDIO OFF",
  toastPulse: "💓 Detak jantungnya nyampe ke kamu!",
  toastStar: "✨ Hujan bintang buat kamu!",
  toastShare: "✓ Link-nya udah kesalin, tinggal kirim!",

  /* --- 8. Simbol partikel yang beterbangan ----------------------------- */
  simbolPartikel: ["♥", "♡", "💖", "✨", "✦", "1", "0", "🌸"]
};

/* Ganti {nama} dengan nama yang diketik. Jangan diubah. */
function isi(teks, nama) {
  if (!teks) return "";
  return teks.replace(/\{nama\}/g, (nama || "").toUpperCase());
}

/* ==========================================================================
   ↓↓↓ DI BAWAH SINI MESIN-NYA, NGGAK PERLU DIUBAH ↓↓↓
   ========================================================================== */

let audioCtx = null;
let soundEnabled = true;
let ambientOsc1 = null, ambientOsc2 = null, ambientGain = null;

/* ==========================================================================
   PEMUTAR LAGU LATAR
   Pengaturannya ada di KONTEN.musik paling atas.
   ========================================================================== */
let bgMusic = null;
let musikSudahJalan = false;
let fadeTimer = null;

function siapkanMusik() {
    const m = KONTEN.musik || {};
    if (!m.aktif || !m.file) return;

    bgMusic = document.getElementById("bgMusic");
    if (!bgMusic) return;

    bgMusic.src = m.file;
    bgMusic.loop = m.ulang !== false;
    bgMusic.volume = 0;
    bgMusic.preload = "auto";

    bgMusic.addEventListener("error", () => {
        console.warn(
            "[Lagu] Gagal memuat '" + m.file + "'. " +
            "Pastikan file-nya ada di folder yang sama dengan index.html " +
            "dan namanya ditulis persis (termasuk .mp3)."
        );
    });
}

function mulaiMusik() {
    const m = KONTEN.musik || {};
    if (!m.aktif || !bgMusic || musikSudahJalan || !soundEnabled) return;

    if (m.mulaiDetik) {
        try { bgMusic.currentTime = m.mulaiDetik; } catch (e) {}
    }

    const p = bgMusic.play();
    if (p && p.catch) {
        p.catch(() => {
            /* Browser menolak karena belum ada interaksi.
               Nanti dicoba lagi otomatis saat user klik / tekan tombol. */
            musikSudahJalan = false;
        });
    }
    musikSudahJalan = true;
    fadeVolume(m.volume != null ? m.volume : 0.45, m.fadeMasuk || 0);
}

/* Menaikkan / menurunkan volume pelan-pelan. */
function fadeVolume(target, durasi) {
    if (!bgMusic) return;
    if (fadeTimer) clearInterval(fadeTimer);

    target = Math.max(0, Math.min(1, target));
    if (!durasi) { bgMusic.volume = target; return; }

    const langkah = 40;
    const total = Math.max(1, Math.round(durasi / langkah));
    const awal = bgMusic.volume;
    let n = 0;

    fadeTimer = setInterval(() => {
        n++;
        const v = awal + (target - awal) * (n / total);
        bgMusic.volume = Math.max(0, Math.min(1, v));
        if (n >= total) {
            clearInterval(fadeTimer);
            fadeTimer = null;
        }
    }, langkah);
}

function hentikanMusik() {
    if (!bgMusic) return;
    fadeVolume(0, 600);
    setTimeout(() => { if (bgMusic) bgMusic.pause(); }, 650);
    musikSudahJalan = false;
}

siapkanMusik();

/* Browser memblokir suara sampai user menyentuh halaman.
   Jadi begitu ada klik / ketukan / tombol pertama, lagunya kita nyalakan. */
["click", "touchstart", "keydown"].forEach(ev => {
    window.addEventListener(ev, () => {
        initAudio();
        mulaiMusik();
    }, { once: false, passive: true });
});

function initAudio() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    /* Dengungan sintetis dimatikan kalau lagu aktif, biar nggak tabrakan. */
    const pakaiLagu = KONTEN.musik && KONTEN.musik.aktif && KONTEN.musik.matikanDrone;
    if (soundEnabled && !ambientGain && !pakaiLagu) {
        startAmbientDrone();
    }
}

function startAmbientDrone() {
    if (!audioCtx || !soundEnabled) return;
    try {
        ambientGain = audioCtx.createGain();
        ambientGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        ambientGain.gain.exponentialRampToValueAtTime(0.035, audioCtx.currentTime + 2.5);

        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        ambientOsc1 = audioCtx.createOscillator();
        ambientOsc1.type = "sine";
        ambientOsc1.frequency.setValueAtTime(130.81, audioCtx.currentTime); // C3

        ambientOsc2 = audioCtx.createOscillator();
        ambientOsc2.type = "triangle";
        ambientOsc2.frequency.setValueAtTime(196.00, audioCtx.currentTime); // G3

        ambientOsc1.connect(filter);
        ambientOsc2.connect(filter);
        filter.connect(ambientGain);
        ambientGain.connect(audioCtx.destination);

        ambientOsc1.start();
        ambientOsc2.start();
    } catch(e) {}
}

function boostAmbientHarmonics() {
    if (!ambientGain || !audioCtx) return;
    try {
        ambientGain.gain.exponentialRampToValueAtTime(0.07, audioCtx.currentTime + 1.5);
    } catch(e) {}
}

function playKeyClick(freq = 900) {
    if (!audioCtx || !soundEnabled) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq + (Math.random() * 160 - 80), audioCtx.currentTime);
        gain.gain.setValueAtTime(0.025, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.035);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
        setTimeout(() => { osc.disconnect(); gain.disconnect(); }, 100);
    } catch (e) {}
}

function playHeartbeatThump() {
    if (navigator.vibrate) {
        navigator.vibrate([30, 40, 50]);
    }
    if (!audioCtx || !soundEnabled) return;
    try {
        [0, 0.11].forEach((offset, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(idx === 0 ? 80 : 65, audioCtx.currentTime + offset);
            osc.frequency.exponentialRampToValueAtTime(28, audioCtx.currentTime + offset + 0.2);
            gain.gain.setValueAtTime(idx === 0 ? 0.3 : 0.22, audioCtx.currentTime + offset);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + offset + 0.22);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + offset);
            osc.stop(audioCtx.currentTime + offset + 0.24);
            setTimeout(() => { osc.disconnect(); gain.disconnect(); }, 400);
        });
    } catch (e) {}
}

function playCelestialChimes() {
    if (!audioCtx || !soundEnabled) return;
    try {
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.08);
            gain.gain.setValueAtTime(0.07, audioCtx.currentTime + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.08 + 2.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.08);
            osc.stop(audioCtx.currentTime + idx * 0.08 + 2.3);
            setTimeout(() => { osc.disconnect(); gain.disconnect(); }, 2600);
        });
    } catch (e) {}
}

/* ==========================================================================
   TOP ECG MONITOR (Ultra-Lightweight 60fps)
   ========================================================================== */
const ecgCanvas = document.getElementById("ecgCanvas");
const ecgCtx = ecgCanvas ? ecgCanvas.getContext("2d") : null;
const bpmCounter = document.getElementById("bpmCounter");
let currentBpm = 72;
let targetBpm = 72;
let ecgPoints = [];

function drawECG() {
    if (!ecgCtx) return;
    currentBpm += (targetBpm - currentBpm) * 0.04;
    if (bpmCounter) bpmCounter.textContent = Math.round(currentBpm) + " BPM";

    ecgCtx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ecgCtx.fillRect(0, 0, ecgCanvas.width, ecgCanvas.height);

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#ff2a8d";
    ecgCtx.strokeStyle = primaryColor;
    ecgCtx.lineWidth = 1.5;

    const time = Date.now() * 0.008 * (currentBpm / 72);
    const mod = time % 12;
    let y = 10;

    if (mod > 4 && mod < 5) y = 4;
    else if (mod >= 5 && mod < 6.2) y = 17;
    else if (mod >= 6.2 && mod < 7.5) y = 3;
    else if (mod >= 7.5 && mod < 8.5) y = 12;

    ecgPoints.push(y);
    if (ecgPoints.length > ecgCanvas.width) ecgPoints.shift();

    ecgCtx.beginPath();
    for (let i = 0; i < ecgPoints.length; i++) {
        if (i === 0) ecgCtx.moveTo(i, ecgPoints[i]);
        else ecgCtx.lineTo(i, ecgPoints[i]);
    }
    ecgCtx.stroke();

    requestAnimationFrame(drawECG);
}
requestAnimationFrame(drawECG);

/* ==========================================================================
   MATRIX RAIN ENGINE (Optimized)
   ========================================================================== */
const matrixCanvas = document.getElementById("matrixCanvas");
const mCtx = matrixCanvas.getContext("2d");

const baseLovePhrases = KONTEN.frasaHujan;

let mFontSize = 16;
let mColumns = 0;
let mStreams = [];
let matrixActive = true;
let matrixIntervalId = null;

/* Apa yang benar-benar diketik di kotak input. */
function getRawInput() {
    const input = document.getElementById("recipientInput");
    return (input && input.value.trim()) || "";
}

/* Membersihkan tulisan biar perbandingan nama nggak rewel:
   huruf kecil semua, spasi ganda dirapikan. */
function normalkan(teks) {
    return (teks || "").toLowerCase().replace(/\s+/g, " ").trim();
}

/* Cek apakah nama yang diketik termasuk yang kamu izinkan. */
function namaDiterima(teks) {
    const kunci = KONTEN.kunci || {};
    if (!kunci.aktif) return true;
    const daftar = (kunci.namaDiizinkan || []).map(normalkan);
    return daftar.includes(normalkan(teks));
}

/* Nama yang dipakai di seluruh website. */
function getTargetName() {
    const kunci = KONTEN.kunci || {};
    const diketik = getRawInput();
    if (kunci.aktif && kunci.namaTampil) return kunci.namaTampil;
    return diketik;
}

function getActivePhrases() {
    const name = getTargetName();
    if (!name) return baseLovePhrases;
    return [
        ...baseLovePhrases,
        ...KONTEN.frasaHujanBernama.map(t => isi(t, name))
    ];
}

function initMatrixStreams() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    mFontSize = Math.max(14, Math.min(18, Math.floor(window.innerWidth / 35)));
    mColumns = Math.floor(matrixCanvas.width / mFontSize);
    mStreams = [];

    const phrases = getActivePhrases();

    for (let i = 0; i < mColumns; i++) {
        const p = phrases[Math.floor(Math.random() * phrases.length)];
        mStreams[i] = {
            phrase: p,
            charIndex: Math.floor(Math.random() * p.length),
            y: Math.floor(Math.random() * (matrixCanvas.height / mFontSize)),
            speed: 0.45 + Math.random() * 0.65
        };
    }
}
initMatrixStreams();
window.addEventListener("resize", initMatrixStreams);

function drawMatrix() {
    if (!matrixActive) return;

    mCtx.fillStyle = "rgba(4, 2, 6, 0.18)";
    mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#ff2a8d";
    mCtx.font = `600 ${mFontSize}px 'Fira Code', monospace`;

    const phrases = getActivePhrases();

    for (let i = 0; i < mStreams.length; i++) {
        const s = mStreams[i];
        const x = i * mFontSize;
        const currentY = Math.floor(s.y) * mFontSize;

        const char = s.phrase[s.charIndex % s.phrase.length];
        s.charIndex++;

        // White glowing leading char (zero shadowBlur for high FPS)
        if (currentY >= 0 && currentY <= matrixCanvas.height + mFontSize) {
            mCtx.fillStyle = "#ffffff";
            mCtx.fillText(char, x, currentY);

            // Trailing colored chars
            mCtx.fillStyle = primaryColor;
            for (let trail = 1; trail < 4; trail++) {
                const trailChar = s.phrase[(s.charIndex - trail + s.phrase.length * 10) % s.phrase.length];
                const trailY = currentY - (trail * mFontSize);
                if (trailY >= 0) {
                    mCtx.fillText(trailChar, x, trailY);
                }
            }
        }

        s.y += s.speed;

        if (currentY > matrixCanvas.height + (mFontSize * 5) && Math.random() > 0.94) {
            s.y = 0;
            s.phrase = phrases[Math.floor(Math.random() * phrases.length)];
            s.charIndex = 0;
            s.speed = 0.45 + Math.random() * 0.65;
        }
    }
}
matrixIntervalId = setInterval(drawMatrix, 38);

/* ==========================================================================
   ULTRA-OPTIMIZED 3D PARTICLE HEART (Additive Blending · 60-120 FPS)
   ========================================================================== */
const heartCanvas = document.getElementById("heartCanvas");
const hCtx = heartCanvas.getContext("2d");

let particles = [];
const TOTAL_PARTICLES = 1100; // Optimal performance & high density
let heartAngleX = 0, heartAngleY = 0;
let targetHeartAngleX = 0, targetHeartAngleY = 0;
let heartPulseScale = 1;
let isHeartActive = false;

class Heart3DParticle {
    constructor() {
        this.resetTarget();
        this.x = (Math.random() - 0.5) * window.innerWidth * 1.4;
        this.y = (Math.random() - 0.5) * window.innerHeight * 1.4;
        this.z = (Math.random() - 0.5) * 600;
        this.size = 1.2 + Math.random() * 2.0;
        this.speed = 0.045 + Math.random() * 0.045;
        this.alpha = 0.4 + Math.random() * 0.6;
        this.isAccent = Math.random() < 0.16;
    }

    resetTarget() {
        const t = Math.random() * Math.PI * 2;
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
        const hz = (Math.random() - 0.5) * 11 * Math.sin(t);

        const scale = Math.min(window.innerWidth, window.innerHeight) * 0.0185;
        this.tx = hx * scale;
        this.ty = hy * scale;
        this.tz = hz * scale * 2.4;
    }

    update() {
        this.x += (this.tx * heartPulseScale - this.x) * this.speed;
        this.y += (this.ty * heartPulseScale - this.y) * this.speed;
        this.z += (this.tz - this.z) * this.speed;
    }
}

function initHeartParticles() {
    heartCanvas.width = window.innerWidth;
    heartCanvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < TOTAL_PARTICLES; i++) {
        particles.push(new Heart3DParticle());
    }
}
initHeartParticles();
window.addEventListener("resize", initHeartParticles);

// Smooth 3D tilt tracking
window.addEventListener("mousemove", (e) => {
    if (!isHeartActive) return;
    targetHeartAngleY = ((e.clientX / window.innerWidth) - 0.5) * 0.75;
    targetHeartAngleX = -((e.clientY / window.innerHeight) - 0.5) * 0.75;
});

window.addEventListener("deviceorientation", (e) => {
    if (!isHeartActive || !e.gamma) return;
    targetHeartAngleY = (e.gamma / 45) * 0.6;
    targetHeartAngleX = -(e.beta / 45) * 0.6;
});

function renderHeart3D() {
    if (!isHeartActive) {
        requestAnimationFrame(renderHeart3D);
        return;
    }

    hCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);

    // Hardware accelerated additive blending (zero CPU shadow overhead)
    hCtx.globalCompositeOperation = "lighter";

    heartAngleX += (targetHeartAngleX - heartAngleX) * 0.05;
    heartAngleY += (targetHeartAngleY - heartAngleY) * 0.05;

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#ff2a8d";
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || "#ffb3d9";

    const cx = heartCanvas.width / 2;
    const cy = heartCanvas.height * 0.42;
    const fov = 400;

    const cosY = Math.cos(heartAngleY), sinY = Math.sin(heartAngleY);
    const cosX = Math.cos(heartAngleX), sinX = Math.sin(heartAngleX);

    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();

        // 3D rotation
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Fast Perspective projection
        const scale = fov / (fov + z2 + 280);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;

        if (scale > 0 && projX >= 0 && projX <= heartCanvas.width && projY >= 0 && projY <= heartCanvas.height) {
            hCtx.beginPath();
            const radius = Math.max(0.7, p.size * scale);
            hCtx.arc(projX, projY, radius, 0, Math.PI * 2);
            hCtx.fillStyle = p.isAccent ? accentColor : primaryColor;
            hCtx.globalAlpha = Math.min(1, Math.max(0.2, scale * p.alpha));
            hCtx.fill();
        }
    }

    hCtx.globalCompositeOperation = "source-over";
    hCtx.globalAlpha = 1;
    requestAnimationFrame(renderHeart3D);
}
requestAnimationFrame(renderHeart3D);

// Dynamic Heartbeat expansion loop
function triggerHeartbeatPulse() {
    if (!isHeartActive) return;
    heartPulseScale = 1.16;
    playHeartbeatThump();
    setTimeout(() => { heartPulseScale = 0.96; }, 130);
    setTimeout(() => { heartPulseScale = 1.10; }, 240);
    setTimeout(() => { heartPulseScale = 1.0; }, 380);
}

/* ==========================================================================
   THEME SELECTOR & SOUND TOGGLE HANDLERS
   ========================================================================== */
document.querySelectorAll(".themeDot").forEach(dot => {
    dot.addEventListener("click", () => {
        document.querySelectorAll(".themeDot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        const theme = dot.dataset.color;
        if (theme === "pink") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
        playKeyClick(1200);
    });
});

const soundToggle = document.getElementById("soundToggle");
if (soundToggle) {
    soundToggle.addEventListener("click", () => {
        soundEnabled = !soundEnabled;
        soundToggle.textContent = soundEnabled ? KONTEN.audioNyala : KONTEN.audioMati;

        const pakaiLagu = KONTEN.musik && KONTEN.musik.aktif && KONTEN.musik.matikanDrone;

        if (!soundEnabled) {
            if (ambientGain && audioCtx) {
                ambientGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
            }
            hentikanMusik();
        } else {
            if (audioCtx && !pakaiLagu) startAmbientDrone();
            if (bgMusic) {
                musikSudahJalan = false;
                mulaiMusik();
            }
        }
    });
}

// URL Params parsing
const urlParams = new URLSearchParams(window.location.search);
const paramName = urlParams.get("to") || urlParams.get("name") || urlParams.get("for");
const recipientInput = document.getElementById("recipientInput");
if (paramName && recipientInput) {
    recipientInput.value = paramName;
}
/* Catatan: kalau KONTEN.kunci.aktif = true, nama dari link (?to=...) tetap
   harus cocok dengan daftar namaDiizinkan. Jadi link nggak bisa dipakai
   buat nembus gerbang. */

/* ==========================================================================
   TEXT SCRAMBLER & STORY SEQUENCE
   ========================================================================== */
const scrambleChars = "01#%$@!*&^~+=<>{}[]?/\\|abcdefghijklmnopqrstuvwxyz";

function scrambleText(element, finalText, duration = 1400) {
    return new Promise(resolve => {
        const length = finalText.length;
        const interval = 45;
        const totalSteps = duration / interval;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            const progress = step / totalSteps;
            const solvedCount = Math.floor(progress * length);

            let display = "";
            for (let i = 0; i < length; i++) {
                if (i < solvedCount) {
                    display += finalText[i];
                } else if (finalText[i] === " " || finalText[i] === "\n") {
                    display += finalText[i];
                } else {
                    const randChar = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                    display += `<span class="charFlicker">${randChar}</span>`;
                }
            }

            element.innerHTML = display;
            playKeyClick(650 + Math.random() * 500);

            if (step >= totalSteps) {
                clearInterval(timer);
                element.innerHTML = finalText;
                resolve();
            }
        }, interval);
    });
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function showPhase(phaseId) {
    document.querySelectorAll(".phaseCard, .cinemaCard").forEach(p => p.classList.remove("active"));
    const target = document.getElementById(phaseId);
    if (target) target.classList.add("active");
}

function triggerShockwave() {
    const flash = document.getElementById("shockwaveFlash");
    if (!flash) return;
    flash.style.opacity = "0.75";
    setTimeout(() => { flash.style.opacity = "0"; }, 200);
}

// Lightweight Particle Burst System
function spawnHeartBurst(originX, originY, count = 22) {
    const symbols = KONTEN.simbolPartikel;
    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "loveParticle";
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = originX + "px";
        p.style.top = originY + "px";
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 70 + Math.random() * 220;
        const dx = Math.cos(angle) * dist + "px";
        const dy = Math.sin(angle) * dist + "px";
        const rot = (Math.random() * 360) + "deg";
        
        p.style.setProperty("--dx", dx);
        p.style.setProperty("--dy", dy);
        p.style.setProperty("--rot", rot);
        document.body.appendChild(p);

        setTimeout(() => p.remove(), 1500);
    }
}

/* ==========================================================================
   MENERAPKAN TEKS DARI BLOK KONTEN KE HALAMAN
   ========================================================================== */
function terapkanTeksStatis() {
    const set = (id, teks, html = false) => {
        const el = document.getElementById(id);
        if (!el || teks == null) return;
        if (html) el.innerHTML = teks; else el.textContent = teks;
    };
    const setBy = (selector, teks) => {
        const el = document.querySelector(selector);
        if (el && teks != null) el.textContent = teks;
    };

    // Layar 1
    setBy("#phase1 .terminalTag", KONTEN.tagAwal);
    setBy("#phase1 .mainTitle", KONTEN.judulAwal);
    setBy("#phase1 .subtitle", KONTEN.subjudulAwal);
    setBy("#phase1 .inputLabel", KONTEN.labelInput);
    const input = document.getElementById("recipientInput");
    if (input && KONTEN.placeholderInput) input.placeholder = KONTEN.placeholderInput;
    set("startDecryptionBtn", KONTEN.tombolMulai);

    // HUD atas
    set("statusLabel", KONTEN.statusSistem);
    set("soundToggle", KONTEN.audioNyala);

    // Layar 2
    set("cinemaPill", KONTEN.pillAwal);
    set("progressLabel", KONTEN.labelProgresAwal);

    // Layar 3
    setBy("#phase3 .terminalTag", KONTEN.tagAkhir);
    setBy("#phase3 .heartCenterBanner", KONTEN.bannerAkhir);
    set("romanticNote", KONTEN.dedikasi, true);
    setBy("#phase3 .interactiveHint span", KONTEN.petunjuk);
    set("pulseHeartBtn", KONTEN.tombolPulse);
    set("starShowerBtn", KONTEN.tombolStar);
    set("shareLinkBtn", KONTEN.tombolShare);
}
terapkanTeksStatis();

/* ==========================================================================
   STORY PROGRESSION
   ========================================================================== */
const startBtn = document.getElementById("startDecryptionBtn");

/* Menampilkan pesan error di bawah kotak input + efek getar. */
function tampilkanErrorNama(pesan) {
    const box = document.getElementById("nameError");
    const wrapper = document.querySelector(".cyberInputWrapper");

    if (box) {
        box.textContent = pesan;
        box.classList.add("show");
    }
    if (wrapper) {
        wrapper.classList.remove("shake");
        void wrapper.offsetWidth;
        wrapper.classList.add("shake");
    }
    if (navigator.vibrate) navigator.vibrate([60, 50, 60]);
    playKeyClick(220);
}

function sembunyikanErrorNama() {
    const box = document.getElementById("nameError");
    if (box) box.classList.remove("show");
}

/* Dipanggil tombol & tombol Enter. */
function cobaMasuk() {
    const kunci = KONTEN.kunci || {};
    const diketik = getRawInput();

    if (kunci.aktif) {
        if (!diketik) {
            tampilkanErrorNama(kunci.pesanKosong || "ISI NAMANYA DULU");
            return;
        }
        if (!namaDiterima(diketik)) {
            tampilkanErrorNama(kunci.pesanSalah || "AKSES DITOLAK");
            return;
        }
    }

    sembunyikanErrorNama();
    initAudio();
    runDecryptionStory();
}

if (startBtn) {
    startBtn.addEventListener("click", cobaMasuk);
}

if (recipientInput) {
    recipientInput.addEventListener("keydown", e => {
        if (e.key === "Enter") cobaMasuk();
    });
    /* Pesan error hilang begitu dia mulai ngetik ulang. */
    recipientInput.addEventListener("input", sembunyikanErrorNama);
}

async function runDecryptionStory() {
    const name = getTargetName();
    showPhase("phase2");

    const cinemaWord = document.getElementById("cinemaWord");
    const cinemaPill = document.getElementById("cinemaPill");
    const progressFill = document.getElementById("progressFill");
    const progressLabel = document.getElementById("progressLabel");

    function setProgress(pct, label) {
        if (progressFill) progressFill.style.width = pct + "%";
        if (progressLabel) progressLabel.textContent = isi(label, name);
    }

    // --- Putar setiap adegan dari KONTEN.adegan -------------------------
    for (const adegan of KONTEN.adegan) {
        targetBpm = adegan.bpm || 100;

        const pill = (!name && adegan.pillTanpaNama) ? adegan.pillTanpaNama : adegan.pill;
        if (cinemaPill) cinemaPill.textContent = isi(pill, name);

        setProgress(adegan.persen, adegan.label);

        const teks = (!name && adegan.teksTanpaNama) ? adegan.teksTanpaNama : adegan.teks;
        await scrambleText(cinemaWord, isi(teks, name), adegan.durasi || 1100);

        playHeartbeatThump();
        await wait(adegan.jeda || 800);
    }

    // --- Kata pamungkas yang muncul satu per satu -----------------------
    targetBpm = KONTEN.bpmFinal || 160;
    if (cinemaPill) cinemaPill.textContent = isi(KONTEN.pillFinal, name);
    setProgress(100, KONTEN.labelFinal);

    const kataFinal = [...KONTEN.kataPamungkas];
    if (name && KONTEN.kataNama) {
        kataFinal.push({ teks: KONTEN.kataNama, partikel: 36, jeda: 800 });
    }

    for (const kata of kataFinal) {
        cinemaWord.textContent = isi(kata.teks, name);
        cinemaWord.classList.remove("wordPop");
        void cinemaWord.offsetWidth;
        cinemaWord.classList.add("wordPop");
        triggerShockwave();
        playHeartbeatThump();
        spawnHeartBurst(window.innerWidth / 2, window.innerHeight * 0.45, kata.partikel || 20);
        await wait(kata.jeda || 500);
    }

    // --- Matikan hujan kode, nyalakan hati 3D ---------------------------
    matrixActive = false;
    if (matrixIntervalId) clearInterval(matrixIntervalId);
    matrixCanvas.style.opacity = "0";

    isHeartActive = true;
    const heartCanvasEl = document.getElementById("heartCanvas");
    if (heartCanvasEl) heartCanvasEl.style.opacity = "1";

    const recipientFinalName = document.getElementById("recipientFinalName");
    if (recipientFinalName) {
        recipientFinalName.textContent = name
            ? isi(KONTEN.namaAkhir, name)
            : KONTEN.namaAkhirTanpaNama;
    }

    showPhase("phase3");
    boostAmbientHarmonics();
    playCelestialChimes();
    triggerShockwave();
    spawnHeartBurst(window.innerWidth / 2, window.innerHeight * 0.42, 45);

    setInterval(triggerHeartbeatPulse, 1900);
}

/* ==========================================================================
   INTERACTIVE BUTTONS & CANVAS CLICKS
   ========================================================================== */
const pulseHeartBtn = document.getElementById("pulseHeartBtn");
if (pulseHeartBtn) {
    pulseHeartBtn.addEventListener("click", e => {
        triggerHeartbeatPulse();
        spawnHeartBurst(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2, 25);
        showToast(KONTEN.toastPulse);
    });
}

const starShowerBtn = document.getElementById("starShowerBtn");
if (starShowerBtn) {
    starShowerBtn.addEventListener("click", () => {
        playCelestialChimes();
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                spawnHeartBurst(Math.random() * window.innerWidth, Math.random() * (window.innerHeight * 0.65), 18);
            }, i * 160);
        }
        showToast(KONTEN.toastStar);
    });
}

window.addEventListener("click", e => {
    if (!isHeartActive) return;
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest(".themeDot")) return;
    triggerHeartbeatPulse();
    spawnHeartBurst(e.clientX, e.clientY, 15);
});

/* ==========================================================================
   SHARE LINK
   ========================================================================== */
const toast = document.getElementById("toast");
function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2800);
}

const shareLinkBtn = document.getElementById("shareLinkBtn");
if (shareLinkBtn) {
    shareLinkBtn.addEventListener("click", () => {
        const name = getTargetName();
        const baseUrl = window.location.origin + window.location.pathname;
        const shareUrl = name ? `${baseUrl}?to=${encodeURIComponent(name)}` : baseUrl;

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                showToast(KONTEN.toastShare);
            }).catch(() => fallbackCopy(shareUrl));
        } else {
            fallbackCopy(shareUrl);
        }
    });
}

function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        document.execCommand("copy");
        showToast(KONTEN.toastShare);
    } catch (e) {}
    document.body.removeChild(ta);
}
