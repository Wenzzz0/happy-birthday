# 🎂 Website Ulang Tahun Spesial (Siap Deploy)

Website ucapan ulang tahun interaktif dan estetik berbasis **HTML, CSS, dan JavaScript murni**. Siap langsung di-deploy ke berbagai layanan hosting gratis seperti **Netlify, Vercel, atau GitHub Pages**.

---

## 📂 Struktur File

```text
birthday-web/
├── index.html     # Halaman utama (layout, meta share WhatsApp/IG, font)
├── style.css      # Desain estetik pastel, efek lilin animasi, polaroid & balon
├── config.js      # ⚙️ TEMPAT PENGATURAN (Nama, umur, pesan, foto, musik)
├── script.js      # Logika interaktif (tiup lilin, confetti, audio player)
└── README.md      # Panduan edit & cara deploy
```

---

## ⚙️ Cara Mengubah Data (Nama, Umur, Pesan, Foto, Musik)

Cukup buka dan edit file **`config.js`**:

```javascript
const BIRTHDAY_CONFIG = {
  // 1. INFORMASI UTAMA
  name: "Nama_Lengkap",       // Ganti dengan nama lengkap
  nickname: "Nama_Panggilan",            // Ganti nama panggilan
  age: Umur,                    // Ganti umur
  birthDate: "Tanggal_Ulang_Tahun",    // Ganti tanggal ulang tahun

  // 2. MUSIK LATAR (BGM)
  music: {
    enabled: true,
    url: "https://files.catbox.moe/kwqfcf.mp3", // Masukkan URL lagu .mp3
    title: "Happy Birthday Melody 🎵"
  },

  // 3. PESAN SPESIAL (Bisa ditambah/dikurangi)
  letter: {
    badge: "Special Message For You 💌",
    title: "Selamat Ulang Tahun! ✨",
    paragraphs: [
      "Selamat bertambah usia yang ke-{age}! Semoga di usiamu yang baru ini...",
      "Terima kasih sudah selalu membawa senyum...",
      "Semoga semua impian dan cita-citamu di tahun ini tercapai satu per satu!"
    ],
    closing: "Dengan sepenuh hati & doa terbaik,",
    sender: "Orang yang selalu mendukungmu 🤍"
  },

  // 4. GALERI FOTO POLAROID
  gallery: [
    {
      image: "URL_FOTO_KAMU_DISINI", // Bisa link foto online (Imgur/Cloudinary) atau simpan di folder
      caption: "Momen terindah bareng kamu ☀️"
    }
  ]
};
```

---

## 🚀 Cara Deploy ke Internet (Gratis & 1 Menit Jadi)

Pilih salah satu cara termudah berikut:

### Opsi 1: Netlify Drop (Paling Cepat & Tanpa Coding)
1. Kunjungi website [app.netlify.com/drop](https://app.netlify.com/drop).
2. Tarik dan lepas (drag & drop) seluruh folder `birthday-web` ke kotak yang tersedia.
3. Tunggu 5 detik, kamu akan langsung mendapatkan URL website publik (misalnya: `https://birthday-adelia.netlify.app`) yang bisa langsung kamu kirim ke orang yang berulang tahun!

### Opsi 2: Vercel
1. Login ke [vercel.com](https://vercel.com).
2. Buat proyek baru dan import folder/repositori GitHub kamu.
3. Klik **Deploy**. Selesai!

### Opsi 3: GitHub Pages
1. Buat repositori baru di GitHub (misal: `kado-ulang-tahun`).
2. Upload semua file (`index.html`, `style.css`, `config.js`, `script.js`).
3. Buka menu **Settings** > **Pages** di repositori GitHub kamu.
4. Pada bagian *Branch*, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Website kamu akan online di `https://username.github.io/kado-ulang-tahun/`.

---

## ✨ Fitur Spesial yang Tersedia:
- 🎁 **Pop-up Kotak Kado Pembuka** dengan efek membuka kado.
- 🕯️ **Kue Ulang Tahun & Lilin Interaktif**: Tombol untuk meniup lilin (api padam + keluar asap animasi).
- 🎉 **Hujan Confetti**: Ledakan warna-warni saat kado dibuka dan saat lilin ditiup.
- 📸 **Kartu Foto Polaroid 3D**: Foto bergaya retro polaroid yang bisa bergerak saat di-hover.
- 🎵 **Pemutar Musik**: Musik latar otomatis/manual dengan tombol mengambang.
- 🎈 **Balon Melayang**: Animasi balon warna-warni di latar belakang.
- 📱 **Mobile & Desktop Friendly**: Tampilan responsif yang pas di layar HP maupun laptop.

