import React, { useState } from 'react';
import { SectionId } from '../types/portfolio';
import { Menu, X, FileText, Sparkles, BookOpen } from 'lucide-react';

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

  const navItems: { id: SectionId; label: string; color: string }[] = [
    { id: 'beranda', label: 'Beranda', color: 'hover:text-amber-700' },
    { id: 'profil', label: 'Profil', color: 'hover:text-orange-700' },
    { id: 'artefak', label: 'Artefak', color: 'hover:text-emerald-700' },
    { id: 'penilaian', label: 'Penilaian', color: 'hover:text-sky-700' },
    { id: 'dokumentasi', label: 'Dokumentasi', color: 'hover:text-purple-700' },
    { id: 'seminar', label: 'Seminar Kependidikan', color: 'hover:text-teal-700' },
    { id: 'blog', label: 'Blog', color: 'hover:text-rose-700' }
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF5]/95 backdrop-blur-md border-b border-amber-200/60 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Single text element wordmark with cheerful icon */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleItemClick('beranda')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-orange-400 to-rose-400 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors whitespace-nowrap block font-serif-title">
                  Tantri Fadhillah, S.Pd.
                </span>
                <span className="hidden sm:block text-[11px] font-semibold text-amber-700 font-sans tracking-wide">
                  ✨ Portofolio Pendidik & Peneliti
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Single-line, unboxed, subtle hover & cheerful underline) */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-stone-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative py-2 transition-all whitespace-nowrap shrink-0 text-xs xl:text-sm font-medium ${
                    isActive
                      ? 'text-amber-900 font-bold'
                      : `text-stone-600 ${item.color}`
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Cheerful PDF Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => handleItemClick('seminar')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-teal-900 bg-teal-100/80 hover:bg-teal-200 border border-teal-300 rounded-xl transition-all whitespace-nowrap shrink-0 hover:shadow-xs"
              title="Akses Tugas PDF Seminar Kependidikan"
            >
              <FileText className="w-3.5 h-3.5 text-teal-700" />
              <span>Tugas PDF</span>
            </button>

            <button
              onClick={onOpenContactModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 rounded-xl transition-all whitespace-nowrap shrink-0 shadow-sm hover:shadow-md hover:scale-102"
            >
              Hubungi Pendidik
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-amber-800 rounded-xl border border-amber-200 bg-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-amber-200 px-4 py-4 space-y-1.5 shadow-lg animate-in fade-in duration-150">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-amber-100/80 text-amber-950 font-bold border border-amber-300'
                    : 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'seminar' && (
                  <span className="text-[10px] font-mono bg-teal-600 text-white px-2 py-0.5 rounded-full font-bold">
                    PDF Reader
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
