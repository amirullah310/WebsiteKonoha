# Konoha Group Website Implementation Plan

Tujuan dari proyek ini adalah membangun website profil kelompok bertemakan "Desa Konoha" menggunakan React, TypeScript, dan Vite. Website ini akan memiliki 8 halaman (1 Halaman Utama, dan 7 Halaman Portofolio Anggota). 

## User Review Required

> [!IMPORTANT]
> Mohon tinjau rencana di bawah ini. Apakah ada detail spesifik terkait warna atau fitur tambahan yang ingin Anda masukkan sebelum saya mulai membuat dan menulis kode untuk proyek ini?

## Open Questions

1. **Routing**: Saya berencana menggunakan `react-router-dom` dengan struktur URL `/member/amir`, `/member/faiz`, dll. Apakah ini sesuai dengan keinginan Anda?
2. **Library Animasi**: Untuk membuat website "serame mungkin" dan sangat interaktif, saya akan menggunakan **Framer Motion**. Apakah Anda setuju?
3. **Data Anggota**: Saat ini saya akan menggunakan teks *placeholder* (teks sementara) untuk deskripsi dan portofolio masing-masing anggota. Anda bisa mengubahnya nanti, atau Anda bisa memberikan teks aslinya kepada saya jika sudah ada.

## Proposed Changes

### 1. Inisialisasi Proyek & Dependencies
- Membuat proyek Vite + React + TypeScript di folder saat ini (`e:\WebsiteKonoha`).
- Menginstal dependensi:
  - `react-router-dom` (untuk navigasi 8 halaman)
  - `framer-motion` (untuk animasi *scroll*, *hover*, dan transisi halaman yang interaktif)
  - `lucide-react` (untuk ikon modern)
- Memindahkan semua gambar yang sudah ada ke folder `src/assets/images/`.

### 2. Desain & Styling (Vanilla CSS)
- **Tema Konoha**: Palet warna *Dark Mode* modern dengan aksen Oranye Konoha (`#FF7B00`), Merah Kriminal (`#C41E3A`), dan warna gulungan ninja klasik (`#F5E6D3`).
- **Typography**: 
  - Font utama: **Plus Jakarta Sans** (bersih, modern, dan mudah dibaca).
  - Font aksen: **Shippori Mincho** atau **Noto Serif JP** (memberikan nuansa Jepang yang elegan untuk judul dan elemen dekoratif).
- **Styling**: Menggunakan CSS Variables murni di `index.css` untuk memastikan performa tinggi dan kustomisasi yang mudah.

### 3. Struktur Komponen (React)

#### Halaman Utama (Home)
- **Hero Section**: Menggunakan `background hero.jpg`. Animasi teks muncul secara dramatis ala anime. Menampilkan nama kelompok dan elemen visual `simbolKonoha.jpg`.
- **About Section**: Menggunakan `batukonoha.jpg` atau `kotaKonoha.jpg`. Penjelasan singkat tentang filosofi kelompok.
- **Team Roster Section**: Grid dinamis yang menampilkan foto 7 anggota (menggunakan file `...-removebg-preview.png`). Setiap foto memiliki efek *hover* yang hidup, dan bisa diklik menuju halaman portofolio masing-masing.

#### Halaman Portofolio Anggota (7 Halaman)
- Halaman dinamis yang merender data anggota berdasarkan nama.
- Akan menggunakan gambar original masing-masing (contoh: `amir.jpeg`).
- Berisi: *Hero Image* anggota, Deskripsi Diri, Skill (Keahlian), dan Galeri/Proyek (bisa disesuaikan).
- Animasi transisi masuk halaman menggunakan *Framer Motion*.

## Verification Plan

### Automated Tests
- Menjalankan `npm run dev` untuk memastikan tidak ada *error* pada *build* dan aplikasi berjalan lancar.
- Memastikan semua struktur *routing* berfungsi tanpa rintangan.

### Manual Verification
- Anda dapat membuka `localhost` di *browser* Anda untuk merasakan animasinya.
- Menguji *responsiveness* dengan menyesuaikan ukuran layar dari desktop hingga *mobile* (smartphone).
- Memastikan semua gambar yang disediakan sudah dilampirkan (ter-render) dengan baik tanpa ada *broken link*.
