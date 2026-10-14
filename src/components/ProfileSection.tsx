import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Check, 
  ShieldCheck
} from 'lucide-react';
import { EDUCATOR_INFO, profileImage } from '../data/portfolioData';

export const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Header Title */}
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
          Profil Akademik & Pendidik
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Tentang Pendidik
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Rekam jejak akademik formal, dedikasi filosofi pengajaran, serta komitmen terhadap standar kompetensi guru profesional di Indonesia.
        </p>
      </div>

      {/* Profile Bio Split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Photo & Quick Credentials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
            <img
              src={profileImage}
              alt="Tantri Fadhillah, S.Pd."
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="p-5 border-t border-stone-100 space-y-1.5">
              <h3 className="font-serif-title text-lg font-bold text-stone-900">
                {EDUCATOR_INFO.name}
              </h3>
              <p className="text-xs text-stone-600">
                {EDUCATOR_INFO.subRole}
              </p>
              <div className="pt-2 text-xs text-stone-500 space-y-1 font-mono">
                <p>Lokasi: {EDUCATOR_INFO.location}</p>
                <p>Surel: {EDUCATOR_INFO.email}</p>
                <p>Instansi: {EDUCATOR_INFO.institution}</p>
              </div>
            </div>
          </div>

          {/* Sertifikasi List */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-stone-700" />
              Sertifikasi & Lisensi Resmi
            </h4>
            <ul className="space-y-2 text-xs text-stone-600">
              {EDUCATOR_INFO.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Bio & Teaching Philosophy */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Bio Statement */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 space-y-4">
            <h2 className="text-xl font-bold font-serif-title text-stone-900">
              Dedikasi & Paradigma Mengajar
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed text-justify">
              {EDUCATOR_INFO.about}
            </p>
            <p className="text-sm text-stone-700 leading-relaxed text-justify">
              Sebagai lulusan Program Studi Pendidikan Sains dan Program Profesi Guru (PPG) Prajabatan di Universitas Pendidikan Indonesia, saya menempatkan ruang kelas bukan sebagai arena transmisi hafalan satu arah, melainkan laboratorium kehidupan. Melalui pendekatan inkuiri dan diferensiasi materi, setiap murid diberikan ruang untuk bertumbuh sesuai potensi dan cara belajarnya.
            </p>
          </div>

          {/* Filosofi Mengajar Ki Hajar Dewantara */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-stone-400 text-xs font-mono uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Filosofi Pengajaran Indonesia</span>
            </div>
            <h3 className="text-xl font-bold font-serif-title leading-snug text-white">
              "Pendidikan adalah Tempat Persemaian Benih-Benih Kebudayaan"
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
              Mengacu pada amanah Ki Hajar Dewantara, murid bukanlah kertas kosong yang digambari sekehendak guru. Mereka lahir dengan kodrat alam dan garis samar potensinya masing-masing. Tugas seorang pendidik sejati adalah menebalkan garis-garis kebajikan tersebut melalui keteladanan budi pekerti, kesabaran mendampingi, dan pembelajaran yang memerdekakan.
            </p>
            <div className="pt-3 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <strong className="block text-stone-200 font-medium">Ing Ngarsa Sung Tuladha</strong>
                <span className="text-[11px] text-stone-400">Di depan memberi teladan</span>
              </div>
              <div>
                <strong className="block text-stone-200 font-medium">Ing Madya Mangun Karsa</strong>
                <span className="text-[11px] text-stone-400">Di tengah membangun karsa</span>
              </div>
              <div>
                <strong className="block text-stone-200 font-medium">Tut Wuri Handayani</strong>
                <span className="text-[11px] text-stone-400">Di belakang memberi dorongan</span>
              </div>
            </div>
          </div>

          {/* Riwayat Pendidikan Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif-title text-stone-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-stone-700" />
              Riwayat Pendidikan Formal
            </h3>
            <div className="space-y-3">
              {EDUCATOR_INFO.degrees.map((deg, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-5 space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-stone-700 font-medium bg-stone-100 px-2 py-0.5 rounded">
                      {deg.year}
                    </span>
                    <span className="text-xs font-semibold text-stone-800">
                      {deg.grade}
                    </span>
                  </div>
                  <h4 className="text-base font-bold font-serif-title text-stone-900">
                    {deg.degree}
                  </h4>
                  <p className="text-xs text-stone-600">
                    {deg.institution} · {deg.field}
                  </p>
                  <p className="text-xs text-stone-500 pt-1 border-t border-stone-100">
                    {deg.status}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4 Pilar Kompetensi Guru - Clean Editorial Grid */}
      <section className="space-y-6 pt-6 border-t border-stone-200">
        <div>
          <span className="text-xs font-medium text-stone-500 tracking-wider uppercase">
            Standar Guru Profesional
          </span>
          <h2 className="text-2xl font-bold font-serif-title text-stone-900 mt-1">
            Empat Pilar Kompetensi Pendidik
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            Standar kompetensi guru Indonesia yang diintegrasikan secara utuh dalam perencanaan ajar, interaksi kelas, dan refleksi berkala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATOR_INFO.competencies.map((comp, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-xl p-6 space-y-2.5 hover:border-stone-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-stone-500">0{idx + 1}.</span>
                <h3 className="text-base font-bold font-serif-title text-stone-900">
                  {comp.domain}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
