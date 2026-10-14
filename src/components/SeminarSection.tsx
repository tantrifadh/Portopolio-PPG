import React, { useState } from 'react';
import { 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  Upload, 
  BookOpen, 
  CheckCircle, 
  GraduationCap, 
  Layers, 
  Sparkles,
  Download,
  Info,
  Award
} from 'lucide-react';
import { PdfViewer } from './PdfViewer';
import { SEMINAR_TASKS } from '../data/portfolioData';

interface SeminarSectionProps {
  selectedTaskId?: string;
  onSelectTask?: (id: string) => void;
}

export const SeminarSection: React.FC<SeminarSectionProps> = ({
  selectedTaskId
}) => {
  const [activeTaskId, setActiveTaskId] = useState<string>(selectedTaskId || SEMINAR_TASKS[0].id);

  return (
    <div className="space-y-12">
      
      {/* Header with Cheerful Badge */}
      <div className="border-b border-amber-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal-800 bg-teal-100/90 border border-teal-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Mata Kuliah Inti PPG Prajabatan
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
              Seminar Kependidikan
            </h1>
            <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
              Kumpulan tugas-tugas akademik seminar kependidikan: artikel ilmiah hasil PPL, proposal penelitian tindakan kelas (PTK), jurnal refleksi kritis, dan kajian literatur kurikulum merdeka. Tersedia penampil PDF interaktif dengan fitur perbesar/perkecil tampilan untuk kenyamanan membaca Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Cheerful Feature Guide Banner */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 border-2 border-amber-300 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
              <span>Fitur Penampil PDF Interaktif: Besar / Kecilin Tampilan</span>
              <span className="text-xs bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                50% - 250%
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              Gunakan tombol <strong>Zoom In (+)</strong> dan <strong>Zoom Out (-)</strong> pada toolbar untuk memperbesar dan memperkecil lembar dokumen. Anda juga dapat memilih skala cepat, mencari kata kunci, memutar halaman, mencetak naskah, atau mengunggah berkas tugas PDF Anda sendiri!
            </p>
          </div>
        </div>
      </div>

      {/* Flagship PDF Viewer Component */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-700" />
            <span>Dokumen PDF Seminar Aktif</span>
          </h2>
          <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full hidden sm:inline">
            ✨ Klik tab dokumen di viewer untuk mengganti naskah
          </span>
        </div>

        {/* The PDF Reader with Besar/Kecil Controls */}
        <PdfViewer initialTaskId={activeTaskId} />
      </section>

      {/* Seminar Papers Catalog List with Cheerful Cards */}
      <section className="space-y-6 pt-6 border-t-2 border-amber-200">
        <div>
          <span className="text-xs font-bold text-orange-800 tracking-wider uppercase">
            Katalog Naskah
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Daftar Lengkap Tugas Seminar Kependidikan
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Rangkuman abstrak, dosen pengampu, dan nilai kelulusan untuk setiap naskah tugas seminar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {SEMINAR_TASKS.map((task) => {
            const isCurrent = activeTaskId === task.id;
            return (
              <div
                key={task.id}
                className={`bg-white border-2 rounded-2xl p-6 transition-all ${
                  isCurrent
                    ? 'border-amber-400 bg-amber-50/20 ring-2 ring-amber-300/60 shadow-md'
                    : 'border-stone-200/90 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono text-amber-900 font-bold bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-200">
                        {task.code}
                      </span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="font-semibold text-stone-700">{task.category}</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="text-stone-500">{task.pagesCount} Halaman</span>
                      <span aria-hidden="true" className="text-stone-300">·</span>
                      <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                        {task.grade}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif-title text-stone-900 leading-snug">
                      {task.title}
                    </h3>

                    <div className="text-xs text-stone-600 flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Mata Kuliah:</strong> {task.course}</span>
                      <span><strong>Dosen Pengampu:</strong> {task.lecturer}</span>
                      <span><strong>Tanggal:</strong> {task.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify pt-1">
                      <strong>Abstrak:</strong> {task.abstractIndo}
                    </p>

                    {/* Keywords with cheerful styling */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-600">
                      <span className="font-bold text-stone-800">Kata Kunci:</span>
                      {task.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="bg-amber-50 border border-amber-200 text-amber-950 font-medium px-2 py-0.5 rounded-md">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="shrink-0 pt-2 md:pt-0">
                    <button
                      onClick={() => {
                        setActiveTaskId(task.id);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      className="w-full md:w-auto px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-102 cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Muat ke Pembaca PDF</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
