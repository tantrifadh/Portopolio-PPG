import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  HeartHandshake, 
  ShieldCheck, 
  Lightbulb,
  FileCheck,
  Sparkles,
  Heart
} from 'lucide-react';
import { EDUCATOR_INFO, profileImage } from '../data/portfolioData';

export const ProfileSection: React.FC = () => {
  const competencyColors = [
    { bg: 'bg-amber-50', border: 'border-amber-300', iconBg: 'bg-amber-400 text-stone-950', badge: 'bg-amber-100 text-amber-900' },
    { bg: 'bg-orange-50', border: 'border-orange-300', iconBg: 'bg-orange-400 text-white', badge: 'bg-orange-100 text-orange-900' },
    { bg: 'bg-teal-50', border: 'border-teal-300', iconBg: 'bg-teal-500 text-white', badge: 'bg-teal-100 text-teal-900' },
    { bg: 'bg-purple-50', border: 'border-purple-300', iconBg: 'bg-purple-500 text-white', badge: 'bg-purple-100 text-purple-900' },
  ];

  return (
    <div className="space-y-16">
      
      {/* Header Title with Cheerful Tag */}
      <div className="border-b border-amber-200 pb-6">
        <span className="text-xs font-bold text-orange-800 bg-orange-100/90 border border-orange-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          Profil Akademik & Guru Profesional
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Tentang Pendidik
        </h1>
        <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
          Mengenal rekam jejak akademik, dedikasi filosofi pengajaran, serta komitmen profesionalisme keguruan dalam memajukan kualitas pembelajaran Indonesia.
        </p>
      </div>

      {/* Profile Bio Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Photo & Quick Credentials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl overflow-hidden border-2 border-amber-200 shadow-md bg-white">
            <img
              src={profileImage}
              alt="Tantri Fadhillah, S.Pd."
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-6 border-t-2 border-amber-100 bg-amber-50/40 space-y-2">
              <h3 className="font-serif-title text-xl font-bold text-stone-900">
                {EDUCATOR_INFO.name}
              </h3>
              <p className="text-xs font-semibold text-orange-700">
                {EDUCATOR_INFO.subRole}
              </p>
              <div className="pt-2 text-xs text-stone-600 space-y-1.5 font-medium">
                <p>📍 {EDUCATOR_INFO.location}</p>
                <p>✉️ {EDUCATOR_INFO.email}</p>
                <p>🏛️ {EDUCATOR_INFO.institution}</p>
              </div>
            </div>
          </div>

          {/* Sertifikasi List */}
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 space-y-3 shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Sertifikasi & Lisensi Resmi
            </h4>
            <ul className="space-y-2 text-xs text-stone-700">
              {EDUCATOR_INFO.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Bio & Teaching Philosophy */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Bio Statement */}
          <div className="bg-white border-2 border-stone-200/90 rounded-2xl p-7 space-y-4 shadow-xs">
            <h2 className="text-xl font-bold font-serif-title text-stone-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />
              <span>Biografi & Dedikasi Pedagogis</span>
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed text-justify">
              {EDUCATOR_INFO.about}
            </p>
            <p className="text-sm text-stone-700 leading-relaxed text-justify">
              Sebagai lulusan Program Studi Pendidikan Sains dan Program Profesi Guru (PPG) Prajabatan di Universitas Pendidikan Indonesia, saya meyakini bahwa peran guru di era modern adalah menjadi fasilitator rasa ingin tahu anak. Melalui pendekatan saintifik kontekstual dan integrasi teknologi TPACK, setiap ruang kelas dapat ditransformasikan menjadi laboratorium kehidupan yang penuh kegembiraan dan bermakna.
            </p>
          </div>

          {/* Filosofi Mengajar Ki Hajar Dewantara with Warm Sunset Aura */}
          <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700 text-white rounded-3xl p-7 sm:p-9 space-y-5 shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-2 text-amber-200 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Filosofi Pengajaran Indonesia</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-title leading-snug">
              "Pendidikan adalah Tempat Persemaian Benih-Benih Kebudayaan"
            </h3>
            <p className="text-xs sm:text-sm text-amber-50 leading-relaxed text-justify">
              Mengacu pada amanah Ki Hajar Dewantara, anak bukanlah selembar kertas kosong yang dapat digambari semaunya oleh pendidik. Anak lahir dengan kodrat alam dan garis-garis samar potensinya masing-masing. Tugas seorang guru sejati adalah menebalkan garis-garis kebaikan tersebut dengan ketulusan hati, kesabaran menuntun, dan keteladanan budi pekerti.
            </p>
            <div className="pt-3 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-2xs">
                <strong className="block text-amber-300 font-bold">Ing Ngarsa Sung Tuladha</strong>
                <span className="text-[11px] text-amber-100">Di depan memberi teladan nyata</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-2xs">
                <strong className="block text-amber-300 font-bold">Ing Madya Mangun Karsa</strong>
                <span className="text-[11px] text-amber-100">Di tengah membangun semangat</span>
              </div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-2xs">
                <strong className="block text-amber-300 font-bold">Tut Wuri Handayani</strong>
                <span className="text-[11px] text-amber-100">Di belakang memberi dorongan</span>
              </div>
            </div>
          </div>

          {/* Riwayat Pendidikan Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-700" />
              Riwayat Pendidikan Formal
            </h3>
            <div className="space-y-4">
              {EDUCATOR_INFO.degrees.map((deg, idx) => (
                <div 
                  key={idx}
                  className="bg-white border-2 border-stone-200/90 rounded-2xl p-6 space-y-2 hover:border-amber-300 transition-colors shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-amber-950 font-bold bg-amber-100 border border-amber-300 px-3 py-0.5 rounded-full">
                      {deg.year}
                    </span>
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                      {deg.grade}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif-title text-stone-900">
                    {deg.degree}
                  </h4>
                  <p className="text-xs text-stone-600 font-medium">
                    {deg.institution} · {deg.field}
                  </p>
                  <p className="text-xs text-stone-500 pt-2 border-t border-stone-100 italic">
                    {deg.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pilar Kompetensi Guru with Cheerful Colorful Cards */}
      <section className="space-y-6 pt-6 border-t-2 border-amber-200">
        <div>
          <span className="text-xs font-bold text-amber-800 tracking-wider uppercase">
            Standar Guru Profesional
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Empat Pilar Kompetensi Pendidik
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Manifestasi standar kompetensi guru Indonesia yang diintegrasikan dalam seluruh aktivitas mengajar dan bermasyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATOR_INFO.competencies.map((comp, idx) => {
            const style = competencyColors[idx];
            return (
              <div
                key={idx}
                className={`${style.bg} border-2 ${style.border} rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${style.iconBg} flex items-center justify-center font-bold text-sm shadow-xs`}>
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold font-serif-title text-stone-900">
                    {comp.domain}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed text-justify">
                  {comp.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
