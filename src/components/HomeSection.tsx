import React from 'react';
import { SectionId } from '../types/portfolio';
import { 
  FileText, 
  ArrowRight, 
  BookOpen, 
  GraduationCap,
  ShieldCheck,
  Check
} from 'lucide-react';
import { 
  EDUCATOR_INFO, 
  SEMINAR_TASKS
} from '../data/portfolioData';

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
  onSelectSeminarTask: (taskId: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onSelectSeminarTask
}) => {
  return (
    <div className="space-y-24">
      
      {/* Hero Section: Editorial Elegance Without Photo */}
      <section className="pt-4 sm:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Tipografi Elegan & Refleksi Pendidik */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500">
              <span>Portofolio Akademik</span>
              <span aria-hidden="true">/</span>
              <span>Praktik Pengajaran</span>
              <span aria-hidden="true">/</span>
              <span>Kurikulum Merdeka</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold font-serif-title text-stone-900 leading-[1.2] text-balance">
              Menuntun kodrat anak melalui pembelajaran sains yang bermakna dan berakar pada kehidupan.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-sans">
              Saya adalah seorang pendidik sains dan alumni PPG Prajabatan Universitas Pendidikan Indonesia. Di ruang kelas, saya berikhtiar menerjemahkan filosofi Ki Hajar Dewantara melalui pembelajaran berdiferensiasi—menghargai keunikan cara belajar murid, menghadirkan penyelidikan kontekstual, dan mengintegrasikan teknologi secara etis.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer group shadow-2xs"
              >
                <FileText className="w-4 h-4 text-stone-300" />
                <span>Buka Tugas Seminar (PDF Viewer)</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('profil')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-medium text-stone-800 bg-white hover:bg-stone-50 rounded-lg transition-colors border border-stone-300 shadow-2xs cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-stone-600" />
                <span>Profil & Filosofi Mengajar</span>
              </button>
            </div>

            {/* Unboxed editorial proof strip */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 font-mono">
              <span>Pendidikan Profesi Guru (UPI)</span>
              <span aria-hidden="true">·</span>
              <span>Sertifikat Pendidik Kemendikbudristek</span>
              <span aria-hidden="true">·</span>
              <span>Praktik Mengajar SMA Negeri Bandung</span>
            </div>
          </div>

          {/* Kolom Kanan: Kotak Identitas Akademik Elegan (Tanpa Foto) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
              <div className="border-b border-stone-100 pb-5 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 block mb-1">
                    Identitas Akademik
                  </span>
                  <h3 className="font-serif-title text-2xl font-bold text-stone-900">
                    {EDUCATOR_INFO.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {EDUCATOR_INFO.subRole}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold shrink-0">
                  TF
                </div>
              </div>

              <div className="space-y-4 text-xs text-stone-600">
                <div>
                  <strong className="block text-stone-900 font-semibold mb-1">Instansi & Almamater:</strong>
                  <span className="leading-relaxed block">{EDUCATOR_INFO.institution}</span>
                </div>
                <div>
                  <strong className="block text-stone-900 font-semibold mb-1">Fokus Pedagogis:</strong>
                  <span className="leading-relaxed block">Pembelajaran Berdiferensiasi, Asesmen Autentik, dan Model Inkuiri Terbimbing</span>
                </div>
                <div>
                  <strong className="block text-stone-900 font-semibold mb-1">Motto Edukasi:</strong>
                  <p className="italic text-stone-700 font-serif leading-relaxed">"{EDUCATOR_INFO.motto}"</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">Status Sertifikasi:</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-stone-900 bg-stone-100 px-2.5 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
                  Pendidik Terlisensi Resmi
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Editorial Metric Row */}
        <div className="mt-20 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              5 Naskah
            </p>
            <p className="text-xs text-stone-600 mt-1 font-medium">
              Tugas Seminar Kependidikan
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Tersedia Penampil PDF Zoom In/Out
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              4 Artefak
            </p>
            <p className="text-xs text-stone-600 mt-1 font-medium">
              Modul Ajar, LKPD & Media
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Berbasis Kurikulum Merdeka
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              3 Siklus
            </p>
            <p className="text-xs text-stone-600 mt-1 font-medium">
              Praktik Pengalaman Lapangan
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Tindakan Kelas SMA Negeri
            </p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-serif-title font-bold text-stone-900 tabular-nums">
              IPK 3.94
            </p>
            <p className="text-xs text-stone-600 mt-1 font-medium">
              Kelulusan PPG Prajabatan UPI
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Predikat Dengan Pujian
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section: Seminar Kependidikan with PDF Viewer Feature */}
      <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-12 border border-stone-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs text-stone-400 font-mono tracking-widest uppercase">
              Koleksi Naskah Seminar
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif-title leading-snug text-white">
              Tugas Seminar Kependidikan dengan Penampil PDF Interaktif
            </h2>

            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Seluruh karya ilmiah mata kuliah seminar—artikel hasil tindakan kelas, proposal PTK, kajian literatur, hingga jurnal reflektif—tersedia dalam penampil PDF mandiri. Dilengkapi kontrol perbesaran dokumen (<strong>Zoom In / Zoom Out 50%–250%</strong>), navigasi halaman, pencarian teks, cetak, serta opsi menguji berkas PDF tugas Anda sendiri.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('seminar')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-900 hover:bg-stone-100 text-xs font-semibold rounded-lg transition-colors cursor-pointer group"
              >
                <span>Buka Penampil PDF Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
                <span className="font-mono text-stone-400">PDF Reader Interaktif</span>
              </div>

              <div className="space-y-2">
                {SEMINAR_TASKS.slice(0, 3).map((task) => (
                  <button
                    key={task.id}
                    onClick={() => {
                      onSelectSeminarTask(task.id);
                      onNavigate('seminar');
                    }}
                    className="w-full text-left p-3 rounded-lg bg-stone-900 hover:bg-stone-850 border border-stone-800 transition-colors group cursor-pointer"
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


      {/* Featured Section: Artefak & Asesmen */}
      <section className="border border-stone-200 rounded-2xl p-8 sm:p-10 space-y-6 bg-white shadow-2xs">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
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
          <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-stone-350 transition-colors">
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

          <div className="border border-stone-200 rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-stone-350 transition-colors">
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
