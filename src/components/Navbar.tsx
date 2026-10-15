import React, { useState } from 'react';
import { SectionId } from '../types/portfolio';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionId; label: string; badge?: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'artefak', label: 'Artefak' },
    { id: 'penilaian', label: 'Penilaian' },
    { id: 'dokumentasi', label: 'Dokumentasi' },
    { id: 'seminar', label: 'Seminar Kependidikan', badge: 'PDF' },
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/90 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Sisi Kiri: Brand Portofolio Elegan & Berkelas */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleItemClick('beranda')}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold shadow-2xs group-hover:bg-stone-800 transition-colors">
                TF
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors whitespace-nowrap block font-serif-title leading-tight">
                  Portofolio
                </span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-stone-500 block font-sans">
                  Tantri Fadhillah, S.Pd.
                </span>
              </div>
            </button>
          </div>

          {/* Sisi Kanan: Seluruh Navbar Item Pindah Rapat ke Kanan Pojok */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto justify-end">
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 text-xs xl:text-sm font-medium cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-stone-900 text-stone-50 font-semibold shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-stone-800 text-stone-200'
                          : 'bg-stone-200/80 text-stone-700'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-300 bg-white transition-colors cursor-pointer"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-1.5 shadow-md animate-in fade-in duration-150">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}

        </div>
      )}
    </header>
  );
};
