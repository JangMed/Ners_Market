# 🛍️ PasarKita — Demo Marketplace

Aplikasi toko online / marketplace sederhana terinspirasi **pola antarmuka e-commerce Indonesia**, dibangun menggunakan React + Vite. **Bukan aplikasi resmi atau tiruan identitas Shopee.**

## Fitur
- Beranda responsif (HP dan desktop)
- 12 produk contoh dan 8 kategori
- Pencarian nama, kategori, lokasi
- Sortir berdasarkan harga dan rating
- Favorit, keranjang, penyesuaian kuantitas dan batas stok
- Checkout simulasi dan nomor pesanan
- Penyimpanan keranjang, favorit, pesanan demo di `localStorage`

> Penting: Belum ada database, akun pengguna, panel penjual, sistem pembayaran asli, keamanan backend, ataupun pengiriman. Data pesanan hanya tersimpan di **browser yang digunakan**. Jangan memakai formulir demo ini untuk menyimpan data pelanggan nyata.

## Jalankan di komputer

Pastikan Node.js versi 20 atau lebih baru sudah dipasang.

```bash
npm install
npm run dev
```

Buka alamat localhost yang ditampilkan di terminal (biasanya `http://localhost:5173`).

## Build produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`.

## Upload ke GitHub

1. Buat repository baru di GitHub, misalnya `pasar-kita`.
2. Upload seluruh file proyek (termasuk folder `src`, `package.json`, `index.html`, dan `vite.config.js`). **Jangan** upload `node_modules` atau `dist`.
3. Atau pakai terminal dari folder proyek:

```bash
git init
git add .
git commit -m "Initial marketplace demo"
git branch -M main
git remote add origin https://github.com/USERNAME/pasar-kita.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda. Jika GitHub meminta autentikasi, gunakan metode login yang didukung GitHub.

## Online via GitHub Pages

Project sudah menggunakan `base: './'` agar aset bekerja pada GitHub Pages. Setelah mengunggah kode:

1. Buka repository → **Settings → Pages**.
2. Pilih **Source: GitHub Actions**.
3. Workflow pada `.github/workflows/deploy.yml` akan membangun dan menerbitkan situs saat ada push ke branch `main`.
4. Tunggu workflow selesai lalu akses URL Pages yang tersedia di Settings → Pages.

## Pengembangan menjadi marketplace sungguhan

Gunakan backend (misalnya Node.js + PostgreSQL/Supabase) untuk akun pembeli & penjual, autentikasi, katalog produk sungguhan, upload foto, order & stok yang aman, panel admin, integrasi payment gateway berizin dan API pengiriman. Validasi harga dan stok wajib dilakukan di server, bukan hanya di browser.

## Lisensi penggunaan

Kode ini merupakan starter demo; Anda boleh mengadaptasinya untuk proyek pribadi. Pastikan konten, foto produk, merek, dan desain akhir tidak melanggar hak pihak lain.
