// ==========================================================
// LOGIKA INTERAKTIF WEBSITE ULANG TAHUN
// Mengambil konfigurasi dari config.js
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Pastikan config tersedia
  if (typeof BIRTHDAY_CONFIG === 'undefined') {
    console.error('File config.js belum dimuat atau tidak ditemukan!');
    return;
  }

  const config = BIRTHDAY_CONFIG;

  // 1. Terapkan Data Nama & Umur ke Elemen HTML
  document.title = `Happy Birthday, ${config.nickname || config.name}! 🎂✨`;

  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) heroNameEl.textContent = config.name;

  const heroNicknameEl = document.getElementById('hero-nickname');
  if (heroNicknameEl) heroNicknameEl.textContent = config.nickname || config.name;

  const heroAgeBadgeEl = document.getElementById('hero-age-badge');
  if (heroAgeBadgeEl) heroAgeBadgeEl.textContent = config.age;

  const heroSubtitleEl = document.getElementById('hero-subtitle');
  if (heroSubtitleEl) {
    heroSubtitleEl.textContent = `Merayakan momen indah di usia ke-${config.age} tahun • ${config.birthDate}`;
  }

  // 2. Render Pesan Khusus (Letter)
  const letterBadgeEl = document.getElementById('letter-badge');
  if (letterBadgeEl && config.letter?.badge) {
    letterBadgeEl.textContent = config.letter.badge;
  }

  const letterTitleEl = document.getElementById('letter-title');
  if (letterTitleEl && config.letter?.title) {
    letterTitleEl.textContent = config.letter.title.replace('{nickname}', config.nickname).replace('{age}', config.age);
  }

  const letterBodyEl = document.getElementById('letter-body');
  if (letterBodyEl && config.letter?.paragraphs) {
    letterBodyEl.innerHTML = '';
    config.letter.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph
        .replace(/{name}/g, config.name)
        .replace(/{nickname}/g, config.nickname)
        .replace(/{age}/g, config.age);
      letterBodyEl.appendChild(p);
    });
  }

  const letterClosingEl = document.getElementById('letter-closing');
  if (letterClosingEl && config.letter?.closing) {
    letterClosingEl.textContent = config.letter.closing;
  }

  const letterSenderEl = document.getElementById('letter-sender');
  if (letterSenderEl && config.letter?.sender) {
    letterSenderEl.textContent = config.letter.sender;
  }

  // 3. Render Galeri Polaroid
  const galleryGridEl = document.getElementById('gallery-grid');
  if (galleryGridEl && config.gallery?.length) {
    galleryGridEl.innerHTML = '';
    const rotations = [-3, 2, -2, 3, -1.5, 2.5]; // Efek miring acak manis
    config.gallery.forEach((item, index) => {
      const rot = rotations[index % rotations.length];
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.style.setProperty('--rot', `${rot}deg`);
      card.innerHTML = `
        <div class="polaroid-img-box">
          <img src="${item.image}" alt="Moment ${index + 1}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80'">
        </div>
        <div class="polaroid-caption">${item.caption}</div>
      `;
      galleryGridEl.appendChild(card);
    });
  }

  // 4. Balon Melayang
  if (config.features?.floatingBalloons) {
    initFloatingBalloons();
  }

  // 5. Audio Player
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');
  let isPlaying = false;

  if (config.music?.enabled && config.music?.url) {
    audio.src = config.music.url;
    audio.loop = true;
  } else if (musicBtn) {
    musicBtn.style.display = 'none';
  }

  function toggleMusic() {
    if (!audio.src) return;
    if (isPlaying) {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.querySelector('.music-text').textContent = 'Putar Musik 🎵';
      isPlaying = false;
    } else {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.querySelector('.music-text').textContent = 'Musik On 🎶';
        isPlaying = true;
      }).catch(err => {
        console.warn('Autoplay dibatasi browser:', err);
      });
    }
  }

  if (musicBtn) {
    musicBtn.addEventListener('click', toggleMusic);
  }

  // 6. Intro Modal & Tombol "Buka Kejutan"
  const introModal = document.getElementById('intro-modal');
  const btnOpen = document.getElementById('btn-open-gift');

  if (btnOpen && introModal) {
    btnOpen.addEventListener('click', () => {
      introModal.classList.add('hidden');
      triggerConfettiBurst();
      // Putar lagu otomatis saat klik buka kejutan (karena butuh user gesture)
      if (config.music?.enabled && !isPlaying) {
        toggleMusic();
      }
    });
  }

  // 7. Fitur Tiup Lilin
  const btnBlow = document.getElementById('btn-blow');
  const flame = document.getElementById('candle-flame');
  const cakeHint = document.getElementById('cake-hint');

  if (btnBlow && flame) {
    btnBlow.addEventListener('click', () => {
      flame.classList.add('blown-out');
      btnBlow.disabled = true;
      btnBlow.innerHTML = '✨ Lilin Telah Ditiup! ✨';
      if (cakeHint) {
        cakeHint.innerHTML = '🎂 <i>Make a wish</i> terkabul! Selamat ulang tahun yang terindah! 🎉';
      }

      // Ledakan konfeti bertubi-tubi
      if (config.features?.confettiExplosion) {
        triggerGrandCelebration();
      }
    });
  }
});

// Efek Balon Melayang
function initFloatingBalloons() {
  const container = document.getElementById('background-elements');
  if (!container) return;
  const colors = ['#ff85a2', '#f472b6', '#c084fc', '#fcd34d', '#93c5fd'];
  
  for (let i = 0; i < 14; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 95}%`;
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.animationDuration = `${9 + Math.random() * 8}s`;
    balloon.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(balloon);
  }
}

// Efek Ledakan Konfeti Biasa
function triggerConfettiBurst() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Efek Perayaan Besar saat lilin ditiup
function triggerGrandCelebration() {
  if (typeof confetti !== 'function') return;

  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // Tembakan kiri & kanan
    confetti({ ...defaults, particleCount, origin: { x: 0.2, y: 0.7 } });
    confetti({ ...defaults, particleCount, origin: { x: 0.8, y: 0.7 } });
  }, 250);
}

