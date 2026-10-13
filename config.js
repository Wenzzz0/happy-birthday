// =========================================================================
// ⚙️ CONFIG AREA - ATUR SEMUA DATA ULANG TAHUN DI BAWAH INI
// =========================================================================
// Kamu cukup edit nilai di dalam tanda kutip atau angka di bawah ini.
// Semua perubahan akan langsung otomatis tampil di halaman web!
// =========================================================================

const BIRTHDAY_CONFIG = {
  // 1. INFORMASI UTAMA
  name: "Annora Nathania Tampubolon",              // Nama lengkap yang berulang tahun
  nickname: "Nora",                   // Panggilan akrab / sayang
  age: 14,                           // Umur sekarang
  birthDate: "15 Juni",           // Tanggal ulang tahun

  // 2. MUSIK LATAR (BGM)
  // Masukkan URL lagu (bisa mp3 online) atau biarkan default lagu santai/ceria
  music: {
    enabled: true,
    url: "https://files.catbox.moe/uo55f3.webm", // ganti link lagu mp3 jika punya
    title: "Happy Birthday Melody 🎵"
  },

  // 3. PESAN SPESIAL (Bisa beberapa paragraf)
  letter: {
    badge: "Special Message For You From Someone💌",
    title: "Selamat Ulang Tahun! ✨",
    paragraphs: [
      "Selamat bertambah usia yang ke-{age}! Semoga di usiamu yang baru ini, setiap langkahmu dipenuhi dengan kebahagiaan, kesehatan, dan hal-hal baik yang selalu kamu semogakan.",
      "Terima kasih sudah menjadi sosok yang selalu membawa senyum dan energi positif. Dunia terasa jauh lebih indah dan hangat karena adanya kamu di dalamnya.",
      "Semoga semua impian dan cita-citamu di tahun ini tercapai satu per satu. Tetaplah jadi {nickname} yang luar biasa, baik hati, dan selalu bersemangat!"
    ],
    closing: "Dengan sepenuh hati & doa terbaik,",
    sender: "Orang yang selalu mendukungmu 🤍"
  },

  // 4. GALERI FOTO KENANGAN (POLAROID)
  // Bisa ganti URL foto dengan foto asli (bisa link online atau path lokal seperti 'assets/foto1.jpg')
  gallery: [
    {
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
      caption: "Senyum manismu selalu bikin hari lebih cerah ☀️"
    },
    {
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&auto=format&fit=crop",
      caption: "Momen manis yang tak terlupakan 🍰"
    },
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop",
      caption: "Semoga tahun ini membawa ribuan tawa baru! 🎉"
    }
  ],

  // 5. FITUR INTERAKTIF
  features: {
    floatingBalloons: true,         // Balon melayang di background
    candleBlowCount: 1,             // Jumlah lilin di kue
    confettiExplosion: true         // Ledakan konfeti saat lilin ditiup
  }
};

