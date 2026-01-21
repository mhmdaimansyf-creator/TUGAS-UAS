 UAS Pemrograman Web - Website Pendaftaran Event Sport Kampus

 1. Deskripsi Umum
Project ini merupakan aplikasi berbasis web untuk pendaftaran event "Campus Sport Championship 2026". 

 2. Fitur Aplikasi
Landing Page Event:** Informasi judul, deskripsi, tanggal, dan lokasi event.
Form Pendaftaran:** Input Nama Lengkap, Email, Nomor HP, dan Kategori Peserta (Mahasiswa/Umum).
Validasi Input (JavaScript):**
     Mencegah submit jika ada kolom yang kosong.
     Memastikan email menggunakan karakter `@`.
     Memastikan Nomor HP hanya berisi karakter angka.
Sistem Kuota:** Membatasi jumlah pendaftar maksimal 50 orang. Jika penuh, pendaftaran otomatis tertutup.
Manipulasi DOM:** Data peserta yang berhasil mendaftar akan langsung muncul di tabel bawah tanpa perlu memuat ulang halaman (no-reload).
Desain Responsif:** Menggunakan CSS Flexbox agar tampilan rapi di perangkat mobile maupun desktop.

3. Alur Logika / Algoritma
Berikut adalah alur logika pengerjaan aplikasi:
1.  Inisialisasi:** Menyiapkan array `participants` untuk menyimpan data peserta dan variabel `MAX_QUOTA` dengan nilai 50.
2.  Event Listening:** Menunggu pengguna menekan tombol "Daftar Sekarang".
3.  Validasi:Melakukan pengecekan string kosong pada setiap input.
    Menggunakan method `.includes('@')` untuk validasi format email.
     Menggunakan fungsi `isNaN()` untuk memvalidasi input Nomor HP.
4.  Cek Kapasitas:** Melakukan pengecekan `if (participants.length >= MAX_QUOTA)`. Jika benar, proses dihentikan dan muncul pesan kuota penuh.
5.  Eksekusi DOM:** * Jika valid, data baru dimasukkan ke array.
     Membuat elemen tabel baru (`tr` dan `td`) secara dinamis menggunakan `document.createElement`
     Memperbarui tampilan jumlah pendaftar (counter) secara real-time.
6.  Reset: Mengosongkan form pendaftaran agar siap digunakan kembali.

 4. Ketentuan Teknis
HTML5: Untuk struktur semantik halaman.
CSS3: Menggunakan efek *Glassmorphism*, *Flexbox*, dan *Media Queries* untuk responsivitas.
Vanilla JavaScript:** Digunakan untuk seluruh logika interaktif tanpa library seperti jQuery atau React.

5. Output Project
Folder project ini berisi:
 `index.html` - Struktur utama halaman.
* `style.css` - Desain dan layouting.
* `script.js` - Logika interaktif dan manipulasi DOM.
* `README.md` - Dokumentasi project.
