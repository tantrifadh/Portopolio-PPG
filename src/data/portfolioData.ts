import { SeminarTask, BlogPost, ArtifactItem, AssessmentRubric, DocumentationPhoto } from '../types/portfolio';

// Generated image assets
import profileImage from '../assets/images/educator_profile_portrait_1791717241985.jpg';
import classroomImage from '../assets/images/classroom_teaching_activity_1791717256492.jpg';
import seminarImage from '../assets/images/seminar_kependidikan_presentation_1791717267320.jpg';
import artifactsImage from '../assets/images/curriculum_artifacts_showcase_1791717279347.jpg';

export { profileImage, classroomImage, seminarImage, artifactsImage };

export const EDUCATOR_INFO = {
  name: 'Tantri Fadhillah, S.Pd.',
  title: 'Pendidik Profesional & Peneliti Pendidikan',
  subRole: 'Alumni Pendidikan Biologi & PPG Prajabatan',
  institution: 'Universitas Pendidikan Indonesia / SMA Negeri Mitra',
  email: 'tantrifadhillah27@gmail.com',
  phone: '+62 821-4567-8901',
  location: 'Bandung, Jawa Barat',
  motto: 'Mendidik dengan Hati, Menuntun dengan Aksi: Menghidupkan Potensi Unik Setiap Peserta Didik',
  about: 'Saya adalah seorang pendidik yang berfokus pada transformasi pembelajaran bermakna melalui pendekatan pembelajaran berdiferensiasi, integrasi teknologi TPACK, serta penguatan karakter Profil Pelajar Pancasila. Berpengalaman dalam merancang modul ajar adaptif, instrumen asesmen autentik, dan penelitian tindakan kelas.',
  degrees: [
    {
      year: '2023 - 2024',
      degree: 'Pendidikan Profesi Guru (PPG) Prajabatan',
      institution: 'Universitas Pendidikan Indonesia',
      field: 'Bidang Studi Pendidikan Sains / Biologi',
      grade: 'IPK 3.94 (Dengan Pujian)',
      status: 'Lulus Uji Kompetensi Mahasiswa PPG (UKMPPG)'
    },
    {
      year: '2019 - 2023',
      degree: 'Sarjana Pendidikan (S.Pd.)',
      institution: 'Universitas Pendidikan Indonesia',
      field: 'Program Studi Pendidikan Biologi',
      grade: 'IPK 3.88 (Cum Laude)',
      status: 'Skripsi: Pengembangan Model Inkuiri Terbimbing Berbasis TPACK'
    }
  ],
  competencies: [
    {
      domain: 'Kompetensi Pedagogik',
      description: 'Mampu merancang modul ajar berbasis Kurikulum Merdeka, memetakan kebutuhan belajar kognitif dan gaya belajar siswa, serta mengimplementasikan pembelajaran berdiferensiasi proses, konten, dan produk.'
    },
    {
      domain: 'Kompetensi Kepribadian',
      description: 'Menampilkan keteladanan budi pekerti luhur sesuai semboyan Ki Hajar Dewantara (Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani) dengan integritas tinggi.'
    },
    {
      domain: 'Kompetensi Sosial',
      description: 'Membangun komunikasi empatik dengan peserta didik, kemitraan konstruktif dengan orang tua, serta aktif berkolaborasi di komunitas Musyawarah Guru Mata Pelajaran (MGMP).'
    },
    {
      domain: 'Kompetensi Profesional',
      description: 'Menguasai struktur keilmuan secara mendalam, metodologi saintifik, literasi numerasi, dan publikasi ilmiah berkala pada jurnal pendidikan terakreditasi.'
    }
  ],
  certifications: [
    'Sertifikat Pendidik Profesional (Kemendikbudristek RI)',
    'Google Certified Educator Level 1 & 2',
    'Pelatihan Fasilitator Pembelajaran Berdiferensiasi BBGP Jawa Barat',
    'Workshop Penulisan Karya Tulis Ilmiah & Penelitian Tindakan Kelas (PTK)'
  ]
};

