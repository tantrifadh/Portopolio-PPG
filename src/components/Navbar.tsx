import React, { useState } from 'react';
import { SectionId } from '../types/portfolio';
import { Menu, X, FileText } from 'lucide-react';

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

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'artefak', label: 'Artefak' },
    { id: 'penilaian', label: 'Penilaian' },
    { id: 'dokumentasi', label: 'Dokumentasi' },
    { id: 'seminar', label: 'Seminar Kependidikan' },
    { id: 'blog', label: 'Blog' }
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Clean Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleItemClick('beranda')}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-900 text-stone-100 flex items-center justify-center font-serif text-sm font-bold">
                T
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap block font-serif-title">
                  Tantri Fadhillah, S.Pd.
                </span>
                <span className="hidden sm:block text-[11px] text-stone-500 font-sans tracking-wide">
                  Pendidik & Peneliti Pembelajaran
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean Typography Links (No candy colors, subtle active line) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 text-xs xl:text-sm cursor-pointer ${
                    isActive
                      ? 'text-stone-950 font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick PDF Link */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleItemClick('seminar')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-stone-200/60 cursor-pointer"
              title="Akses Tugas PDF Seminar Kependidikan"
            >
              <FileText className="w-3.5 h-3.5 text-stone-600" />
              <span>Tugas PDF</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Kontak
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-white transition-colors cursor-pointer"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-1 shadow-md animate-in fade-in duration-150">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-stone-100 text-stone-950 font-semibold'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'seminar' && (
                  <span className="text-[11px] font-mono text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded">
                    PDF
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
