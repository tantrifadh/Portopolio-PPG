import React from 'react';
import { SectionId } from '../types/portfolio';
import { Mail, Phone, MapPin, GraduationCap, ArrowUp } from 'lucide-react';
import { EDUCATOR_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (section: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Identity & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-stone-800 text-stone-200 flex items-center justify-center font-serif font-bold text-xs">
                T
              </div>
              <span className="font-serif-title text-xl font-bold text-white tracking-wide">
                {EDUCATOR_INFO.name}
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              {EDUCATOR_INFO.subRole} · {EDUCATOR_INFO.institution}
            </p>
            <blockquote className="text-xs text-stone-400 italic border-l border-stone-700 pl-3 py-1">
              "Ing ngarsa sung tuladha, ing madya mangun karsa, tut wuri handayani."
              <br />
              <span className="text-[11px] text-stone-500 font-sans not-italic">
                — Ki Hajar Dewantara, Bapak Pendidikan Nasional
              </span>
            </blockquote>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-white transition-colors cursor-pointer">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profil')} className="hover:text-white transition-colors cursor-pointer">
                  Profil & Riwayat Akademik
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artefak')} className="hover:text-white transition-colors cursor-pointer">
                  Artefak Perangkat Ajar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('penilaian')} className="hover:text-white transition-colors cursor-pointer">
                  Instrumen & Rubrik Penilaian
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dokumentasi')} className="hover:text-white transition-colors cursor-pointer">
                  Dokumentasi Pembelajaran
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('seminar')} className="hover:text-white transition-colors cursor-pointer font-medium text-stone-200">
                  Seminar Kependidikan (Tugas PDF)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog & Esai Pembelajaran
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Kontak
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{EDUCATOR_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{EDUCATOR_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{EDUCATOR_INFO.location}</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 pt-1">
              Terbuka untuk kemitraan riset tindakan kelas dan telaah kurikulum sains.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {EDUCATOR_INFO.name}. Portofolio Akademik & Pendidik.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-stone-300 transition-colors text-xs cursor-pointer"
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
