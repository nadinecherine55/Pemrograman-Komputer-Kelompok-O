[README.md](https://github.com/user-attachments/files/28800876/README.md)
# PJUCalc — Kalkulator Penerangan Jalan Umum (SNI 7391:2008)

PJUCalc adalah aplikasi web berbasis *client-side* (offline sepenuhnya) yang dirancang untuk membantu insinyur, mahasiswa, maupun instansi pemerintah dalam merencanakan dan menghitung kebutuhan pencahayaan Jalan Umum. Seluruh perhitungan teknis disesuaikan dengan standar nasional **SNI 7391:2008** mengenai "Spesifikasi Penerangan Jalan di Kawasan Perkotaan".

## 🚀 Fitur Utama

1. **Database Standar SNI 7391:2008 Internal**: Menyediakan ambang batas otomatis untuk Iluminasi Rata-rata ($E_{avg}$), Iluminasi Minimum ($E_{min}$), dan Kemerataan Pencahayaan ($g_1$) berdasarkan Kelas Jalan (Arteri, Kolektor, Lokal, Lingkungan).
2. **Multi-Segmen Jalan Dinamis**: Pengguna dapat menambahkan beberapa segmen jalan sekaligus dengan karakteristik geometri berbeda (Lurus, Penyempitan/Taper, Tikungan, Persimpangan).
3. **Koreksi Geometri Otomatis**: Menghitung reduksi jarak antar-tiang lampu otomatis pada area tikungan sesuai dengan ketentuan regulasi demi keamanan berkendara.
4. **Mesin Kalkulasi Faktor Utilitas ($U_f$)**: Menghitung efisiensi distribusi cahaya lampu secara matematis berdasarkan rasio lebar jalan, tinggi tiang, dan susunan lampu (Satu Sisi, Zig-zag, Berhadapan, atau di Median Jalan).
5. **Estimasi Anggaran Terintegrasi (RAB)**: Memberikan rincian biaya material kasar (tiang dan lampu) secara langsung (*real-time*) sesuai dengan volume hasil perhitungan.
6. **Visualisasi Skematik (Canvas-like Layout)**: Menampilkan tata letak posisi tiang lampu di sepanjang jalan lengkap dengan pengukur jarak (ruler) interaktif.
7. **Ekspor Laporan Multi-Format**:
   - **Cetak Laporan Formal**: Layout khusus siap cetak fisik atau simpan ke PDF dengan format monokrom standar dokumen resmi (`Ctrl + P`).
   - **Ekspor JSON**: Menyimpan data mentah konfigurasi kalkulasi untuk digunakan kembali nanti.
   - **Ekspor CSV**: Mengonversi hasil kalkulasi tiap segmen ke format tabel spreadsheet (Excel).

## 📁 Struktur Berkas

Proyek ini sangat ringan dan terdiri dari 3 berkas utama:
* **`index.html`** : Kerangka struktural antarmuka pengguna, formulir input parameter, kontainer tabel hasil, panel RAB, serta area dokumen laporan cetak.
* **`style.css`** : Mengatur estetika visual web dengan tema gelap (*dark mode*) yang modern, tata letak responsif menggunakan CSS Grid, animasi pancaran cahaya lampu, serta perintah media cetak (`@media print`).
* **`main.js`** : Otak logika aplikasi yang memproses rumus matematika teknik pencahayaan, menyimpan konstanta standar SNI, memvalidasi status kepatuhan (*compliance*), merender visualisasi jalan, dan menangani fungsi unduh data.

## 📐 Rumus Dasar Perhitungan

Aplikasi ini menggunakan modifikasi persamaan iluminasi lumen internasional untuk menentukan jarak antar tiang ($e$):

$$e = \frac{\Phi \times U_f \times M_f}{E_{avg} \times W}$$

Di mana:
- **$e$** = Jarak antar tiang lampu (meter).
- **$\Phi$** = Fluks cahaya / Lumen total dari jenis lampu yang dipilih (lumen).
- **$U_f$** = Faktor Utilitas (*Utility Factor*), efisiensi cahaya yang mencapai permukaan jalan.
- **$M_f$** = Faktor Pemeliharaan (*Maintenance Factor*), penyusutan efisiensi lampu akibat debu dan usia.
- **$E_{avg}$** = Target Iluminasi Rata-rata sesuai kelas jalan SNI (lux).
- **$W$** = Lebar badan jalan (meter).

## 🛠️ Cara Penggunaan

Karena aplikasi ini berjalan sepenuhnya di sisi klien (*client-side*), Anda tidak memerlukan server lokal (seperti XAMPP atau Node.js) ataupun koneksi internet.

1. Unduh atau klon seluruh file (`index.html`, `style.css`, `main.js`) ke dalam satu folder yang sama.
2. Klik dua kali pada file **`index.html`** untuk membukanya langsung di peramban web pilihan Anda (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Isi parameter global (Kelas Jalan, Jenis Lampu, Tinggi Tiang, Susunan Lampu).
4. Tambahkan segmen-segmen jalan sesuai dengan kondisi riil di lapangan.
5. Klik **Hitung** untuk memproses data.
6. Periksa kolom **Status** pada tabel detail; pastikan berstatus **"OK"** (Hijau). Jika berstatus **"Cek"** (Merah), harap sesuaikan kembali daya lampu atau tinggi tiang Anda.
7. Gunakan tombol ekspor di bagian bawah halaman untuk menyimpan hasil pekerjaan Anda.

## 📝 Lisensi & Catatan Akademik

Proyek ini dikembangkan sebagai alat bantu digital untuk mempermudah pemahaman analisis spasial, kesalahan instrumen, serta implementasi standar geometris dan teknis dalam rekayasa survei/geodesi dan infrastruktur jalan perkotaan di Indonesia. Bebas digunakan, dimodifikasi, dan disebarluaskan untuk kepentingan akademis maupun praktis.
