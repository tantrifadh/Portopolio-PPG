import React from 'react';
import { SectionId } from '../types/portfolio';
import { Mail, Phone, MapPin, GraduationCap, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { EDUCATOR_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-amber-950/80 to-stone-900 text-stone-300 border-t-2 border-amber-500/40 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-900/60">
          
          {/* Col 1: Identity & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-400 text-stone-950 flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-serif-title text-xl font-bold text-white tracking-wide">
                {EDUCATOR_INFO.name}
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed font-medium">
              {EDUCATOR_INFO.subRole} · {EDUCATOR_INFO.institution}
            </p>
            <blockquote className="text-xs text-amber-200/90 italic border-l-2 border-amber-400 pl-3 py-1 bg-amber-950/30 rounded-r-lg">
              "Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani."
              <br />
              <span className="text-[11px] text-amber-400 font-sans not-italic font-bold">
                — Ki Hajar Dewantara, Bapak Pendidikan Nasional
              </span>
            </blockquote>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigasi Portofolio
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profil')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Profil & Riwayat Akademik
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artefak')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Artefak Perangkat Ajar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('penilaian')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Instrumen & Rubrik Penilaian
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dokumentasi')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Dokumentasi Pembelajaran
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seminar')} className="hover:text-amber-300 transition-colors cursor-pointer text-amber-300 font-bold">
                  Seminar Kependidikan (PDF Tasks)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Blog & Esai Refleksi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Kontak & Kolaborasi
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{EDUCATOR_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{EDUCATOR_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{EDUCATOR_INFO.location}</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-400 pt-2 font-medium">
              Terbuka untuk kolaborasi riset tindakan kelas, lokakarya pembelajaran berdiferensiasi, dan telaah kurikulum.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-medium">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {EDUCATOR_INFO.name}.</span>
            <span className="text-amber-400">Dibuat dengan cinta untuk kemajuan pendidikan Indonesia.</span>
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors text-xs font-bold cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
