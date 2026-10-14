import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Download, 
  Award
} from 'lucide-react';
import { ASSESSMENT_RUBRICS } from '../data/portfolioData';

export const PenilaianSection: React.FC = () => {
  const [selectedRubricIndex, setSelectedRubricIndex] = useState<number>(0);
  const activeRubric = ASSESSMENT_RUBRICS[selectedRubricIndex];

  // Simulator scores state: map criteria name to selected score (1-4)
  const [simulatedScores, setSimulatedScores] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    activeRubric.criteria.forEach(c => {
      initial[c.name] = 4;
    });
    return initial;
  });

  const handleScoreChange = (criteriaName: string, score: number) => {
    setSimulatedScores(prev => ({
      ...prev,
      [criteriaName]: score
    }));
  };

  // Calculate weighted total (0 - 100)
  const calculateTotal = () => {
    let total = 0;
    activeRubric.criteria.forEach(c => {
      const score = simulatedScores[c.name] || 4;
      total += (score / 4) * c.weight;
    });
    return Math.round(total * 10) / 10;
  };

  const finalScore = calculateTotal();

  const getPredicate = (score: number) => {
    if (score >= 88) return { label: 'Sangat Baik (A)', note: 'Kompetensi tercapai optimal dan melampaui kriteria ketuntasan.' };
    if (score >= 75) return { label: 'Baik (B)', note: 'Kompetensi tercapai sesuai kriteria ketuntasan tujuan pembelajaran.' };
    if (score >= 60) return { label: 'Cukup (C)', note: 'Sebagian kompetensi tercapai; butuh penguatan konsep terarah.' };
    return { label: 'Perlu Bimbingan (D)', note: 'Belum mencapai ketuntasan minimum; memerlukan intervensi remedial.' };
  };

  const predicate = getPredicate(finalScore);

  const handleDownloadRubric = () => {
    let text = `========================================================\n`;
    text += `RUBRIK ASESMEN PEMBELAJARAN\n`;
    text += `========================================================\n\n`;
    text += `JUDUL: ${activeRubric.title}\n`;
    text += `TIPE ASESMEN: ${activeRubric.type}\n`;
    text += `DESKRIPSI: ${activeRubric.description}\n\n`;
    
    activeRubric.criteria.forEach((c, idx) => {
      text += `[ KRITERIA ${idx + 1}: ${c.name} (Bobot: ${c.weight}%) ]\n`;
      c.levels.forEach(lvl => {
        text += `  - Skor ${lvl.score} (${lvl.label}): ${lvl.descriptor}\n`;
      });
      text += `\n`;
    });

    text += `Disusun oleh: Tantri Fadhillah, S.Pd. - Universitas Pendidikan Indonesia\n`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rubrik_${activeRubric.type}_${activeRubric.title.slice(0, 20)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
          Evaluasi Autentik & Rubrik Penilaian
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Instrumen & Rubrik Penilaian
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Menjamin keadilan evaluasi pembelajaran melalui rubrik analitik terstandarisasi untuk asesmen formatif dan sumatif, dilengkapi simulator penskoran interaktif.
        </p>
      </div>

      {/* Switcher segmented control */}
      <div className="flex flex-wrap items-center gap-2">
        {ASSESSMENT_RUBRICS.map((rubric, idx) => (
          <button
            key={rubric.id}
            onClick={() => {
              setSelectedRubricIndex(idx);
              const initial: Record<string, number> = {};
              rubric.criteria.forEach(c => {
                initial[c.name] = 4;
              });
              setSimulatedScores(initial);
            }}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
              selectedRubricIndex === idx
                ? 'bg-stone-900 border-stone-900 text-white'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <span>{rubric.type}: {rubric.title.slice(0, 32)}...</span>
          </button>
        ))}
      </div>

      {/* Main Rubric & Simulator Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Detailed Criteria */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-mono text-stone-500">
                Tipe Asesmen: {activeRubric.type}
              </span>
              <h2 className="text-xl font-bold font-serif-title text-stone-900 mt-1">
                {activeRubric.title}
              </h2>
            </div>

            <button
              onClick={handleDownloadRubric}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded border border-stone-200 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-stone-600" />
              <span>Unduh Rubrik</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {activeRubric.description}
          </p>

          {/* Criteria Cards */}
          <div className="space-y-6">
            {activeRubric.criteria.map((criteria, cIdx) => (
              <div 
                key={cIdx}
                className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-stone-900 text-sm">
                    {cIdx + 1}. {criteria.name}
                  </h3>
                  <span className="text-xs font-mono text-stone-500">
                    Bobot: {criteria.weight}%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {criteria.levels.map((lvl) => {
                    const isSelected = simulatedScores[criteria.name] === lvl.score;
                    return (
                      <button
                        key={lvl.score}
                        onClick={() => handleScoreChange(criteria.name, lvl.score)}
                        className={`text-left p-3 rounded-lg border text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">
                            Skor {lvl.score} — {lvl.label}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                          {lvl.descriptor}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Clean Interactive Grading Simulator Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 border border-stone-800 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-stone-400 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Simulator Penskoran</span>
            </div>

            <div>
              <p className="text-xs text-stone-400">Total Nilai Terbobot (0–100):</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-mono font-bold text-white tabular-nums">
                  {finalScore}
                </span>
                <span className="text-xs text-stone-400 font-mono">/ 100</span>
              </div>
            </div>

            {/* Predicate status */}
            <div className="p-3.5 rounded-lg border border-stone-700 bg-stone-800 text-xs space-y-1">
              <div className="font-semibold text-white">
                Predikat: {predicate.label}
              </div>
              <p className="text-[11px] text-stone-300 leading-relaxed">
                {predicate.note}
              </p>
            </div>

            {/* Criteria breakdown */}
            <div className="space-y-2 pt-2 border-t border-stone-800 text-xs">
              <p className="text-stone-400 font-medium">Rincian Butir Penilaian:</p>
              {activeRubric.criteria.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-stone-300 text-[11px]">
                  <span className="truncate max-w-[170px]">{c.name}</span>
                  <span className="font-mono text-stone-300">
                    {simulatedScores[c.name] || 4}/4 ({c.weight}%)
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-stone-400 pt-2 border-t border-stone-800">
              *Klik opsi skor pada kriteria di samping untuk menguji perhitungan nilai.
            </p>
          </div>

          {/* Profil Pelajar Pancasila Info Box */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-2">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
              Profil Pelajar Pancasila
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Penilaian tidak hanya mengukur capaian kognitif, tetapi juga mengintegrasikan 6 dimensi karakter: Beriman & Bertakwa, Berkebinekaan Global, Bergotong Royong, Mandiri, Bernalar Kritis, dan Kreatif.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
