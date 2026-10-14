import React, { useState } from 'react';
import { 
  FileText, 
  ZoomIn, 
  ZoomOut, 
  Upload, 
  ArrowRight
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
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
              Mata Kuliah Inti PPG Prajabatan
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
              Seminar Kependidikan
            </h1>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
              Kumpulan naskah tugas akademik: artikel ilmiah hasil PPL, proposal penelitian tindakan kelas (PTK), jurnal refleksi kritis, dan kajian literatur. Tersedia penampil dokumen dengan fitur perbesar/perkecil tampilan untuk kenyamanan menelaah teks.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Guide Banner - Clean, Non-AI */}
      <div className="bg-stone-100 border border-stone-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center shrink-0 mt-0.5">
            <ZoomIn className="w-5 h-5 text-stone-300" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-stone-900">
              Fitur Pembesar & Pengecil Dokumen (Zoom In / Zoom Out)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Gunakan tombol <strong>Zoom In (+)</strong> dan <strong>Zoom Out (-)</strong> pada toolbar reader untuk mengatur skala baca (50% hingga 250%). Anda juga dapat membalik halaman, mencari kata kunci, mencetak, atau mengunggah berkas PDF mandiri.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 text-xs font-mono bg-white px-3 py-1.5 rounded border border-stone-200 text-stone-700">
          <span>Skala: 50% - 250%</span>
        </div>
      </div>

      {/* Flagship PDF Viewer Component */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-stone-700" />
            <span>Naskah Seminar Aktif</span>
          </h2>
          <span className="text-xs text-stone-500 hidden sm:inline">
            Pilih naskah pada bilah samping viewer untuk mengganti dokumen
          </span>
        </div>

        {/* The PDF Reader with Besar/Kecil Controls */}
        <PdfViewer initialTaskId={activeTaskId} />
      </section>

      {/* Seminar Papers Catalog List */}
      <section className="space-y-6 pt-6 border-t border-stone-200">
        <div>
          <span className="text-xs font-medium text-stone-500 tracking-wider uppercase">
            Katalog Naskah
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Daftar Lengkap Tugas Seminar Kependidikan
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Rangkuman abstrak, dosen pengampu, dan capaian penilaian untuk setiap naskah tugas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {SEMINAR_TASKS.map((task) => {
            const isCurrent = activeTaskId === task.id;
            return (
              <div
                key={task.id}
                className={`bg-white border rounded-xl p-6 transition-all ${
                  isCurrent
                    ? 'border-stone-900 ring-1 ring-stone-900/10 shadow-xs'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                      <span className="font-mono text-stone-800 font-semibold bg-stone-100 px-2.5 py-0.5 rounded">
                        {task.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{task.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{task.pagesCount} Halaman</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-stone-800">{task.grade}</span>
                    </div>

                    <h3 className="text-lg font-bold font-serif-title text-stone-900 leading-snug">
                      {task.title}
                    </h3>

                    <div className="text-xs text-stone-600 flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Mata Kuliah:</strong> {task.course}</span>
                      <span><strong>Dosen Pengampu:</strong> {task.lecturer}</span>
                      <span><strong>Tanggal:</strong> {task.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify pt-1">
                      <strong>Abstrak:</strong> {task.abstractIndo}
                    </p>

                    {/* Keywords */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-stone-600">
                      <span className="font-medium text-stone-800">Kata Kunci:</span>
                      {task.keywords.map((kw, kwIdx) => (
                        <span key={kwIdx} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
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
                      className="w-full md:w-auto px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-stone-600" />
                      <span>Muat ke Penampil PDF</span>
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
