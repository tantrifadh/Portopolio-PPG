import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Check, 
  X
} from 'lucide-react';
import { ArtifactItem } from '../types/portfolio';
import { ARTIFACTS_LIST, artifactsImage } from '../data/portfolioData';

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
        <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
          Perangkat Ajar & Desain Pembelajaran
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Artefak Pembelajaran
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Kumpulan perangkat ajar Kurikulum Merdeka yang dikembangkan secara bertahap: modul ajar berdiferensiasi, lembar kerja peserta didik kontekstual, hingga media pembelajaran digital berbasis TPACK.
        </p>
      </div>

      {/* Overview Feature Card */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="md:col-span-5 h-60 md:h-full min-h-[220px]">
          <img
            src={artifactsImage}
            alt="Perangkat ajar dan modul kurikulum"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 space-y-3">
          <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
            Desain Instruksional ADDIE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 leading-snug">
            Pengembangan Perangkat Ajar Teruji Lapangan
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Setiap dokumen dirancang dengan memetakan kebutuhan belajar siswa (kesiapan kognitif dan gaya belajar), serta menyediakan jalur diferensiasi konten, proses, dan produk yang aplikatif.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-100 font-mono">
            <span>Kurikulum Merdeka</span>
            <span aria-hidden="true">·</span>
            <span>Uji Coba Kelas Nyata</span>
            <span aria-hidden="true">·</span>
            <span>Telaah Guru Pamong</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg w-fit max-w-full overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
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
            className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between hover:border-stone-300 transition-colors space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                <span className="font-medium text-stone-800">
                  {artifact.type}
                </span>
                <div className="flex items-center gap-2">
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
                <p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide mb-1.5">
                  Capaian Pembelajaran:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {artifact.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400 font-mono text-[11px] shrink-0">0{idx + 1}.</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => setActiveArtifactModal(artifact)}
                className="inline-flex items-center gap-1.5 text-stone-800 hover:text-stone-950 font-medium cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-stone-500" />
                <span>Pratinjau Dokumen</span>
              </button>

              <button
                onClick={() => handleDownloadArtifact(artifact)}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-medium transition-colors border border-stone-200/60 cursor-pointer"
                title="Unduh ringkasan dokumen perangkat"
              >
                <Download className="w-3.5 h-3.5 text-stone-600" />
                <span>Unduh ({artifact.fileSize})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Artifact Preview Modal */}
      {activeArtifactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-xl p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setActiveArtifactModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="text-xs text-stone-500 font-mono">
                {activeArtifactModal.type} · {activeArtifactModal.curriculum}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 leading-snug">
                {activeArtifactModal.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-stone-500 pt-1">
                <span>Sasaran: {activeArtifactModal.gradeLevel}</span>
                <span aria-hidden="true">·</span>
                <span>Jumlah: {activeArtifactModal.pages} Halaman</span>
                <span aria-hidden="true">·</span>
                <span>Ukuran: {activeArtifactModal.fileSize}</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-1.5">
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider">
                  Cuplikan Skenario / Lembar Kerja:
                </h4>
                <p className="italic text-stone-600 leading-relaxed font-sans">
                  "{activeArtifactModal.previewSnippet}"
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-2">
                  Target Capaian Pembelajaran:
                </h4>
                <ul className="space-y-1.5">
                  {activeArtifactModal.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-700">
                      <Check className="w-3.5 h-3.5 text-stone-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-1">
                  Deskripsi Perancangan:
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {activeArtifactModal.description}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveArtifactModal(null)}
                className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={() => handleDownloadArtifact(activeArtifactModal)}
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Berkas Lengkap</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
