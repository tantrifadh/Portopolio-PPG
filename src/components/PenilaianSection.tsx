import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Calculator, 
  HelpCircle, 
  Check, 
  Download, 
  Layers, 
  Sparkles,
  Award,
  AlertCircle
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
    if (score >= 88) return { label: 'Sangat Baik (A)', color: 'bg-emerald-100 text-emerald-950 border-emerald-300', note: 'Kompetensi telah tercapai dengan optimal dan melampaui kriteria ketuntasan.' };
    if (score >= 75) return { label: 'Baik (B)', color: 'bg-sky-100 text-sky-950 border-sky-300', note: 'Kompetensi telah tercapai sesuai kriteria ketuntasan tujuan pembelajaran.' };
    if (score >= 60) return { label: 'Cukup (C)', color: 'bg-amber-100 text-amber-950 border-amber-300', note: 'Sebagian kompetensi tercapai; membutuhkan penguatan konsep terbimbing.' };
    return { label: 'Perlu Bimbingan (D)', color: 'bg-rose-100 text-rose-950 border-rose-300', note: 'Belum mencapai ketuntasan minimum; memerlukan intervensi remedial intensif.' };
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
      <div className="border-b border-amber-200 pb-6">
        <span className="text-xs font-bold text-sky-800 bg-sky-100/90 border border-sky-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Evaluasi Autentik & Rubrik Berkeadilan
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Instrumen & Rubrik Penilaian
        </h1>
        <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
          Menjamin keadilan dan objektivitas evaluasi belajar melalui instrumen asesmen diagnostik, formatif, dan sumatif berstandar Kurikulum Merdeka yang dilengkapi simulator penskoran interaktif.
        </p>
      </div>

      {/* Switcher tabs between rubrics */}
      <div className="flex flex-wrap items-center gap-3">
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
            className={`px-4 py-2.5 text-xs font-bold rounded-2xl border-2 transition-all cursor-pointer ${
              selectedRubricIndex === idx
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 border-amber-500 text-white shadow-sm scale-102'
                : 'bg-white border-stone-200 text-stone-700 hover:border-amber-300 hover:bg-amber-50'
            }`}
          >
            <span className="font-bold underline">{rubric.type}:</span> {rubric.title.slice(0, 36)}...
          </button>
        ))}
      </div>

      {/* Main Rubric & Interactive Simulator Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Detailed Criteria Table */}
        <div className="lg:col-span-8 bg-white border-2 border-stone-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-amber-100 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-amber-950 bg-amber-100 border border-amber-300 px-3 py-0.5 rounded-full">
                Tipe: Asesmen {activeRubric.type}
              </span>
              <h2 className="text-xl font-bold font-serif-title text-stone-900 mt-2">
                {activeRubric.title}
              </h2>
            </div>

            <button
              onClick={handleDownloadRubric}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-stone-700 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors border border-amber-200 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-700" />
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
                className="bg-amber-50/40 border-2 border-amber-200 rounded-2xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-stone-900 text-sm font-serif-title">
                    {cIdx + 1}. {criteria.name}
                  </h3>
                  <span className="text-xs font-mono font-bold text-orange-900 bg-orange-100 border border-orange-300 px-2.5 py-0.5 rounded-full">
                    Bobot: {criteria.weight}%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {criteria.levels.map((lvl) => {
                    const isSelected = simulatedScores[criteria.name] === lvl.score;
                    return (
                      <button
                        key={lvl.score}
                        onClick={() => handleScoreChange(criteria.name, lvl.score)}
                        className={`text-left p-3.5 rounded-xl border-2 text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-600 shadow-sm scale-101'
                            : 'bg-white border-stone-200 text-stone-700 hover:border-amber-300 hover:bg-amber-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold">
                            Skor {lvl.score} - {lvl.label}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <p className={`text-[11px] leading-relaxed ${isSelected ? 'text-amber-50' : 'text-stone-500'}`}>
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

        {/* Right: Cheerful Live Interactive Grading Simulator Card */}
        <div className="lg:col-span-4 sticky top-24 space-y-6">
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white rounded-3xl p-7 border-2 border-amber-300 shadow-xl space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-100 bg-white/20 px-3 py-1 rounded-full w-fit backdrop-blur-xs">
              <Calculator className="w-4 h-4" />
              <span>Simulator Penskoran Autentik</span>
            </div>

            <div>
              <p className="text-xs text-amber-100 font-medium">Total Skor Terbobot (Skala 100):</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl font-mono font-bold text-white tabular-nums drop-shadow-sm">
                  {finalScore}
                </span>
                <span className="text-sm text-amber-200 font-mono">/ 100</span>
              </div>
            </div>

            {/* Predicate status pill */}
            <div className={`p-4 rounded-2xl border-2 text-xs space-y-1 shadow-sm ${predicate.color}`}>
              <div className="font-bold text-xs uppercase tracking-wider">
                Predikat: {predicate.label}
              </div>
              <p className="text-[11px] leading-relaxed font-medium">
                {predicate.note}
              </p>
            </div>

            {/* Criteria breakdown */}
            <div className="space-y-2 pt-2 border-t border-white/20 text-xs">
              <p className="text-amber-100 font-bold">Rincian Butir Penilaian:</p>
              {activeRubric.criteria.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-white/90 text-[11px]">
                  <span className="truncate max-w-[170px]">{c.name}</span>
                  <span className="font-mono font-bold bg-white/20 px-1.5 py-0.5 rounded">
                    Skor {simulatedScores[c.name] || 4}/4
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-amber-100 pt-2 border-t border-white/20 italic">
              *Pilihlah opsi skor pada kartu kriteria di sebelah kiri untuk melihat simulasi perhitungan nilai siswa secara real-time.
            </p>
          </div>

          {/* Profil Pelajar Pancasila Callout with Cheerful Framing */}
          <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Award className="w-4 h-4 text-orange-600" />
              <span>Profil Pelajar Pancasila</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-medium">
              Instrumen ini menginternalisasi 6 dimensi luhur: Beriman & Bertakwa, Berkebinekaan Global, Bergotong Royong, Mandiri, Bernalar Kritis, dan Kreatif.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