export const SEMINAR_TASKS: SeminarTask[] = [
  {
    id: 'seminar-01',
    code: 'SEM-PPG-01',
    title: 'Implementasi Pendekatan Differentiated Learning dalam Mengakomodasi Gaya Belajar Peserta Didik pada Kurikulum Merdeka',
    course: 'Seminar Kependidikan Lanjut',
    lecturer: 'Dr. Ahmad Suhendar, M.Pd.',
    semester: 'Semester Genap 2024',
    date: '14 Mei 2024',
    pagesCount: 4,
    grade: 'Nilai: 95 (A)',
    category: 'Artikel Ilmiah',
    abstractIndo: 'Penelitian ini mengkaji penerapan pendekatan pembelajaran berdiferensiasi dalam menjawab heterogenitas gaya belajar (visual, auditori, kinestetik) siswa kelas XI SMA. Menggunakan metode deskriptif kualitatif dengan instrumen angket modalitas belajar dan lembar observasi keaktifan, hasil menunjukkan peningkatan keterlibatan belajar siswa sebesar 34.2% dan pemahaman konseptual yang lebih merata.',
    abstractEng: 'This study investigates the implementation of differentiated learning in addressing the diversity of students learning modalities in Grade XI high school. Employing a qualitative descriptive method with learning style inventories and engagement observation sheets, results demonstrate a 34.2% increase in active participation and more equitable conceptual comprehension.',
    keywords: ['Pembelajaran Berdiferensiasi', 'Kurikulum Merdeka', 'Gaya Belajar', 'Asesmen Diagnostik', 'Keterlibatan Siswa'],
    pages: [
      {
        pageNumber: 1,
        title: 'Halaman Judul & Abstrak Akademik',
        sections: [
          {
            heading: 'SEMINAR PENDIDIKAN PROFESI GURU (PPG) PRAJABATAN',
            content: 'KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI\nUNIVERSITAS PENDIDIKAN INDONESIA - FAKULTAS PENDIDIKAN MATEMATIKA DAN ILMU PENGETAHUAN ALAM'
          },
          {
            heading: 'Judul Makalah Seminar',
            content: 'IMPLEMENTASI PENDEKATAN DIFFERENTIATED LEARNING DALAM MENGAKOMODASI GAYA BELAJAR PESERTA DIDIK PADA KURIKULUM MERDEKA\nOleh: Tantri Fadhillah, S.Pd. (NIM: 2309118042)'
          },
          {
            heading: 'Abstrak (Bahasa Indonesia)',
            content: 'Kurikulum Merdeka menuntut paradigma pembelajaran yang berpusat pada peserta didik. Pendekatan pembelajaran berdiferensiasi hadir sebagai alternatif strategis dalam merespons keunikan latar belakang, minat, dan profil belajar murid. Makalah ini menyajikan kajian empiris implementasi diferensiasi konten, proses, dan produk dalam materi Bioproses Sel pada kelas XI SMA Negeri 3 Mitra.'
          },
          {
            heading: 'Abstract (English)',
            content: 'The Merdeka Curriculum requires student-centered learning paradigms. Differentiated instruction emerges as a strategic response to accommodate learners unique readiness, interests, and learning profiles. This academic paper demonstrates empirical findings regarding differentiation of content, process, and product in biology teaching.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Pendahuluan & Kajian Teori',
        sections: [
          {
            heading: '1. Latar Belakang Masalah',
            content: 'Di ruang kelas kontemporer, penyeragaman metode ajar seringkali menjadi faktor utama rendahnya resiliensi dan motivasi akademik peserta didik. Tomlinson (2014) menegaskan bahwa pengajaran efektif adalah respons proaktif pendidik terhadap variabilitas peserta didik. Berdasarkan asesmen diagnostik non-kognitif yang dilakukan di awal semester, didapatkan 42% siswa berkarakteristik visual, 35% kinestetik, dan 23% auditori.'
          },
          {
            heading: '2. Landasan Filosofis Ki Hajar Dewantara',
            content: 'Konsep dasar diferensiasi selaras dengan pemikiran Ki Hajar Dewantara mengenai sistem among: menuntun segala kodrat yang ada pada anak agar mereka mencapai keselamatan dan kebahagiaan setinggi-tingginya. Pendidik diibaratkan petani yang tidak dapat mengubah kodrat bibit jagung menjadi padi, melainkan merawat dan menyuburkan tanaman sesuai habitat aslinya.'
          },
          {
            heading: '3. Kerangka Operasional Diferensiasi Pembelajaran',
            content: 'Strategi diferensiasi yang diterapkan mencakup:\n- Diferensiasi Konten: Menyediakan bahan ajar multimodal (infografis terstruktur, rekaman podcast ulasan konsep, dan model maket fisik).\n- Diferensiasi Proses: Pengorganisasian kelompok bertingkat (tiered assignments) dengan scaffolding bertahap.\n- Diferensiasi Produk: Kebebasan format asesmen sumatif (artikel ilmiah mini, video animasi penjelasan, atau poster infografis).'
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Metodologi & Data Temuan Empiris',
        sections: [
          {
            heading: '4. Desain Implementasi & Pengumpulan Data',
            content: 'Subjek penelitian adalah 36 peserta didik kelas XI MIPA 2 pada siklus pembelajaran semester genap. Data dihimpun melalui observasi keterlibatan terstruktur rubrik Likert 4 poin, pre-test & post-test pemahaman, serta catatan reflektif mingguan.'
          },
          {
            heading: '5. Tabel Analisis Hasil Asesmen & Tingkat Keaktifan',
            content: 'Berikut rangkuman perbandingan indikator keterlibatan dan capaian pembelajaran sebelum dan sesudah intervensi diferensiasi:',
            table: {
              caption: 'Tabel 1. Perbandingan Indikator Pembelajaran Konvensional vs Berdiferensiasi',
              headers: ['Indikator Evaluasi', 'Pra-Intervensi (%)', 'Pasca-Intervensi (%)', 'Selisih Peningkatan', 'Signifikansi'],
              rows: [
                ['Keaktifan Diskusi Kelompok', '54.2%', '88.4%', '+34.2%', 'Signifikan (p < 0.01)'],
                ['Penyelesaian Tugas Tepat Waktu', '68.0%', '94.5%', '+26.5%', 'Signifikan'],
                ['Ketuntasan Asesmen Formatif', '61.1%', '86.1%', '+25.0%', 'Signifikan (KKTP ≥ 75)'],
                ['Antusiasme Bertanya Reflektif', '38.9%', '77.8%', '+38.9%', 'Sangat Tinggi'],
                ['Rerata Skor Uji Konsep', '68.4', '84.6', '+16.2 poin', 'Efek Ukuran Kuat']
              ]
            }
          },
          {
            heading: 'Catatan Observasi Praktik',
            callout: 'Siswa dengan kecenderungan kinestetik menunjukkan lonjakan fokus drastis ketika menggunakan kit peraga 3D molekul dibanding saat sekadar menyimak tayangan slide pasif.'
          }
        ]
      },
      {
        pageNumber: 4,
        title: 'Pembahasan, Kesimpulan & Rekomendasi',
        sections: [
          {
            heading: '6. Pembahasan dan Refleksi Kritis',
            content: 'Diferensiasi pembelajaran bukan berarti membuat RPP terpisah untuk setiap siswa secara individual, melainkan menyediakan pintu masuk pembelajaran yang jamak (multiple entry points). Tantangan terbesar yang dihadapi adalah alokasi waktu persiapan media ajar pada awal siklus. Namun, setelah bank media ajar terbentuk, manajemen kelas berjalan jauh lebih kondusif dan minim gangguan disiplin.'
          },
          {
            heading: '7. Kesimpulan & Rekomendasi Praktisi',
            content: '1. Pembelajaran berdiferensiasi terbukti secara empiris meningkatkan keterlibatan emosional dan kognitif peserta didik.\n2. Kunci sukses terletak pada akurasi asesmen diagnostik di awal pembelajaran sebagai peta kompas pendidik.\n3. Disarankan bagi guru sejawat untuk memulai dari diferensiasi proses terlebih dahulu sebelum melangkah ke diferensiasi konten dan produk berskala penuh.'
          },
          {
            heading: '8. Daftar Pustaka Pilihan',
            content: 'Tomlinson, C. A. (2014). The Differentiated Classroom: Responding to the Needs of All Learners (2nd ed.). ASCD.\nKemendikbudristek. (2022). Panduan Pembelajaran dan Asesmen Pendidikan Anak Usia Dini, Pendidikan Dasar, dan Menengah. Badan Standar, Kurikulum, dan Asesmen Pendidikan.\nSuhendar, A. (2021). Desain Pedagogi Abad 21: Transformasi Guru Profesional. Bandung: UPI Press.'
          }
        ]
      }
    ]
  },
  {
    id: 'seminar-02',
    code: 'SEM-PPG-02',
    title: 'Proposal Penelitian Tindakan Kelas (PTK): Pemanfaatan Problem-Based Learning (PBL) Berbantuan Media Interaktif untuk Meningkatkan Keterampilan Berpikir Kritis',
    course: 'Metodologi Penelitian Tindakan Kelas',
    lecturer: 'Prof. Dr. Hj. Nurhayati, M.Si.',
    semester: 'Semester Genap 2024',
    date: '28 Maret 2024',
    pagesCount: 3,
    grade: 'Nilai: 94 (A)',
    category: 'PTK',
    abstractIndo: 'Proposal PTK ini dirancang untuk mengatasi rendahnya keterampilan berpikir kritis peserta didik dalam memecahkan masalah kontekstual ekosistem. Melalui model siklus Kemmis & McTaggart (perencanaan, tindakan, observasi, refleksi), intervensi menggunakan simulasi digital interaktif terintegrasi skenario autentik.',
    abstractEng: 'This action research proposal addresses low critical thinking skills among high school students in contextual environmental problems. Utilizing Kemmis & McTaggart cycles, the intervention leverages interactive digital simulations embedded with authentic scenario-based investigations.',
    keywords: ['Penelitian Tindakan Kelas', 'Problem-Based Learning', 'Berpikir Kritis', 'Simulasi Digital', 'Siklus PTK'],
    pages: [
      {
        pageNumber: 1,
        title: 'Sampul Proposal & Identifikasi Masalah',
        sections: [
          {
            heading: 'PROPOSAL PENELITIAN TINDAKAN KELAS (PTK)',
            content: 'PROGRAM STUDI PENDIDIKAN PROFESI GURU\nUNIVERSITAS PENDIDIKAN INDONESIA'
          },
          {
            heading: 'Judul Penelitian',
            content: 'PEMANFAATAN PROBLEM-BASED LEARNING (PBL) BERBANTUAN MEDIA INTERAKTIF UNTUK MENINGKATKAN KETERAMPILAN BERPIKIR KRITIS PESERTA DIDIK KELAS X SMA'
          },
          {
            heading: 'Identifikasi Akar Masalah',
            content: 'Berdasarkan hasil observasi awal siklus PPL I, ditemukan beberapa kendala fundamental:\n1. 72% pertanyaan yang diajukan siswa masih berada pada level berpikir tingkat rendah (C1-C2 Mengingat & Memahami).\n2. Ketika dihadapkan pada studi kasus pencemaran sungai lokal, siswa kesulitan merumuskan hipotesis dan mencari korelasi data ilmiah.\n3. Ketergantungan terhadap rangkuman teks hafalan tanpa penalaran mandiri.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Desain Intervensi Siklus & Instrumen',
        sections: [
          {
            heading: 'Sintaks Model Problem-Based Learning yang Diterapkan',
            content: 'Fase 1: Orientasi peserta didik pada masalah nyata (studi kasus sampah mikroplastik).\nFase 2: Mengorganisasikan peserta didik untuk belajar dalam kelompok heterogen.\nFase 3: Membimbing penyelidikan individu dan kelompok melalui simulasi digital PhET / BioDigital.\nFase 4: Mengembangkan dan menyajikan hasil karya pemecahan masalah.\nFase 5: Menganalisis dan mengevaluasi proses pemecahan masalah secara pleno.'
          },
          {
            heading: 'Indikator Keberhasilan Tindakan (Kriteria Ketuntasan)',
            table: {
              caption: 'Target Indikator Berpikir Kritis (Facione, 2015)',
              headers: ['Aspek Berpikir Kritis', 'Baseline Awal', 'Target Siklus I', 'Target Siklus II'],
              rows: [
                ['Interpretasi Data Grafis', '45.0%', '65.0%', '≥ 80.0%'],
                ['Analisis Argumen & Bukti', '38.5%', '60.0%', '≥ 75.0%'],
                ['Evaluasi Alternatif Solusi', '42.0%', '62.0%', '≥ 78.0%'],
                ['Inferensi Logis', '50.0%', '70.0%', '≥ 82.0%']
              ]
            }
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Jadwal Siklus & Rubrik Pengamatan',
        sections: [
          {
            heading: 'Pelaksanaan Tindakan Kolaboratif',
            content: 'Penelitian dilaksanakan dalam 2 siklus berulang, berkolaborasi dengan Guru Pamong di sekolah sebagai observer independen. Triangulasi data dilakukan melalui tes esai berpikir kritis, lembar observasi aktivitas sintaks PBL, dan wawancara triangulasi dengan perwakilan peserta didik.'
          },
          {
            heading: 'Etika Penelitian & Komitmen Pendidik',
            callout: 'Seluruh peserta didik diberikan hak privasi data anonymized dan perlakuan pembelajaran yang adil tanpa merugikan jam belajar reguler.'
          }
        ]
      }
    ]
  },
  {
    id: 'seminar-03',
    code: 'SEM-PPG-03',
    title: 'Jurnal Refleksi Kritis Filosofi Pendidikan Ki Hajar Dewantara: Menumbuhkan Kodrat Alam dan Kodrat Zaman',
    course: 'Filosofi Pendidikan Indonesia',
    lecturer: 'Drs. H. Mamat Ruhimat, M.Pd.',
    semester: 'Semester Ganjil 2023',
    date: '19 November 2023',
    pagesCount: 3,
    grade: 'Nilai: 98 (A+)',
    category: 'Refleksi',
    abstractIndo: 'Refleksi kritis ini mendokumentasikan metamorfosis paradigma mengajar penulis dari teacher-centered transmission ke pemikiran Ki Hajar Dewantara mengenai pendidikan yang memerdekakan. Membedah konsep kodrat alam, kodrat zaman, budi pekerti, dan implementasinya di era digital.',
    abstractEng: 'This critical reflection documents the pedagogical paradigm transformation from teacher-centered knowledge transmission to Ki Hajar Dewantaras philosophy of liberating education, deconstructing nature, culture, and ethics in the contemporary digital era.',
    keywords: ['Ki Hajar Dewantara', 'Filosofi Pendidikan', 'Refleksi Kritis', 'Sistem Among', 'Pendidikan Memerdekakan'],
    pages: [
      {
        pageNumber: 1,
        title: 'Refleksi Awal: Belenggu Ilusi Guru Mengontrol',
        sections: [
          {
            heading: 'JURNAL REFLEKSI KRITIS MINGGUAN',
            content: 'Mata Kuliah: Filosofi Pendidikan Indonesia | Topik 1 & 2: Landasan Pemikiran Ki Hajar Dewantara'
          },
          {
            heading: '1. Apa yang Saya Percaya Sebelum Mempelajari Modul Ini?',
            content: 'Dulu saya percaya bahwa kelas yang berhasil adalah kelas yang senyap, di mana seluruh murid mendengarkan penjelasan guru tanpa bantahan. Saya mengira guru adalah satu-satunya sumber otoritas ilmu, dan tugas utama saya adalah "menuangkan" materi kurikulum hingga tuntas tepat waktu terlepas dari apakah anak-anak sungguh memahaminya atau sekadar menghafal demi ujian.'
          },
          {
            heading: '2. Titik Balik Paradigma: Tabula Rasa vs Menuntun Garis Samar',
            content: 'Pemikiran KHD mematahkan mitos Tabula Rasa (kertas kosong). Anak lahir dengan kekuatan kodrat yang masih samar-samar. Peran pendidik bukan menggambar hal baru di atas kertas kosong itu, melainkan menebalkan garis-garis samar budi pekerti dan potensi luhur agar menjadi terang dan bermartabat.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Konsep Kodrat Alam, Kodrat Zaman, dan Tri Sentra Pendidikan',
        sections: [
          {
            heading: '3. Menghargai Kodrat Alam dan Menjawab Kodrat Zaman',
            content: '- Kodrat Alam: Berkaitan dengan sifat dan bentuk lingkungan di mana anak berada. Peserta didik di kawasan agraris atau pesisir memiliki kearifan lokal yang harus menjadi jembatan pembelajaran saintifik, bukan dihilangkan.\n- Kodrat Zaman: Berkaitan dengan dinamika zaman yang terus berubah. Mengajar generasi digital hari ini menuntut pendidik melek teknologi tanpa kehilangan nilai-nilai luhur kemanusiaan.'
          },
          {
            heading: '4. Relevansi Tri Hayu & Tri Sentra',
            content: 'Pendidikan harus menjaga keberlangsungan hidup (Hamemayu Hayuning Bawana). Sinergi tiga pilar: Keluarga sebagai tempat pertama budi pekerti, Sekolah sebagai kawah candradimuka kecakapan, dan Masyarakat sebagai panggung aplikasi nyata.'
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Rencana Aksi Transformasi Nyata di Kelas',
        sections: [
          {
            heading: '5. Komitmen Konkret dalam Praktik Pengajaran',
            content: '1. Menghentikan hukuman yang memalukan; menggantikannya dengan segitiga restitusi yang menumbuhkan disiplin positif dari dalam batin anak.\n2. Memberi ruang suara (voice), pilihan (choice), dan kepemilikan (ownership) bagi murid dalam menentukan proyek belajarnya.\n3. Menjadi pendengar yang hadir seutuhnya bagi setiap kegelisahan belajar anak didik saya.'
          },
          {
            heading: 'Kutipan Mutiara Perenungan',
            callout: '"Anak-anak hidup dan tumbuh sesuai kodratnya sendiri. Pendidik hanya dapat merawat dan menuntun tumbuhnya kodrat itu." — Ki Hajar Dewantara'
          }
        ]
      }
    ]
  },
  {
    id: 'seminar-04',
    code: 'SEM-PPG-04',
    title: 'Desain Inovasi Pembelajaran Digital (TPACK): Integrasi Simulasi Interaktif dan Asesmen Formatif Gamifikasi',
    course: 'Teknologi Baru dalam Pengajaran dan Pembelajaran',
    lecturer: 'Dr. Deni Darmawan, S.Pd., M.Si.',
    semester: 'Semester Genap 2024',
    date: '10 April 2024',
    pagesCount: 3,
    grade: 'Nilai: 96 (A)',
    category: 'Inovasi Digital',
    abstractIndo: 'Karya inovasi pedagogis ini menyajikan arsitektur pembelajaran berbasis kerangka kerja TPACK (Technological Pedagogical Content Knowledge). Memadukan simulasi mikroskop virtual, platform kuis adaptif gamifikasi Quizizz/Nearpod, dan Google Classroom sebagai hub kolaborasi.',
    abstractEng: 'This pedagogical innovation paper articulates a TPACK framework instructional design blending virtual microscopy, gamified adaptive formative assessment, and digital collaborative workspaces in modern secondary science classrooms.',
    keywords: ['TPACK', 'Simulasi Virtual', 'Gamifikasi', 'Asesmen Formatif', 'Inovasi Pedagogis'],
    pages: [
      {
        pageNumber: 1,
        title: 'Arsitektur Desain TPACK & Analisis Kebutuhan',
        sections: [
          {
            heading: 'DESAIN INOVASI TEKNOLOGI PEMBELAJARAN',
            content: 'Fokus Mata Pelajaran: Biologi Sel & Genetika | Sasaran: Siswa Kelas XI SMA'
          },
          {
            heading: '1. Integrasi Kerangka TPACK',
            content: '- Content Knowledge (CK): Konsep pembelahan sel (mitosis & meiosis), mutasi DNA, dan regulasi siklus sel.\n- Pedagogical Knowledge (PK): Pendekatan inkuiri berbasis penemuan terbimbing dan cooperative learning model Jigsaw.\n- Technological Knowledge (TK): Pemanfaatan simulasi Java/HTML5 PhET Colorado Interactive Simulations dan aplikasi Virtual Microscope.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Implementasi & Alur Skenario Pembelajaran',
        sections: [
          {
            heading: 'Skenario 90 Menit Tatap Muka Terpadu Digital',
            content: '00-15 Menit: Asesmen Diagnostik Awal melalui Polling Interaktif Mentimeter.\n15-45 Menit: Eksplorasi Virtual Lab menggunakan LKPD Digital berbasis Google Docs kolaboratif.\n45-70 Menit: Diskusi Temuan & Presentasi Kelompok via Canvasing Digital.\n70-90 Menit: Asesmen Formatif Real-Time Gamifikasi untuk mendeteksi miskonsepsi secara instan.'
          },
          {
            heading: 'Evaluasi Dampak Keterlibatan Siswa',
            table: {
              caption: 'Umpan Balik Pengalaman Belajar Digital (N=35 Siswa)',
              headers: ['Pernyataan Evaluasi', 'Sangat Setuju', 'Setuju', 'Netral', 'Kurang Setuju'],
              rows: [
                ['Media simulasi mempermudah memahami proses mikroskopis', '74.3%', '25.7%', '0.0%', '0.0%'],
                ['Asesmen gamifikasi mengurangi rasa cemas saat ujian', '68.6%', '28.6%', '2.8%', '0.0%'],
                ['Petunjuk kerja LKPD interaktif jelas dan mudah diikuti', '62.9%', '34.3%', '2.8%', '0.0%']
              ]
            }
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Refleksi Keberlanjutan & Solusi Kesenjangan Akses',
        sections: [
          {
            heading: 'Mitigasi Keterbatasan Infrastruktur Sekolah',
            content: 'Inovasi ini dirancang dengan prinsip low-bandwidth: materi dapat diakses secara offline (cacheable), simulasi dapat dijalankan via browser smartphone tanpa instalasi aplikasi berat, dan tersedia alternatif lembar kerja fisik bagi siswa yang mengalami kendala perangkat.'
          }
        ]
      }
    ]
  },
  {
    id: 'seminar-05',
    code: 'SEM-PPG-05',
    title: 'Kajian Literatur: Analisis Kesiapan Pendidik dalam Melaksanakan Asesmen Diagnostik Kognitif dan Non-Kognitif di Era Merdeka Belajar',
    course: 'Prinsip Pengajaran dan Asesmen Efektif II',
    lecturer: 'Dr. Tatang Suratno, M.Pd.',
    semester: 'Semester Genap 2024',
    date: '02 Juni 2024',
    pagesCount: 3,
    grade: 'Nilai: 93 (A)',
    category: 'Kajian Literatur',
    abstractIndo: 'Kajian literatur sistematis terhadap 24 artikel jurnal ilmiah nasional terakreditasi SINTA periode 2021-2024 untuk memetakan tantangan, instrumen, dan model pendampingan guru dalam merancang asesmen diagnostik yang valid, reliabel, dan aplikatif.',
    abstractEng: 'A systematic literature review examining 24 SINTA-indexed academic articles (2021-2024) analyzing educators readiness, instrumentation challenges, and mentoring frameworks in conducting cognitive and non-cognitive diagnostic assessments.',
    keywords: ['Asesmen Diagnostik', 'Kajian Literatur', 'Merdeka Belajar', 'Kompetensi Guru', 'Analisis Kesiapan'],
    pages: [
      {
        pageNumber: 1,
        title: 'Sistematika Kajian & Metodologi Penelusuran',
        sections: [
          {
            heading: 'KAJIAN LITERATUR SISTEMATIS (PRISMA METHOD)',
            content: 'Topik: Asesmen Diagnostik dalam Implementasi Kurikulum Merdeka di Jenjang Pendidikan Menengah'
          },
          {
            heading: '1. Kriteria Seleksi Artikel',
            content: 'Kriteria inklusi: (a) Diterbitkan pada jurnal nasional SINTA 1-4 rentang 2021-2024; (b) Berfokus pada kompetensi pendidik dalam asesmen diagnostik; (c) Menyajikan data empiris kuantitatif maupun kualitatif di sekolah Indonesia. Dari 87 artikel awal, terpilih 24 artikel yang memenuhi standar telaah kritis.'
          }
        ]
      },
      {
        pageNumber: 2,
        title: 'Sintesis Temuan & Klaster Tantangan',
        sections: [
          {
            heading: '2. Tiga Klaster Utama Kendala Lapangan',
            content: '1. Klaster Konseptual: 46% guru masih menyamakan asesmen diagnostik dengan pre-test semata tanpa tindak lanjut penyesuaian materi.\n2. Klaster Waktu & Beban Kerja: Tingginya beban administrasi membuat guru kesulitan menganalisis profil belajar siswa per individu.\n3. Klaster Validitas Instrumen: Ketiadaan bank instrumen non-kognitif yang terstandarisasi untuk mengukur minat dan profil sosial ekonomi.'
          },
          {
            heading: 'Rekomendasi Kebijakan Komunitas Guru',
            callout: 'Penguatan MGMP sebagai basis co-creation instrumen asesmen diagnostik terbukti menjadi intervensi paling efektif dengan tingkat keberhasilan adopsi 78%.'
          }
        ]
      },
      {
        pageNumber: 3,
        title: 'Kesimpulan & Arah Riset Lanjutan',
        sections: [
          {
            heading: '3. Implikasi Praktis bagi Calon Guru Profesional',
            content: 'Bagi guru pemula, memulai asesmen diagnostik non-kognitif sederhana (seperti roda emosi dan angket preferensi belajar 5 butir) di awal semester terbukti membangun relasi pedagogis yang jauh lebih hangat dan mempercepat terwujudnya psychological safety di ruang kelas.'
          }
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Mendengarkan Detak Jantung Kelas: Seni Merancang Pembelajaran Berdiferensiasi',
    slug: 'seni-pembelajaran-berdiferensiasi',
    date: '28 Mei 2024',
    readTime: '5 min baca',
    category: 'Pedagogi & Praktik',
    excerpt: 'Pembelajaran berdiferensiasi bukan tentang membuat puluhan RPP berbeda untuk setiap anak, melainkan tentang kerendahan hati seorang guru untuk mendengarkan kebutuhan unik muridnya.',
    content: [
      'Ketika pertama kali berdiri di depan kelas berisi 36 anak remaja, hal pertama yang memukul kesadaran saya adalah: tidak ada satupun di antara mereka yang benar-benar sama. Ada siswa yang matanya berbinar saat melihat bagan anatomi berputar, ada yang baru mengerti ketika mendengarkan analogi cerita, dan ada yang harus memegang alat peraga langsung agar konsep tersebut meresap.',
      'Di situlah letak keindahan pembelajaran berdiferensiasi. Kita tidak sedang menciptakan 36 rencana pembelajaran yang berbeda—karena itu tentu akan membuat guru kelelahan tanpa arah. Sebaliknya, diferensiasi adalah tentang kepekaan kita menyiapkan beragam jalur masuk bagi anak untuk memahami satu gagasan besar yang sama.',
      'Langkah pertama yang saya lakukan di awal semester adalah membagikan "Paspor Belajar". Lembar sederhana ini berisi pertanyaan tentang apa yang membuat mereka bersemangat saat belajar, kapan mereka merasa paling kesulitan, dan karya apa yang paling mereka banggakan saat dibuat dengan tangan mereka sendiri.',
      'Hasilnya mengejutkan. Murid yang biasanya pendiam di baris belakang ternyata seorang pembuat video kreatif yang luar biasa. Ketika saya memberikan opsi penilaian sumatif dalam bentuk video edukasi singkat selain esai tertulis, ia menghasilkan karya visual yang sangat mendalam dan melampaui kriteria ketuntasan.',
      'Mendidik dengan berdiferensiasi mengajarkan saya satu hal penting: keadilan di ruang kelas bukanlah membagikan ukuran sepatu yang sama kepada semua orang, melainkan memastikan setiap anak mendapatkan sepatu yang pas dengan ukuran kakinya sendiri.'
    ],
    tags: ['Pembelajaran Berdiferensiasi', 'Kurikulum Merdeka', 'Refleksi Guru', 'Manajemen Kelas'],
    likes: 42
  },
  {
    id: 'blog-02',
    title: 'Catatan dari Lapangan PPL: Menemukan Jiwa Pendidik di Antara Kertas Kerja dan Tatap Mata Murid',
    slug: 'catatan-lapangan-ppl',
    date: '12 April 2024',
    readTime: '6 min baca',
    category: 'Refleksi Pendidik',
    excerpt: 'Teori-teori pedagogik di bangku kuliah serasa baru menemukan raganya ketika berhadapan dengan dinamika nyata di sekolah mitra. Inilah catatan jujur tentang keraguan, kegagalan kecil, dan kebahagiaan sejati seorang guru.',
    content: [
      'Bulan pertama Praktik Pengalaman Lapangan (PPL) terasa seperti ombak besar. Di kepala saya penuh dengan sintaks pembelajaran kooperatif, taksonomi Bloom yang direvisi, dan rubrik analitik berjenjang. Namun, begitu lonceng masuk berbunyi dan pintu kelas ditutup, kenyataan menyapa dengan cara yang sama sekali tidak tertulis di buku teks.',
      'Suatu hari di minggu ketiga, sebuah modul ajar yang telah saya susun selama berhari-hari runtuh dalam 20 menit pertama. Siswa tampak lesu, proyektor sekolah sempat mengalami kendala teknis, dan diskusi kelompok berjalan canggung.',
      'Saya sempat merasa gagal sebagai calon guru. Namun, guru pamong saya tersenyum bijak saat evaluasi sore hari: "Tantri, mengajar itu bukan tentang memamerkan betapa sempurnanya rencana kita, tapi tentang seberapa lentur kita menemani anak-anak di saat rencana itu harus diubah."',
      'Keesokan harinya, saya meletakkan buku catatan sejenak. Saya mengajak mereka duduk melingkar, membuka diskusi dengan pertanyaan reflektif sederhana tentang pengalaman hidup mereka yang berhubungan dengan materi. Kelas seketika hidup. Ada tawa, ada bantahan argumentatif yang cerdas, dan ada rasa saling percaya yang tumbuh.',
      'Sejak saat itu saya menyadari: menjadi guru bukan profesi penyampai materi semata, melainkan profesi penjaga harapan.'
    ],
    tags: ['Pengalaman Lapangan', 'PPL PPG', 'Filosofi Guru', 'Pengembangan Diri'],
    likes: 58
  },
  {
    id: 'blog-03',
    title: 'Teknologi dan Guru di Era AI: Menjaga Sentuhan Kemanusiaan di Ruang Belajar Digital',
    slug: 'teknologi-guru-era-ai',
    date: '18 Februari 2024',
    readTime: '4 min baca',
    category: 'Teknologi Pendidikan',
    excerpt: 'Kecerdasan artifisial dapat menyusun ringkasan materi dalam hitungan detik. Namun, apa yang tak akan pernah bisa digantikan oleh mesin di ruang kelas? Kehangatan tatapan seorang pendidik yang percaya pada potensi muridnya.',
    content: [
      'Sebagai guru sains generasi baru, saya sangat antusias mengintegrasikan alat bantu digital seperti laboratorium virtual, simulasi PhET, dan analitik pembelajaran. Namun belakangan ini, pertanyaan yang paling sering muncul dalam diskusi kependidikan adalah: "Apakah guru akan tergantikan oleh kecerdasan buatan?"',
      'Jawabannya adalah tidak—selama guru tidak mengajar seperti mesin.',
      'Jika peran guru hanya sebatas membacakan slide materi yang sama dari tahun ke tahun, mesin pencari dan AI jelas lebih cepat dan lebih lengkap. Namun, kecerdasan buatan tidak memiliki hati nurani untuk melihat mata seorang anak yang murung di sudut kelas karena masalah keluarga.',
      'AI tidak bisa menepuk pundak seorang murid yang gagal ujian lalu berbisik lembut: "Bapak/Ibu tahu kamu sudah berusaha sungguh-sungguh, mari kita coba lagi bersama."',
      'Kerangka TPACK mengajarkan kita bahwa teknologi adalah instrumen pengungkit (amplifier), bukan pengganti inti pedagogik. Di era kecerdasan buatan ini, tugas kita sebagai pendidik justru menjadi semakin mulia: melatih anak-anak kita berpikir kritis, berempati secara mendalam, dan menggunakan akal budinya demi kemaslahatan bersama.'
    ],
    tags: ['TPACK', 'Kecerdasan Artifisial', 'Etika Pendidikan', 'Masa Depan Pembelajaran'],
    likes: 39
  }
];

export const ARTIFACTS_LIST: ArtifactItem[] = [
  {
    id: 'art-01',
    title: 'Modul Ajar Berdiferensiasi: Struktur dan Fungsi Sel (Bioproses)',
    type: 'Modul Ajar',
    curriculum: 'Kurikulum Merdeka',
    gradeLevel: 'Fase F (Kelas XI SMA)',
    subject: 'Biologi',
    description: 'Modul ajar lengkap 4 pertemuan dengan pemetaan kebutuhan belajar visual/auditori/kinestetik, asesmen diagnostik awal, rubrik performa produk LKPD, dan materi pengayaan.',
    competencies: ['Menganalisis keterkaitan antara struktur sel dan bioproses', 'Menyajikan data hasil investigasi mikroskopis', 'Bernalar kritis dan mandiri'],
    fileSize: '3.4 MB',
    pages: 28,
    previewSnippet: 'Tujuan Pembelajaran: Melalui penyelidikan virtual lab dan observasi preparat segar, peserta didik mampu mengidentifikasi organel sel dan fungsinya dengan tepat sesuai minat karya (infografis/video/laporan ilmiah).'
  },
  {
    id: 'art-02',
    title: 'LKPD Interaktif Eksploratif: Ekologi & Keseimbangan Lingkungan',
    type: 'LKPD',
    curriculum: 'Kurikulum Merdeka',
    gradeLevel: 'Fase E (Kelas X SMA)',
    subject: 'IPA / Biologi',
    description: 'Lembar Kerja Peserta Didik terstruktur dengan integrasi barcode simulasi interaktif, lembar penyelidikan berbasis masalah lingkungan sungai lokal, dan rubrik penilaian diri.',
    competencies: ['Mengidentifikasi interaksi antarkomponen ekosistem', 'Menganalisis dampak aktivitas manusia terhadap lingkungan', 'Gotong royong'],
    fileSize: '2.1 MB',
    pages: 14,
    previewSnippet: 'Aktivitas: Investigasi Kasus Pencemaran Air Sungai Citarum menggunakan data sekunder kualitas air parameter BOD, COD, dan pH. Disertai panduan analisis data grafis.'
  },
  {
    id: 'art-03',
    title: 'Media Pembelajaran Digital: Media Interaktif Siklus Sel & Mitosis (TPACK)',
    type: 'Media Digital',
    curriculum: 'Kurikulum Merdeka',
    gradeLevel: 'Fase F (Kelas XII SMA)',
    subject: 'Biologi',
    description: 'Paket media presentasi interaktif dan modul simulasi berbasis web yang dilengkapi animasi kinetik fasa pembelahan kromosom, audio narasi, dan mini kuis reflektif per tahapan.',
    competencies: ['Menjelaskan tahapan mitosis dan meiosis', 'Membedakan gametogenesis tumbuhan dan hewan', 'Literasi digital'],
    fileSize: '5.8 MB',
    pages: 36,
    previewSnippet: 'Fitur Utama: Interaksi 3D kromosom kinetokor, simulasi kesalahan fasa anafase (nondisjunction), dan asesmen kendali mutasi genetik.'
  },
  {
    id: 'art-04',
    title: 'Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif Awal Semester',
    type: 'Asesmen',
    curriculum: 'Kurikulum Merdeka',
    gradeLevel: 'Fase E & F',
    subject: 'Lintas Mata Pelajaran Sains',
    description: 'Kuesioner pemetaan modalitas belajar VAK (Visual, Auditori, Kinestetik), tes pemahaman prasyarat sains dasar, dan angket kesejahteraan psikososial peserta didik.',
    competencies: ['Pemetaan kesiapan belajar', 'Pemetaan gaya belajar', 'Refleksi emosional'],
    fileSize: '1.8 MB',
    pages: 12,
    previewSnippet: 'Memuat 15 butir instrumen non-kognitif tervalidasi dan 10 butir soal pilihan ganda beralasan untuk mendeteksi kesiapan kognitif.'
  }
];

export const ASSESSMENT_RUBRICS: AssessmentRubric[] = [
  {
    id: 'rubrik-01',
    title: 'Rubrik Asesmen Performa Diskusi & Kolaborasi Penyelidikan Sains',
    type: 'Formatif',
    subject: 'Sains / Biologi',
    description: 'Digunakan oleh guru dan rekan sejawat (peer assessment) untuk mengukur keterampilan kolaborasi saintifik dan keaktifan argumentasi berlandaskan bukti empiris.',
    criteria: [
      {
        name: 'Kualitas Argumen Saintifik',
        weight: 30,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Menyampaikan klaim didukung data empiris kuat dan rujukan teori yang tepat serta relevan.' },
          { score: 3, label: 'Baik', descriptor: 'Menyampaikan klaim didukung bukti data, namun rujukan pustaka masih terbatas.' },
          { score: 2, label: 'Cukup', descriptor: 'Menyampaikan klaim tanpa dukungan bukti data yang memadai; bersifat asumtif.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Pasif dalam diskusi dan tidak mampu merumuskan argumen logis.' }
        ]
      },
      {
        name: 'Keterampilan Mendengarkan & Respon Empatik',
        weight: 25,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Mendengarkan gagasan rekan dengan penuh perhatian, mengajukan pertanyaan klarifikasi yang santun.' },
          { score: 3, label: 'Baik', descriptor: 'Mendengarkan penjelasan orang lain dengan baik tanpa memotong pembicaraan.' },
          { score: 2, label: 'Cukup', descriptor: 'Terkadang memotong pembicaraan rekan atau kurang fokus menyimak.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Mendominasi atau bersikap acuh terhadap pendapat rekan satu kelompok.' }
        ]
      },
      {
        name: 'Keterlibatan & Tanggung Jawab Tim',
        weight: 25,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Menuntaskan pembagian tugas tepat waktu dengan inisiatif tinggi membantu rekan yang kesulitan.' },
          { score: 3, label: 'Baik', descriptor: 'Menyelesaikan bagian tugas yang diamanahkan secara mandiri dan tepat waktu.' },
          { score: 2, label: 'Cukup', descriptor: 'Menyelesaikan tugas setelah diingatkan berulang kali oleh anggota kelompok.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Tidak berkontribusi nyata dalam penyelesaian tugas kelompok.' }
        ]
      },
      {
        name: 'Presentasi dan Visualisasi Hasil',
        weight: 20,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Hasil karya disajikan sangat sistematis, estetis, mudah dipahami, dan komunikatif.' },
          { score: 3, label: 'Baik', descriptor: 'Penyajian karya runtut dan jelas, grafis atau tabel tersaji rapi.' },
          { score: 2, label: 'Cukup', descriptor: 'Penyajian karya kurang runtut dan beberapa informasi sulit dibaca.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Karya tidak terstruktur dan visualisasi tidak informatif.' }
        ]
      }
    ]
  },
  {
    id: 'rubrik-02',
    title: 'Rubrik Penilaian Produk Akhir Modul Ajar (Laporan / Infografis / Video)',
    type: 'Sumatif',
    subject: 'Kurikulum Merdeka',
    description: 'Panduan penilaian autentik produk akhir yang berdiferensiasi format karya namun tetap menjamin ketercapaian Tujuan Pembelajaran (KKTP).',
    criteria: [
      {
        name: 'Kedalaman dan Akurasi Konseptual',
        weight: 35,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Konsep sains dipaparkan secara mendalam, akurat, tanpa ada miskonsepsi biologis sedikitpun.' },
          { score: 3, label: 'Baik', descriptor: 'Sebagian besar konsep tepat, terdapat 1 kekeliruan terminologi minor yang tidak fatal.' },
          { score: 2, label: 'Cukup', descriptor: 'Terdapat beberapa miskonsepsi dasar yang perlu diluruskan kembali oleh guru.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Banyak kesalahan konseptual fatal dalam pemaparan materi.' }
        ]
      },
      {
        name: 'Kreativitas dan Orisinalitas',
        weight: 30,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Menampilkan kebaruan ide desain, analogi yang orisinal, serta tata letak karya yang sangat menarik.' },
          { score: 3, label: 'Baik', descriptor: 'Karya menarik dan rapi, mengadaptasi template dengan modifikasi pribadi yang baik.' },
          { score: 2, label: 'Cukup', descriptor: 'Desain cenderung standar dan meniru karya orang lain tanpa banyak eksplorasi.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Karya minim usaha estetika atau indikasi plagiarisme tinggi.' }
        ]
      },
      {
        name: 'Solusi Kontekstual & Refleksi Nilai',
        weight: 35,
        levels: [
          { score: 4, label: 'Sangat Baik', descriptor: 'Menyajikan rekomendasi solusi konkret yang aplikatif bagi lingkungan sekitar sekolah/rumah.' },
          { score: 3, label: 'Baik', descriptor: 'Menyajikan usulan solusi yang logis walau masih berskala teoritis umum.' },
          { score: 2, label: 'Cukup', descriptor: 'Solusi yang diajukan terlalu normatif dan kurang relevan dengan isu yang dibahas.' },
          { score: 1, label: 'Perlu Bimbingan', descriptor: 'Tidak ada refleksi atau kesimpulan solusi pemecahan masalah.' }
        ]
      }
    ]
  }
];

export const DOCUMENTATION_PHOTOS: DocumentationPhoto[] = [
  {
    id: 'doc-01',
    title: 'Praktik Pembelajaran Kolaboratif Berdiferensiasi di Kelas',
    date: '18 April 2024',
    location: 'SMA Negeri Mitra, Bandung',
    category: 'Praktik Mengajar',
    imageUrl: classroomImage,
    caption: 'Mendampingi kelompok peserta didik dalam eksplorasi lembar kerja bioproses sel berbasis model tiered assignment. Tampak antusiasme siswa saat berdiskusi membedah kasus kontekstual.',
    attendeesCount: '36 Siswa'
  },
  {
    id: 'doc-02',
    title: 'Presentasi Makalah Ilmiah pada Seminar Nasional Pendidikan',
    date: '14 Mei 2024',
    location: 'Auditorium FPMIPA UPI, Bandung',
    category: 'Seminar & Workshop',
    imageUrl: seminarImage,
    caption: 'Memaparkan hasil kajian tindakan kelas mengenai efektivitas differentiated learning dihadapan para dosen penguji, pakar kurikulum, dan rekan-rekan mahasiswa PPG se-Indonesia.',
    attendeesCount: '120 Peserta'
  },
  {
    id: 'doc-03',
    title: 'Penyusunan Perangkat Ajar & Rubrik Asesmen Kurikulum Merdeka',
    date: '02 Maret 2024',
    location: 'Laboratorium Microteaching & Pengembangan Kurikulum',
    category: 'Kolaborasi',
    imageUrl: artifactsImage,
    caption: 'Merancang dokumen kurikulum operasional sekolah, modul ajar berbasis ADDIE model, serta instrumen rubrik analitik untuk asesmen diagnostik dan sumatif.',
    attendeesCount: 'Tim MGMP Sains'
  },
  {
    id: 'doc-04',
    title: 'Potret Akademik & Dedikasi Profesional Pendidik',
    date: '10 Januari 2024',
    location: 'Perpustakaan Pusat UPI',
    category: 'Praktik Mengajar',
    imageUrl: profileImage,
    caption: 'Komitmen seumur hidup untuk terus belajar, meneliti, dan berbagi inspirasi bagi pemajuan ekosistem pendidikan Indonesia yang memanusiakan hubungan guru dan murid.',
    attendeesCount: 'Tantri Fadhillah, S.Pd.'
  }
];
