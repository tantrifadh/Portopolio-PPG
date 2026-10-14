import React, { useState } from 'react';
import { 
  FileText, 
  Layers, 
  Download, 
  ExternalLink, 
  Eye, 
  CheckCircle, 
  BookOpen, 
  FolderDown,
  Sparkles,
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
      <div className="border-b border-amber-200 pb-6">
        <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Perangkat Ajar & Inovasi Media
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Artefak Pembelajaran
        </h1>
        <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
          Kumpulan perangkat ajar kurikulum merdeka: mulai dari modul ajar berdiferensiasi, lembar kerja siswa (LKPD) berbasis masalah, hingga media interaktif digital terintegrasi TPACK.
        </p>
      </div>

      {/* Featured Banner with Cheerful Border */}
      <div className="bg-white border-2 border-amber-200 rounded-3xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="md:col-span-5 h-64 md:h-full min-h-[240px]">
          <img
            src={artifactsImage}
            alt="Perangkat ajar dan modul kurikulum"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-7 p-7 sm:p-9 space-y-3 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/30">
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full shadow-2xs">
            ✨ Desain Instruksional ADDIE Model
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 leading-snug">
            Standar Perancangan Modul Ajar Berdiferensiasi
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Setiap artefak disusun dengan mempertimbangkan profil modalitas belajar siswa (visual, auditori, kinestetik), pemetaan kesiapan belajar kognitif, serta asesmen autentik yang adil.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-700 pt-2 border-t border-amber-200/80">
            <span className="flex items-center gap-1 text-emerald-700 font-bold">✓ Kurikulum Merdeka</span>
            <span className="flex items-center gap-1 text-orange-700 font-bold">✓ Berpusat pada Murid</span>
            <span className="flex items-center gap-1 text-teal-700 font-bold">✓ Validasi Guru Pamong</span>
          </div>
        </div>
      </div>

      {/* Interactive Cheerful Category Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              filterType === cat
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm scale-102'
                : 'bg-white text-stone-700 border-2 border-stone-200 hover:border-amber-300 hover:bg-amber-50'
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
            className="bg-white border-2 border-stone-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-0.5 rounded-full">
                  {artifact.type}
                </span>
                <div className="flex items-center gap-2 text-stone-500 font-medium">
                  <span>{artifact.gradeLevel}</span>
                  <span aria-hidden="true" className="text-stone-300">·</span>
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
                <p className="text-[11px] font-bold text-stone-600 uppercase tracking-wide mb-1.5">
                  Capaian Pembelajaran:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {artifact.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                className="inline-flex items-center gap-1.5 text-amber-800 hover:text-orange-700 font-bold transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Pratinjau Dokumen</span>
              </button>

              <button
                onClick={() => handleDownloadArtifact(artifact)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-950 rounded-xl font-bold transition-colors border border-amber-200 cursor-pointer"
                title="Unduh ringkasan dokumen perangkat"
              >
                <Download className="w-3.5 h-3.5 text-amber-700" />
                <span>Unduh ({artifact.fileSize})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Artifact Preview Modal */}
      {activeArtifactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-amber-300 shadow-2xl p-6 sm:p-8 space-y-6 relative">
            <button
              onClick={() => setActiveArtifactModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                {activeArtifactModal.type} · {activeArtifactModal.curriculum}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 leading-snug">
                {activeArtifactModal.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-stone-500 pt-1 font-medium">
                <span>Sasaran: {activeArtifactModal.gradeLevel}</span>
                <span aria-hidden="true">·</span>
                <span>Jumlah: {activeArtifactModal.pages} Halaman</span>
                <span aria-hidden="true">·</span>
                <span>Ukuran: {activeArtifactModal.fileSize}</span>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-5 space-y-2">
                <h4 className="font-bold text-amber-950 text-xs uppercase tracking-wider">
                  Cuplikan Lembar Kerja / Skenario:
                </h4>
                <p className="italic text-stone-700 leading-relaxed font-sans">
                  "{activeArtifactModal.previewSnippet}"
                </p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-2">
                  Target Capaian & Karakter Pelajar Pancasila:
                </h4>
                <ul className="space-y-2">
                  {activeArtifactModal.competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-stone-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-1">
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
                className="px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={() => handleDownloadArtifact(activeArtifactModal)}
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
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
