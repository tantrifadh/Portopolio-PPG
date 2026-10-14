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
  ZoomOut
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
      <div className="border-b border-stone-200 pb-6">
        <span className="text-xs font-medium text-stone-500 uppercase tracking-wider block">
          Galeri & Dokumentasi Lapangan
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif-title text-stone-900 mt-2">
          Dokumentasi Pembelajaran
        </h1>
        <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-3xl leading-relaxed">
          Rekaman visual interaksi kelas, bimbingan investigasi saintifik peserta didik, pemaparan hasil tindakan pada seminar, dan kolaborasi profesional bersama rekan guru.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg w-fit max-w-full overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategory === cat
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
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
            className="group bg-white border border-stone-200 rounded-xl overflow-hidden hover:border-stone-400 transition-colors flex flex-col cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-stone-900 text-xs font-medium rounded shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Buka Gambar
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-stone-900/80 text-white text-[11px] px-2.5 py-1 rounded">
                {photo.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold font-serif-title text-stone-900 group-hover:text-stone-700 transition-colors leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {photo.caption}
                </p>
              </div>

              {/* Metadata */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400" />
                  <span>{photo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    {photo.date}
                  </span>
                  {photo.attendeesCount && (
                    <span className="flex items-center gap-1 text-stone-700">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      {photo.attendeesCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
        >
          {/* Lightbox Toolbar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 z-10 flex items-center gap-2"
          >
            <button
              onClick={() => setLightboxZoom(prev => Math.min(prev + 25, 200))}
              className="p-2 rounded bg-stone-900 text-white hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer"
              title="Perbesar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLightboxZoom(prev => Math.max(prev - 25, 75))}
              className="p-2 rounded bg-stone-900 text-white hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer"
              title="Perkecil"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={closeLightbox}
              className="p-2 rounded bg-stone-900 text-white hover:bg-stone-800 border border-stone-700 transition-colors cursor-pointer"
              title="Tutup (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors hidden sm:block z-10 cursor-pointer"
            title="Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors hidden sm:block z-10 cursor-pointer"
            title="Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-stone-900 text-stone-100 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="overflow-auto flex-1 flex items-center justify-center p-4 bg-stone-950">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                style={{
                  transform: `scale(${lightboxZoom / 100})`,
                  transition: 'transform 0.2s ease-out'
                }}
                className="max-h-[65vh] w-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-stone-900 border-t border-stone-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="font-mono text-stone-300">{currentPhoto.category}</span>
                <span>{currentPhoto.date} · {currentPhoto.location}</span>
              </div>
              <h3 className="text-lg font-bold font-serif-title text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
