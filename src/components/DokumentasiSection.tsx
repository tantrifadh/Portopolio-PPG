import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Calendar, 
  Users, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Sparkles
} from 'lucide-react';
import { DocumentationPhoto } from '../types/portfolio';
import { DOCUMENTATION_PHOTOS } from '../data/portfolioData';

export const DokumentasiSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState<number>(100);

  const categories = ['Semua', 'Praktik Mengajar', 'Seminar & Workshop', 'Kolaborasi'];

  const filteredPhotos = activeCategory === 'Semua'
    ? DOCUMENTATION_PHOTOS
    : DOCUMENTATION_PHOTOS.filter(p => p.category === activeCategory);

  const openLightbox = (photoId: string) => {
    const idx = DOCUMENTATION_PHOTOS.findIndex(p => p.id === photoId);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
      setLightboxZoom(100);
    }
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
    setLightboxZoom(100);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + DOCUMENTATION_PHOTOS.length) % DOCUMENTATION_PHOTOS.length);
      setLightboxZoom(100);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % DOCUMENTATION_PHOTOS.length);
      setLightboxZoom(100);
    }
  };

  const currentPhoto = selectedPhotoIndex !== null ? DOCUMENTATION_PHOTOS[selectedPhotoIndex] : null;

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div className="border-b border-amber-200 pb-6">
        <span className="text-xs font-bold text-purple-800 bg-purple-100/90 border border-purple-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          Galeri Pembelajaran & Rekam Jejak
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Dokumentasi Pembelajaran
        </h1>
        <p className="text-sm sm:text-base text-stone-700 mt-2 max-w-3xl leading-relaxed">
          Bukti autentik dinamika ruang kelas yang menyenangkan, interaksi bimbingan peserta didik, presentasi riset seminar ilmiah, dan kolaborasi bersama rekan guru pamong.
        </p>
      </div>

      {/* Cheerful Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm scale-102'
                : 'bg-white text-stone-700 border-2 border-stone-200 hover:border-amber-300 hover:bg-amber-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(photo.id)}
            className="group bg-white border-2 border-stone-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Image Container with Joyful Badge */}
            <div className="relative aspect-[16/10] overflow-hidden bg-amber-50">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-stone-900 text-xs font-bold rounded-full shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                  Perbesar Foto
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-white/95 text-stone-900 border border-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                {photo.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {photo.caption}
                </p>
              </div>

              {/* Metadata */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>{photo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    {photo.date}
                  </span>
                  {photo.attendeesCount && (
                    <span className="flex items-center gap-1 text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Users className="w-3.5 h-3.5 text-amber-700" />
                      {photo.attendeesCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {currentPhoto && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Lightbox Toolbar with Cheerful Buttons */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 z-10 flex items-center gap-2"
          >
            {/* Zoom In / Out in Lightbox */}
            <button
              onClick={() => setLightboxZoom(prev => Math.min(prev + 25, 200))}
              className="p-2.5 rounded-xl bg-white text-stone-900 hover:bg-amber-100 border border-stone-300 transition-colors shadow-md cursor-pointer"
              title="Perbesar Foto"
            >
              <ZoomIn className="w-4 h-4 text-emerald-600" />
            </button>
            <button
              onClick={() => setLightboxZoom(prev => Math.max(prev - 25, 75))}
              className="p-2.5 rounded-xl bg-white text-stone-900 hover:bg-amber-100 border border-stone-300 transition-colors shadow-md cursor-pointer"
              title="Perkecil Foto"
            >
              <ZoomOut className="w-4 h-4 text-orange-600" />
            </button>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-xl bg-white text-stone-900 hover:bg-rose-100 border border-stone-300 transition-colors shadow-md cursor-pointer"
              title="Tutup Galeri (ESC)"
            >
              <X className="w-4 h-4 text-rose-600" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/90 text-stone-900 hover:bg-amber-100 border border-stone-200 transition-colors hidden sm:block z-10 shadow-lg cursor-pointer"
            title="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6 text-stone-800" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-white/90 text-stone-900 hover:bg-amber-100 border border-stone-200 transition-colors hidden sm:block z-10 shadow-lg cursor-pointer"
            title="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6 text-stone-800" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-2 border-amber-300 shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="overflow-auto flex-1 flex items-center justify-center p-4 bg-stone-100">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                style={{
                  transform: `scale(${lightboxZoom / 100})`,
                  transition: 'transform 0.2s ease-out'
                }}
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-white border-t-2 border-amber-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                <span className="font-mono text-amber-900 font-bold bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {currentPhoto.category}
                </span>
                <span>{currentPhoto.date} · {currentPhoto.location}</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-stone-900">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
