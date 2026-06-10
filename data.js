// ============================================================
//  DATA FASILITAS UMUM UNDIP TEMBALANG
//  Koordinat: latitude, longitude (Google Maps verifikasi)
// ============================================================

const places = [
  // ── AKADEMIK ──────────────────────────────────────────────
  {
    id: 1,
    name: "Rektorat UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang, Semarang",
    desc: "Gedung pusat administrasi Universitas Diponegoro.",
    lat: -7.0497,
    lng: 110.4376,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 2,
    name: "Fakultas Teknik UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto No.13, Tembalang",
    desc: "Fakultas Teknik dengan berbagai jurusan teknik dan teknologi.",
    lat: -7.0518,
    lng: 110.4384,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 3,
    name: "Fakultas Ekonomika dan Bisnis",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung FEB UNDIP — Ilmu Ekonomi, Manajemen, Akuntansi.",
    lat: -7.0465,
    lng: 110.4390,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 4,
    name: "Fakultas Sains dan Matematika",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung FSM: Matematika, Fisika, Kimia, Biologi, Statistika.",
    lat: -7.0544,
    lng: 110.4369,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 5,
    name: "Perpustakaan Pusat UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Perpustakaan universitas dengan koleksi buku dan jurnal lengkap.",
    lat: -7.0509,
    lng: 110.4371,
    icon: "book",
    color: "#3b82f6"
  },
  {
    id: 6,
    name: "Gedung ICT UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Pusat teknologi informasi dan komunikasi kampus.",
    lat: -7.0501,
    lng: 110.4380,
    icon: "computer",
    color: "#3b82f6"
  },
  {
    id: 7,
    name: "Fakultas Ilmu Budaya",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung FIB: Sastra Indonesia, Inggris, Jepang, Sejarah.",
    lat: -7.0475,
    lng: 110.4363,
    icon: "building-columns",
    color: "#3b82f6"
  },
  {
    id: 8,
    name: "Fakultas Hukum UNDIP",
    category: "akademik",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung Fakultas Hukum UNDIP.",
    lat: -7.0487,
    lng: 110.4355,
    icon: "scale-balanced",
    color: "#3b82f6"
  },

  // ── KESEHATAN ─────────────────────────────────────────────
  {
    id: 9,
    name: "Klinik Kesehatan UNDIP",
    category: "kesehatan",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Pelayanan kesehatan primer bagi mahasiswa dan sivitas akademika.",
    lat: -7.0520,
    lng: 110.4360,
    icon: "hospital",
    color: "#ef4444"
  },
  {
    id: 10,
    name: "Apotek Kampus",
    category: "kesehatan",
    address: "Dekat Klinik UNDIP, Tembalang",
    desc: "Apotek terdekat di area kampus untuk kebutuhan obat-obatan.",
    lat: -7.0522,
    lng: 110.4358,
    icon: "prescription-bottle-medical",
    color: "#ef4444"
  },

  // ── IBADAH ────────────────────────────────────────────────
  {
    id: 11,
    name: "Masjid Diponegoro (UNDIP)",
    category: "ibadah",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Masjid kampus utama UNDIP, terbuka untuk semua sivitas akademika.",
    lat: -7.0512,
    lng: 110.4377,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 12,
    name: "Mushola Fakultas Teknik",
    category: "ibadah",
    address: "Gedung Teknik, Tembalang",
    desc: "Mushola di lingkungan Fakultas Teknik UNDIP.",
    lat: -7.0521,
    lng: 110.4388,
    icon: "mosque",
    color: "#10b981"
  },
  {
    id: 13,
    name: "Kapel / Ruang Doa Kristen",
    category: "ibadah",
    address: "Area Kampus UNDIP, Tembalang",
    desc: "Tempat ibadah bagi mahasiswa Kristen di lingkungan kampus.",
    lat: -7.0495,
    lng: 110.4370,
    icon: "church",
    color: "#10b981"
  },

  // ── OLAHRAGA ──────────────────────────────────────────────
  {
    id: 14,
    name: "Stadion Diponegoro",
    category: "olahraga",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Stadion olahraga serbaguna kampus UNDIP.",
    lat: -7.0530,
    lng: 110.4395,
    icon: "futbol",
    color: "#f59e0b"
  },
  {
    id: 15,
    name: "GOR (Gedung Olahraga) UNDIP",
    category: "olahraga",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung olahraga indoor: badminton, basket, voli.",
    lat: -7.0527,
    lng: 110.4398,
    icon: "dumbbell",
    color: "#f59e0b"
  },
  {
    id: 16,
    name: "Lapangan Basket FT",
    category: "olahraga",
    address: "Area Teknik, Tembalang",
    desc: "Lapangan basket terbuka di kawasan Fakultas Teknik.",
    lat: -7.0516,
    lng: 110.4392,
    icon: "basketball",
    color: "#f59e0b"
  },
  {
    id: 17,
    name: "Kolam Renang UNDIP",
    category: "olahraga",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Fasilitas kolam renang standar kampus.",
    lat: -7.0534,
    lng: 110.4393,
    icon: "person-swimming",
    color: "#f59e0b"
  },

  // ── KANTIN ────────────────────────────────────────────────
  {
    id: 18,
    name: "Kantin Terpadu UNDIP",
    category: "kantin",
    address: "Dekat Rektorat, Tembalang",
    desc: "Pusat kantin dengan berbagai pilihan makanan dan minuman.",
    lat: -7.0503,
    lng: 110.4383,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 19,
    name: "Kantin Fakultas Teknik",
    category: "kantin",
    address: "Gedung Teknik, Tembalang",
    desc: "Kantin mahasiswa di kawasan Fakultas Teknik.",
    lat: -7.0525,
    lng: 110.4385,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 20,
    name: "Foodcourt FEB",
    category: "kantin",
    address: "Kawasan FEB UNDIP, Tembalang",
    desc: "Area makan FEB dengan berbagai pedagang makanan.",
    lat: -7.0462,
    lng: 110.4395,
    icon: "utensils",
    color: "#f97316"
  },
  {
    id: 21,
    name: "Warmindo & Kedai Kopi Area Kampus",
    category: "kantin",
    address: "Jl. Tembalang Baru",
    desc: "Kumpulan warung makan dan kedai kopi favorit mahasiswa.",
    lat: -7.0490,
    lng: 110.4340,
    icon: "mug-hot",
    color: "#f97316"
  },

  // ── ATM / BANK ────────────────────────────────────────────
  {
    id: 22,
    name: "ATM BNI UNDIP",
    category: "atm",
    address: "Dekat Rektorat UNDIP",
    desc: "ATM Bank BNI di kawasan kampus.",
    lat: -7.0498,
    lng: 110.4374,
    icon: "credit-card",
    color: "#8b5cf6"
  },
  {
    id: 23,
    name: "ATM BRI UNDIP",
    category: "atm",
    address: "Area Kampus UNDIP, Tembalang",
    desc: "ATM Bank BRI untuk mahasiswa dan karyawan.",
    lat: -7.0506,
    lng: 110.4368,
    icon: "credit-card",
    color: "#8b5cf6"
  },
  {
    id: 24,
    name: "ATM Mandiri Tembalang",
    category: "atm",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "ATM Bank Mandiri terdekat dari kawasan kampus.",
    lat: -7.0480,
    lng: 110.4350,
    icon: "credit-card",
    color: "#8b5cf6"
  },

  // ── PARKIR ────────────────────────────────────────────────
  {
    id: 25,
    name: "Parkir Rektorat",
    category: "parkir",
    address: "Depan Rektorat UNDIP",
    desc: "Area parkir luas di depan gedung Rektorat.",
    lat: -7.0494,
    lng: 110.4381,
    icon: "square-parking",
    color: "#6b7280"
  },
  {
    id: 26,
    name: "Parkir Gedung Kuliah Bersama",
    category: "parkir",
    address: "GKB UNDIP, Tembalang",
    desc: "Area parkir di sekitar Gedung Kuliah Bersama.",
    lat: -7.0508,
    lng: 110.4375,
    icon: "square-parking",
    color: "#6b7280"
  },
  {
    id: 27,
    name: "Parkir Timur Kampus",
    category: "parkir",
    address: "Pintu Timur UNDIP, Tembalang",
    desc: "Area parkir pintu masuk timur kawasan UNDIP.",
    lat: -7.0510,
    lng: 110.4408,
    icon: "square-parking",
    color: "#6b7280"
  },

  // ── LAINNYA ───────────────────────────────────────────────
  {
    id: 28,
    name: "Pos Satpam / Gerbang Utama",
    category: "lainnya",
    address: "Gerbang Utama UNDIP, Tembalang",
    desc: "Pos keamanan dan gerbang masuk utama kampus.",
    lat: -7.0472,
    lng: 110.4360,
    icon: "shield-halved",
    color: "#0ea5e9"
  },
  {
    id: 29,
    name: "Halte Bus Tembalang",
    category: "lainnya",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Halte bus Trans Semarang untuk mahasiswa.",
    lat: -7.0468,
    lng: 110.4345,
    icon: "bus",
    color: "#0ea5e9"
  },
  {
    id: 30,
    name: "Gedung Widya Puraya (Rapat & Wisuda)",
    category: "lainnya",
    address: "Jl. Prof. Sudarto, Tembalang",
    desc: "Gedung serbaguna utama untuk wisuda, seminar, dan acara besar.",
    lat: -7.0488,
    lng: 110.4378,
    icon: "star",
    color: "#0ea5e9"
  },
  {
    id: 31,
    name: "Koperasi Mahasiswa (Kopma)",
    category: "lainnya",
    address: "Area Kampus UNDIP, Tembalang",
    desc: "Koperasi mahasiswa menyediakan kebutuhan sehari-hari dan alat tulis.",
    lat: -7.0502,
    lng: 110.4365,
    icon: "store",
    color: "#0ea5e9"
  },
  {
    id: 32,
    name: "Asrama Mahasiswa Bulusan",
    category: "lainnya",
    address: "Jl. Bulusan, Tembalang",
    desc: "Asrama mahasiswa UNDIP di kawasan Bulusan.",
    lat: -7.0560,
    lng: 110.4320,
    icon: "house",
    color: "#0ea5e9"
  }
];

// Kategori metadata
const categories = {
  all:       { label: "Semua",      icon: "border-all",              color: "#1e293b" },
  akademik:  { label: "Akademik",   icon: "building-columns",        color: "#3b82f6" },
  kesehatan: { label: "Kesehatan",  icon: "hospital",                color: "#ef4444" },
  ibadah:    { label: "Ibadah",     icon: "mosque",                  color: "#10b981" },
  olahraga:  { label: "Olahraga",   icon: "dumbbell",                color: "#f59e0b" },
  kantin:    { label: "Kantin",     icon: "utensils",                color: "#f97316" },
  atm:       { label: "ATM / Bank", icon: "credit-card",             color: "#8b5cf6" },
  parkir:    { label: "Parkir",     icon: "square-parking",          color: "#6b7280" },
  lainnya:   { label: "Lainnya",    icon: "star",                    color: "#0ea5e9" }
};
