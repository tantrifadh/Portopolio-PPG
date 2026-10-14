import React from 'react';
import { SectionId } from '../types/portfolio';
import { 
  FileText, 
  ArrowRight, 
  BookOpen, 
  Check, 
  Download
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
    <div className="space-y-24">
      
      {/* Hero Section: Clean Editorial Split */}
      <section className="pt-4 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 tracking-wide uppercase">
              <span>Portofolio Akademik & Praktik Mengajar</span>
              <span aria-hidden="true">/</span>
              <span>Kurikulum Merdeka</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-serif-title text-stone-900 leading-[1.2] text-balance">
              Menuntun kodrat anak melalui pembelajaran sains yang bermakna dan berakar pada kehidupan.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Saya adalah seorang pendidik Biologi dan alumni PPG Prajabatan Universitas Pendidikan Indonesia. Di ruang kelas, saya berikhtiar menerjemahkan filosofi Ki Hajar Dewantara melalui pembelajaran berdiferensiasi—menghargai keunikan cara belajar murid, menghadirkan penyelidikan kontekstual, dan mengintegrasikan teknologi secara etis.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer group"
              >
                <FileText className="w-4 h-4 text-stone-300" />
                <span>Buka Tugas Seminar (PDF Viewer)</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('profil')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 rounded-lg transition-colors border border-stone-200 cursor-pointer"
              >
                <span>Profil & Filosofi Mengajar</span>
              </button>
            </div>

            {/* Unboxed editorial proof strip */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500">
              <span>Pendidikan Profesi Guru (UPI)</span>
              <span aria-hidden="true">·</span>
              <span>Sertifikat Pendidik Kemendikbudristek</span>
              <span aria-hidden="true">·</span>
              <span>Praktik Mengajar SMA Negeri Bandung</span>
            </div>
          </div>

          {/* Right Column: Genuine Photo Frame */}
          <div className="lg:col-span-5">
            <figure className="space-y-3">
              <div className="overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/90 shadow-sm aspect-[4/5] max-w-md mx-auto lg:max-w-none">
                <img
                  src={profileImage}
                  alt="Tantri Fadhillah, S.Pd. di perpustakaan universitas"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="text-xs text-stone-500 leading-relaxed px-1">
                <strong className="text-stone-800 font-medium">Tantri Fadhillah, S.Pd.</strong> — Mengembangkan kajian tindakan kelas dan modul ajar berdiferensiasi di UPI Bandung.
              </figcaption>
            </figure>
          </div>

        </div>

        {/* 4-Column Editorial Metric Row */}
        <div className="mt-20 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              5 Naskah
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Tugas Seminar Kependidikan (PDF Lengkap)
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              4 Artefak
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Modul Ajar, LKPD & Media TPACK
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              3 Siklus
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Praktik Pengalaman Lapangan (PPL)
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              IPK 3.94
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Predikat Kelulusan PPG Prajabatan UPI
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section: Seminar Kependidikan with PDF Viewer Feature */}
      <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-12 border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs text-stone-400 font-mono tracking-wider uppercase">
              Koleksi Tugas Akademik
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title leading-snug text-white">
              Tugas Seminar Kependidikan dengan Penampil PDF Interaktif
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed">
              Seluruh karya ilmiah mata kuliah seminar—artikel hasil tindakan kelas, proposal PTK, kajian literatur, hingga jurnal reflektif—tersedia dalam penampil PDF mandiri. Dilengkapi kontrol perbesaran dokumen (zoom in/out 50%–250%), navigasi halaman, pencarian teks, cetak, serta opsi mengunggah berkas PDF tugas Anda sendiri.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-900 hover:bg-stone-100 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Buka Penampil PDF Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-stone-400">
                5 naskah terverifikasi dosen pengampu
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-2">
                <span>Daftar Naskah Seminar</span>
                <span className="font-mono text-stone-400">Terbuka untuk Ditelaah</span>
              </div>

              <div className="space-y-2">
                {SEMINAR_TASKS.slice(0, 3).map((task) => (
                  <button
                    key={task.id}
                    onClick={() => {
                      onSelectSeminarTask(task.id);
                      onNavigate('seminar');
                    }}
                    className="w-full text-left p-3 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800/80 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] text-stone-400 mb-1">
                      <span className="font-mono text-stone-300">{task.code}</span>
                      <span>{task.pagesCount} Hlm</span>
                    </div>
                    <p className="text-xs font-medium text-stone-200 line-clamp-1 group-hover:text-white transition-colors">
                      {task.title}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-1 text-center">
                <button
                  onClick={() => onNavigate('seminar')}
                  className="text-xs text-stone-300 hover:text-white font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Lihat semua naskah di penampil dokumen</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Section: Blog Edukasi */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-medium text-stone-500 tracking-wider uppercase">
              Catatan & Refleksi Guru
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-stone-900 mt-1">
              Blog & Esai Pembelajaran
            </h2>
          </div>
          <button
            onClick={() => onNavigate('blog')}
            className="text-xs font-medium text-stone-700 hover:text-stone-950 inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                onSelectBlogPost(post.id);
                onNavigate('blog');
              }}
              className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-stone-300 hover:shadow-xs transition-all cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-stone-700 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>{post.date}</span>
                <span className="font-medium text-stone-900 group-hover:underline inline-flex items-center gap-1">
                  Baca
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Section: Artefak & Asesmen (Clean, Human, No AI Slop) */}
      <section className="border border-stone-200 rounded-2xl p-8 sm:p-10 space-y-6 bg-white">
        <div className="max-w-2xl">
          <span className="text-xs font-medium text-stone-500 tracking-wider uppercase">
            Perangkat Kurikulum
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Artefak Ajar & Rubrik Penilaian Autentik
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Menampilkan modul ajar berdiferensiasi yang telah diuji coba di sekolah mitra, lembar kerja peserta didik kontekstual, dan instrumen evaluasi proses belajar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span>Modul & Lembar Kerja</span>
                <span className="font-mono text-stone-600">Fase E & F SMA</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                Koleksi Artefak Pembelajaran
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Modul struktur sel berbasis inkuiri, LKPD interaktif ekosistem sungai, media visual mitosis, dan kuesioner asesmen diagnostik gaya belajar.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('artefak')}
                className="text-xs font-medium text-stone-900 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Buka Detail Artefak</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span>Evaluasi Autentik</span>
                <span className="font-mono text-stone-600">Formatif & Sumatif</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900 mb-1">
                Instrumen & Rubrik Penilaian
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Panduan observasi diskusi saintifik, rubrik produk akhir terdiferensiasi, serta kalkulator simulasi penskoran langsung untuk guru.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100">
              <button
                onClick={() => onNavigate('penilaian')}
                className="text-xs font-medium text-stone-900 hover:underline inline-flex items-center gap-1 cursor-pointer"
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
