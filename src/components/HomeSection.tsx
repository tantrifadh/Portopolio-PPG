import React from 'react';
import { SectionId } from '../types/portfolio';
import { 
  FileText, 
  ArrowRight, 
  BookOpen, 
  Award, 
  CheckCircle, 
  Layers, 
  Sparkles,
  Heart,
  Smile,
  GraduationCap
} from 'lucide-react';
import { 
  EDUCATOR_INFO, 
  SEMINAR_TASKS, 
  BLOG_POSTS, 
  ARTIFACTS_LIST,
  profileImage 
} from '../data/portfolioData';

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
  onSelectSeminarTask: (taskId: string) => void;
  onSelectBlogPost: (postId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onSelectSeminarTask,
  onSelectBlogPost
}) => {
  return (
    <div className="space-y-20">
      
      {/* Hero Split Section */}
      <section className="pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy & Cheerful Energy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
              <span>Portofolio Akademik & Guru Inspiratif</span>
              <span aria-hidden="true">·</span>
              <span className="text-orange-700">Kurikulum Merdeka</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title text-stone-900 leading-[1.2] tracking-tight">
              Mendidik dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">Penuh Cinta & Sukacita</span>, Menuntun Potensi Anak Bangsa.
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
              Halo! Selamat datang di portofolio digital <strong>{EDUCATOR_INFO.name}</strong>. Tempat berbagi inspirasi modul ajar berdiferensiasi, instrumen penilaian autentik, serta kumpulan naskah tugas <strong>Seminar Kependidikan</strong> dalam format PDF interaktif yang dilengkapi fitur pembesar dan pengecil tampilan (zoom in/out).
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-700 hover:to-emerald-800 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-102 group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-200" />
                <span>Buka Tugas Seminar (PDF Viewer)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('profil')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-amber-50 rounded-xl transition-all border border-amber-200 shadow-xs hover:border-amber-300 cursor-pointer"
              >
                <Smile className="w-4 h-4 text-amber-600" />
                <span>Profil & Filosofi Guru</span>
              </button>
            </div>

            {/* Quick trust cues with colorful dots */}
            <div className="pt-4 border-t border-amber-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Alumni PPG Prajabatan UPI
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-orange-600" />
                Sertifikat Pendidik Kemendikbudristek
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-600" />
                Pakar Pembelajaran Berdiferensiasi
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container with Cheerful Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Joyful background aura glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Main photo container */}
              <div className="relative rounded-3xl overflow-hidden border-3 border-white shadow-xl bg-white aspect-square group">
                <img
                  src={profileImage}
                  alt="Tantri Fadhillah, S.Pd. tersenyum hangat di perpustakaan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Cheerful bottom scrim tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/85 via-stone-900/35 to-transparent p-5 text-white">
                  <p className="font-serif-title text-xl font-bold">
                    {EDUCATOR_INFO.name}
                  </p>
                  <p className="text-xs text-amber-200 font-medium">
                    {EDUCATOR_INFO.title}
                  </p>
                  <p className="text-[11px] text-stone-200 mt-1">
                    Universitas Pendidikan Indonesia
                  </p>
                </div>
              </div>

              {/* Floating cheerful credential card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border-2 border-amber-200 rounded-2xl p-3.5 shadow-lg max-w-[230px] animate-bounce-subtle">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    ★
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">IPK 3.94 (Pujian)</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">UKMPPG Lulus Sempurna</span>
                  </div>
                </div>
                <p className="text-[11px] text-stone-600 leading-tight">
                  Inovasi Pembelajaran Biologi & Sains Bermakna
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Cheerful Colorful Metric Strip below the hero split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 shadow-xs hover:border-amber-300 transition-colors">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
              Dokumen Seminar
            </span>
            <p className="text-3xl font-bold font-mono text-amber-950 tabular-nums">
              5 Makalah
            </p>
            <p className="text-xs text-amber-700/90 mt-1">
              Koleksi Tugas Seminar Kependidikan PDF
            </p>
          </div>

          <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-5 shadow-xs hover:border-orange-300 transition-colors">
            <span className="text-xs font-bold text-orange-800 uppercase tracking-wider block mb-1">
              Koleksi Artefak
            </span>
            <p className="text-3xl font-bold font-mono text-orange-950 tabular-nums">
              4 Perangkat
            </p>
            <p className="text-xs text-orange-700/90 mt-1">
              Modul Ajar, LKPD Interaktif & TPACK
            </p>
          </div>

          <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-5 shadow-xs hover:border-teal-300 transition-colors">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider block mb-1">
              Pengalaman Mengajar
            </span>
            <p className="text-3xl font-bold font-mono text-teal-950 tabular-nums">
              3 Siklus
            </p>
            <p className="text-xs text-teal-700/90 mt-1">
              Praktik Pengalaman Lapangan (PPL) Terbimbing
            </p>
          </div>

          <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-5 shadow-xs hover:border-rose-300 transition-colors">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1">
              Prinsip Kurikulum
            </span>
            <p className="text-3xl font-bold font-mono text-rose-950 tabular-nums">
              100%
            </p>
            <p className="text-xs text-rose-700/90 mt-1">
              Berpusat pada Minat & Kodrat Murid
            </p>
          </div>
        </div>
      </section>

      {/* Cheerful Featured Teaser: Seminar Kependidikan & PDF Zoom Feature */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-teal-700">
        
        {/* Playful background decorative shapes */}
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-teal-600/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-40 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-teal-950/80 border border-amber-400/40 px-3.5 py-1.5 rounded-full shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Fitur Unggulan Portofolio</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-title leading-snug text-white">
              Kumpulan Tugas Seminar Kependidikan dengan Pembaca PDF Interaktif
            </h2>

            <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
              Mata kuliah Seminar Kependidikan menghadirkan artikel ilmiah, proposal PTK, jurnal refleksi, dan kajian literatur. Nikmati pengalaman membaca yang nyaman dengan <strong>fitur perbesar/perkecil (Zoom In/Out 50% - 250%)</strong>, penyesuaian lebar halaman, pencarian kata, cetak, hingga unggah file PDF tugas Anda sendiri!
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-stone-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md hover:scale-102 cursor-pointer"
              >
                <span>Buka Pembaca PDF Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-teal-200">
                ✨ 5 Tugas terverifikasi dosen + opsi upload file mandiri
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-teal-950/90 border border-teal-700/80 rounded-2xl p-5 space-y-3 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs text-teal-200 border-b border-teal-800/80 pb-2.5">
                <span className="font-semibold text-amber-300">Naskah Tugas Terverifikasi</span>
                <span className="font-mono text-emerald-300 font-bold bg-emerald-900/60 px-2 py-0.5 rounded">
                  Nilai A / A+
                </span>
              </div>

              <div className="space-y-2">
                {SEMINAR_TASKS.slice(0, 3).map((task) => (
                  <button
                    key={task.id}
                    onClick={() => {
                      onSelectSeminarTask(task.id);
                      onNavigate('seminar');
                    }}
                    className="w-full text-left p-3 rounded-xl bg-teal-900/40 hover:bg-teal-800/60 border border-teal-800/60 hover:border-amber-400/60 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] text-teal-300 mb-1">
                      <span className="font-mono text-amber-300 font-bold">{task.code}</span>
                      <span className="text-teal-200">{task.pagesCount} Hlm</span>
                    </div>
                    <p className="text-xs font-semibold text-white line-clamp-1 group-hover:text-amber-200 transition-colors">
                      {task.title}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => onNavigate('seminar')}
                  className="text-xs text-amber-300 hover:text-amber-200 font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Lihat Seluruh 5 Naskah di PDF Reader</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Section: Cheerful Blog Terbaru */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-amber-200 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-800 tracking-wider uppercase">
              Tulisan & Renungan Pendidik
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-stone-900 mt-1">
              Blog Edukasi & Catatan Refleksi
            </h2>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="text-xs font-bold text-amber-800 hover:text-orange-700 inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>Lihat Semua Artikel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, idx) => {
            const cardBg = idx === 0 
              ? 'hover:border-amber-300 hover:bg-amber-50/20' 
              : idx === 1 
              ? 'hover:border-orange-300 hover:bg-orange-50/20' 
              : 'hover:border-teal-300 hover:bg-teal-50/20';
            
            const badgeBg = idx === 0
              ? 'bg-amber-100 text-amber-900'
              : idx === 1
              ? 'bg-orange-100 text-orange-900'
              : 'bg-teal-100 text-teal-900';

            return (
              <article
                key={post.id}
                onClick={() => {
                  onSelectBlogPost(post.id);
                  onNavigate('blog');
                }}
                className={`bg-white border-2 border-stone-100 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all cursor-pointer group ${cardBg}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`font-bold px-2.5 py-0.5 rounded-full ${badgeBg}`}>
                      {post.category}
                    </span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{post.date}</span>
                  <span className="text-amber-700 font-bold group-hover:text-orange-700 group-hover:underline inline-flex items-center gap-1">
                    Baca Selengkapnya
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured Section: Cheerful Artefak & Instrumen Penilaian */}
      <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 border-2 border-amber-200/90 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-orange-800 tracking-wider uppercase">
            Inovasi Perangkat & Evaluasi
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Artefak Pembelajaran & Rubrik Penilaian Autentik
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Menghadirkan kesiapan profesional pendidik: modul ajar terdiferensiasi, LKPD eksploratif, serta simulator rubrik penilaian dengan penghitungan skor terbobot otomatis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border-2 border-amber-200/80 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">4 Dokumen Perangkat</span>
                <span className="font-mono text-orange-700 font-bold">Fase E & F</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                Koleksi Artefak Pembelajaran
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Modul ajar berdiferensiasi bioproses sel, LKPD berbasis masalah sungai lokal, media kinetik sel digital TPACK, dan instrumen asesmen diagnostik.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('artefak')}
                className="text-xs font-bold text-amber-800 hover:text-orange-700 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Buka Detail Artefak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200/80 rounded-2xl p-6 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="font-bold text-orange-800 bg-orange-100 px-2.5 py-0.5 rounded-full">Rubrik & Simulator</span>
                <span className="font-mono text-emerald-700 font-bold">Skor Otomatis</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                Instrumen & Rubrik Penilaian
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Rubrik observasi diskusi kolaboratif sains, penilaian produk karya berdiferensiasi, dan kalkulator simulasi penskoran langsung.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('penilaian')}
                className="text-xs font-bold text-orange-800 hover:text-amber-700 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Buka Rubrik & Kalkulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
