import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Check, 
  X
} from 'lucide-react';
import { ArtifactItem } from '../types/portfolio';
import { ARTIFACTS_LIST } from '../data/portfolioData';

export const ArtefakSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('Semua');
  const [activeArtifactModal, setActiveArtifactModal] = useState<ArtifactItem | null>(null);

  const categories = ['Semua', 'Modul Ajar', 'LKPD', 'Media Digital', 'Asesmen'];

  const filteredArtifacts = filterType === 'Semua' 
    ? ARTIFACTS_LIST 
    : ARTIFACTS_LIST.filter(a => a.type === filterType);

  const handleDownloadArtifact = (artifact: ArtifactItem) => {
    const textContent = `========================================================\n`
      + `ARTEFAK PERANGKAT PEMBELAJARAN\n`
      + `========================================================\n\n`
      + `JUDUL: ${artifact.title}\n`
      + `TIPE: ${artifact.type}\n`
      + `KURIKULUM: ${artifact.curriculum}\n`
      + `FASE/KELAS: ${artifact.gradeLevel}\n`
      + `MATA PELAJARAN: ${artifact.subject}\n`
      + `UKURAN FILE: ${artifact.fileSize} (${artifact.pages} Halaman)\n\n`
      + `DESKRIPSI LENGKAP:\n${artifact.description}\n\n`
      + `CAPAIAN PEMBELAJARAN / KOMPETENSI:\n`
      + artifact.competencies.map((c, i) => `${i + 1}. ${c}`).join('\n') + `\n\n`
      + `CUPLIKAN PERANGKAT AJAR:\n${artifact.previewSnippet}\n\n`
      + `PENYUSUN: Tantri Fadhillah, S.Pd. - Universitas Pendidikan Indonesia\n`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Artefak_${artifact.type}_${artifact.title.slice(0, 25)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
          Perangkat Ajar & Desain Pembelajaran
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Artefak Pembelajaran
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Kumpulan perangkat ajar Kurikulum Merdeka yang dikembangkan secara bertahap: modul ajar berdiferensiasi, lembar kerja peserta didik kontekstual, hingga media pembelajaran digital berbasis TPACK.
        </p>
      </div>

      {/* Overview Feature Card (Tanpa Foto) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-2xs">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
          Desain Instruksional ADDIE
        </span>
        <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 leading-snug">
          Pengembangan Perangkat Ajar Teruji Lapangan
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
          Setiap dokumen dirancang dengan memetakan kebutuhan belajar siswa (kesiapan kognitif dan profil belajar), serta menyediakan alur diferensiasi konten, proses, dan produk yang aplikatif di ruang kelas.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 pt-2 border-t border-stone-100">
          <span>Kurikulum Merdeka</span>
          <span aria-hidden="true">·</span>
          <span>Uji Coba Kelas Nyata</span>
          <span aria-hidden="true">·</span>
          <span>Telaah Dosen & Guru Pamong</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg w-fit max-w-full overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              filterType === cat
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArtifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="bg-white border border-stone-200 hover:border-stone-350 rounded-xl p-6 flex flex-col justify-between transition-all duration-200 shadow-2xs space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-stone-900 bg-stone-100 px-2.5 py-0.5 rounded">
                  {artifact.type}
                </span>
                <div className="flex items-center gap-2 text-stone-500 font-mono text-[11px]">
                  <span>{artifact.gradeLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{artifact.pages} Hlm</span>
                </div>
              </div>

              <h3 className="text-lg font-bold font-serif-title text-stone-900 leading-snug">
                {artifact.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {artifact.description}
              </p>

              {/* Competencies */}
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide mb-1.5 font-mono">
                  Capaian Pembelajaran:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {artifact.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-800 font-bold shrink-0 mt-0.5 text-xs">
                        ✓
                      </span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setActiveArtifactModal(artifact)}
                className="px-3.5 py-2 bg-stone-50 text-stone-800 hover:bg-stone-100 font-medium rounded-lg transition-colors flex items-center gap-1.5 border border-stone-200 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-stone-600" />
                <span>Lihat Cuplikan</span>
              </button>

              <button
                onClick={() => handleDownloadArtifact(artifact)}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh ({artifact.fileSize})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Artifact Preview Modal */}
      {activeArtifactModal && (
        <div 
          onClick={() => setActiveArtifactModal(null)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-stone-300"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-stone-200 flex items-start justify-between bg-stone-50">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-stone-600 bg-stone-200/80 px-2.5 py-0.5 rounded inline-block">
                  {activeArtifactModal.type} · {activeArtifactModal.gradeLevel}
                </span>
                <h3 className="text-lg font-bold font-serif-title text-stone-900 leading-snug">
                  {activeArtifactModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArtifactModal(null)}
                className="p-1.5 rounded-lg hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-mono whitespace-pre-line bg-stone-50/50">
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs font-sans">
                <strong className="block text-stone-900 text-sm font-serif-title mb-2">
                  Cuplikan Naskah Modul / LKPD:
                </strong>
                <p className="whitespace-pre-line text-stone-700 leading-relaxed text-xs sm:text-sm font-sans">
                  {activeArtifactModal.previewSnippet}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-200 flex items-center justify-between bg-white">
              <span className="text-xs text-stone-500 font-mono">
                Penyusun: Tantri Fadhillah, S.Pd.
              </span>
              <button
                onClick={() => {
                  handleDownloadArtifact(activeArtifactModal);
                  setActiveArtifactModal(null);
                }}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg text-xs flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Lengkap (.txt)</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
