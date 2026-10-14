import React, { useState, useRef, useEffect } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  RotateCw, 
  Download, 
  Printer, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  FileText, 
  CheckCircle, 
  RotateCcw,
  BookOpen,
  Layers,
  Sparkles,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';
import { SeminarTask } from '../types/portfolio';
import { SEMINAR_TASKS } from '../data/portfolioData';

interface PdfViewerProps {
  initialTaskId?: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ initialTaskId }) => {
  const [selectedTask, setSelectedTask] = useState<SeminarTask>(() => {
    if (initialTaskId) {
      const found = SEMINAR_TASKS.find(t => t.id === initialTaskId);
      if (found) return found;
    }
    return SEMINAR_TASKS[0];
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100); // 50% to 250%
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showThumbnails, setShowThumbnails] = useState<boolean>(true);
  const [customPdfFile, setCustomPdfFile] = useState<{ name: string; url: string } | null>(null);
  const [customTasks, setCustomTasks] = useState<SeminarTask[]>(SEMINAR_TASKS);

  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Zoom preset stops
  const zoomPresets = [50, 75, 90, 100, 115, 125, 150, 175, 200, 250];

  const handleZoomIn = () => {
    setZoomLevel(prev => {
      const next = zoomPresets.find(z => z > prev);
      return next !== undefined ? next : Math.min(prev + 20, 250);
    });
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const reversed = [...zoomPresets].reverse();
      const next = reversed.find(z => z < prev);
      return next !== undefined ? next : Math.max(prev - 20, 50);
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handleFitToWidth = () => {
    setZoomLevel(130);
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, selectedTask.pagesCount));
  };

  const handleToggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // When task changes, reset page to 1
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTask]);

  // Handle custom PDF upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const fileUrl = URL.createObjectURL(file);
      setCustomPdfFile({ name: file.name, url: fileUrl });
      
      const customTaskItem: SeminarTask = {
        id: `custom-${Date.now()}`,
        code: 'TUGAS-MANDIRI',
        title: file.name.replace(/\.[^/.]+$/, ''),
        course: 'Dokumen Tugas Seminar Pengguna',
        lecturer: 'Dosen Pembimbing Akademik',
        semester: 'Tahun Akademik Berjalan',
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        pagesCount: 1,
        grade: 'Dokumen Asli (.pdf)',
        category: 'Artikel Ilmiah',
        abstractIndo: `File PDF lokal '${file.name}' telah berhasil dimuat ke dalam penampil dokumen interaktif dengan fitur perbesar/perkecil (zoom in/out).`,
        abstractEng: `Local PDF file '${file.name}' has been loaded into the interactive reader with zoom in/out capabilities.`,
        keywords: ['PDF Unggahan', 'Seminar Kependidikan', 'Dokumen Mandiri'],
        customPdfUrl: fileUrl,
        pages: [
          {
            pageNumber: 1,
            title: file.name,
            sections: [
              {
                heading: 'DOKUMEN PDF BERHASIL DIMUAT',
                content: `File "${file.name}" aktif ditayangkan dalam penampil PDF interaktif. Anda dapat memperbesar/memperkecil tampilan dengan tombol Zoom In/Out di atas.`
              }
            ]
          }
        ]
      };
      setCustomTasks(prev => [customTaskItem, ...prev]);
      setSelectedTask(customTaskItem);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (selectedTask.customPdfUrl) {
      const a = document.createElement('a');
      a.href = selectedTask.customPdfUrl;
      a.download = `${selectedTask.title}.pdf`;
      a.click();
      return;
    }

    // Generate downloadable formatted text representation
    let text = `========================================================\n`;
    text += `SEMINAR KEPENDIDIKAN - PORTOFOLIO AKADEMIK\n`;
    text += `========================================================\n\n`;
    text += `KODE: ${selectedTask.code}\n`;
    text += `JUDUL: ${selectedTask.title}\n`;
    text += `MATA KULIAH: ${selectedTask.course}\n`;
    text += `DOSEN: ${selectedTask.lecturer}\n`;
    text += `NILAI: ${selectedTask.grade}\n\n`;
    text += `ABSTRAK:\n${selectedTask.abstractIndo}\n\n`;
    text += `KATA KUNCI: ${selectedTask.keywords.join(', ')}\n\n`;
    text += `--------------------------------------------------------\n`;
    
    selectedTask.pages.forEach(p => {
      text += `\n[ HALAMAN ${p.pageNumber}: ${p.title} ]\n\n`;
      p.sections.forEach(s => {
        text += `## ${s.heading}\n`;
        if (s.content) {
          if (Array.isArray(s.content)) {
            text += s.content.join('\n') + '\n\n';
          } else {
            text += `${s.content}\n\n`;
          }
        }
        if (s.callout) {
          text += `> ${s.callout}\n\n`;
        }
      });
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedTask.code}_${selectedTask.title.slice(0, 30)}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const currentPageData = selectedTask.pages.find(p => p.pageNumber === currentPage) || selectedTask.pages[0];

  // Text highlight helper for search
  const highlightSearchText = (text: string) => {
    if (!searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-amber-300 text-stone-950 font-semibold rounded-xs px-1 shadow-xs">{part}</mark>
      ) : part
    );
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'PTK': return 'bg-orange-100 text-orange-900 border-orange-200';
      case 'Refleksi': return 'bg-purple-100 text-purple-900 border-purple-200';
      case 'Inovasi Digital': return 'bg-teal-100 text-teal-900 border-teal-200';
      case 'Kajian Literatur': return 'bg-blue-100 text-blue-900 border-blue-200';
      default: return 'bg-amber-100 text-amber-900 border-amber-200';
    }
  };

  return (
    <div 
      ref={viewerContainerRef}
      className={`flex flex-col bg-white text-stone-800 rounded-3xl border-2 border-amber-200 shadow-xl overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0' : 'w-full min-h-[780px]'
      }`}
    >
      {/* Top Cheerful Toolbar - PDF Control Ribbon */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-b-2 border-amber-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs select-none">
        
        {/* Left: Document Identity & Switcher button */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 font-bold font-mono shadow-xs">
              PDF
            </span>
            <div className="truncate">
              <p className="font-bold text-stone-900 truncate max-w-[200px] sm:max-w-[320px]">
                {selectedTask.title}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-stone-600 font-medium">
                <span className="text-amber-800 font-bold">{selectedTask.code}</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span>{selectedTask.pagesCount} Halaman</span>
                <span aria-hidden="true" className="text-stone-400">·</span>
                <span className="text-teal-700 font-bold">{selectedTask.grade}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              showThumbnails 
                ? 'bg-amber-200/80 border-amber-400 text-amber-950 shadow-xs' 
                : 'bg-white border-amber-200 text-stone-700 hover:bg-amber-100/60'
            }`}
            title="Tampilkan daftar tugas & thumbnail halaman"
          >
            <Layers className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">Daftar Dokumen</span>
          </button>
        </div>

        {/* Center: CORE FEATURE - FITUR BESAR/KECILIN PDF (Cheerful Zoom Controls) */}
        <div className="flex items-center gap-1.5 bg-white border-2 border-amber-300 rounded-2xl p-1 shadow-xs">
          
          {/* Zoom Out Button (Perkecil) */}
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50}
            className="p-1.5 rounded-xl text-stone-700 hover:text-amber-900 hover:bg-amber-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center gap-1 cursor-pointer"
            title="Perkecil PDF (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4 text-orange-600" />
            <span className="sr-only">Perkecil PDF</span>
          </button>

          {/* Zoom Level Indicator / Selector */}
          <div className="relative group">
            <button
              onClick={handleResetZoom}
              className="px-2.5 py-1 text-center font-mono font-bold text-amber-950 bg-amber-50 hover:bg-amber-200 rounded-lg transition-colors min-w-[62px] border border-amber-200 cursor-pointer"
              title="Klik untuk reset ke 100%"
            >
              {zoomLevel}%
            </button>
          </div>

          {/* Zoom In Button (Perbesar) */}
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 250}
            className="p-1.5 rounded-xl text-stone-700 hover:text-amber-900 hover:bg-amber-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center gap-1 cursor-pointer"
            title="Perbesar PDF (Zoom In)"
          >
            <ZoomIn className="w-4 h-4 text-emerald-600" />
            <span className="sr-only">Perbesar PDF</span>
          </button>

          <div className="w-px h-5 bg-amber-200 mx-0.5" />

          {/* Fit to width */}
          <button
            onClick={handleFitToWidth}
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-amber-800 hover:bg-amber-100 transition-colors hidden md:inline-block cursor-pointer"
            title="Sesuaikan Lebar Halaman"
          >
            Pas Lebar
          </button>

          {/* Reset 100% */}
          <button
            onClick={handleResetZoom}
            className="px-2.5 py-1 rounded-lg text-[11px] font-bold text-stone-600 hover:bg-stone-100 transition-colors hidden md:inline-block cursor-pointer"
            title="Reset Ukuran Normal (100%)"
          >
            100%
          </button>
        </div>

        {/* Right: Page Navigation, Rotation, Actions */}
        <div className="flex items-center gap-2">
          {/* Page Prev/Next */}
          <div className="flex items-center gap-1 bg-white border-2 border-amber-200 rounded-xl p-1 shadow-xs">
            <button
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className="p-1 rounded-lg text-stone-700 hover:text-amber-900 hover:bg-amber-100 disabled:opacity-30 transition-colors cursor-pointer"
              title="Halaman Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono font-bold px-1.5 text-stone-800 whitespace-nowrap">
              {currentPage} / {selectedTask.pagesCount}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage >= selectedTask.pagesCount}
              className="p-1 rounded-lg text-stone-700 hover:text-amber-900 hover:bg-amber-100 disabled:opacity-30 transition-colors cursor-pointer"
              title="Halaman Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Search in document */}
          <div className="relative hidden lg:block">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Cari kata di PDF..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-2.5 py-1.5 bg-white border border-amber-200 rounded-xl text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 w-32 focus:w-44 transition-all shadow-2xs"
            />
          </div>

          {/* Rotate */}
          <button
            onClick={handleRotate}
            className="p-2 rounded-xl border border-amber-200 bg-white text-stone-600 hover:text-amber-900 hover:bg-amber-50 transition-colors hidden sm:block cursor-pointer shadow-2xs"
            title="Putar 90 Derajat"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="p-2 rounded-xl border border-amber-200 bg-white text-stone-600 hover:text-amber-900 hover:bg-amber-50 transition-colors cursor-pointer shadow-2xs"
            title="Unduh Dokumen Tugas"
          >
            <Download className="w-3.5 h-3.5 text-teal-600" />
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="p-2 rounded-xl border border-amber-200 bg-white text-stone-600 hover:text-amber-900 hover:bg-amber-50 transition-colors hidden sm:block cursor-pointer shadow-2xs"
            title="Cetak Dokumen"
          >
            <Printer className="w-3.5 h-3.5 text-orange-600" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="p-2 rounded-xl border border-amber-200 bg-white text-stone-600 hover:text-amber-900 hover:bg-amber-50 transition-colors cursor-pointer shadow-2xs"
            title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Reader Viewport */}
      <div className="flex-1 flex overflow-hidden relative min-h-[640px]">
        {/* Document List Sidebar */}
        {showThumbnails && (
          <aside className="w-76 bg-stone-50/95 border-r-2 border-amber-200 flex flex-col shrink-0 overflow-y-auto p-3.5 text-xs z-10">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-amber-200">
              <span className="font-bold text-stone-800">Koleksi Tugas Seminar</span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg text-[11px] font-bold transition-all shadow-xs cursor-pointer"
                title="Unggah file PDF tugas Anda sendiri"
              >
                <Upload className="w-3 h-3" />
                <span>Unggah PDF</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>

            <div className="space-y-2 mb-4">
              {customTasks.map((task) => {
                const isSelected = selectedTask.id === task.id;
                return (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`w-full text-left p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-100/80 border-amber-400 text-stone-900 shadow-sm'
                        : 'bg-white border-stone-200/90 text-stone-600 hover:border-amber-300 hover:bg-amber-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-[10px] text-amber-800 font-bold">
                        {task.code}
                      </span>
                      <span className="text-[10px] text-stone-500">
                        {task.date}
                      </span>
                    </div>
                    <p className="font-bold text-stone-900 line-clamp-2 leading-snug">
                      {task.title}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-200/60 text-[11px]">
                      <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${getCategoryBadge(task.category)}`}>
                        {task.category}
                      </span>
                      <span className="text-teal-700 font-bold">{task.grade}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Page thumbnails for selected task */}
            <div className="mt-auto pt-3 border-t-2 border-amber-200">
              <p className="font-bold text-stone-700 mb-2">Halaman Dokumen Ini</p>
              <div className="grid grid-cols-2 gap-2">
                {selectedTask.pages.map((page) => (
                  <button
                    key={page.pageNumber}
                    onClick={() => setCurrentPage(page.pageNumber)}
                    className={`flex flex-col items-center p-2 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      currentPage === page.pageNumber
                        ? 'border-amber-500 bg-amber-100 text-amber-950 font-bold shadow-xs'
                        : 'border-stone-200 bg-white text-stone-600 hover:border-amber-300'
                    }`}
                  >
                    <div className="w-12 h-16 bg-white rounded-md shadow-xs mb-1 flex items-center justify-center text-[10px] font-mono font-bold text-stone-800 border border-stone-300">
                      Hal {page.pageNumber}
                    </div>
                    <span className="text-[10px] truncate max-w-full">
                      Hal. {page.pageNumber}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Center Paper Canvas with Cheerful Background and Smooth Zoom Scale */}
        <div className="flex-1 bg-[#F5F4EE] overflow-auto flex items-start justify-center p-6 md:p-10 relative">
          
          {/* Cheerful Zoom notification pill */}
          <div className="absolute bottom-4 right-4 z-20 bg-white/95 border-2 border-amber-300 px-3.5 py-1.5 rounded-full text-[11px] text-stone-700 shadow-md flex items-center gap-2 backdrop-blur-sm">
            <span>Perbesaran: <strong className="text-amber-800 font-mono font-bold">{zoomLevel}%</strong></span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500 font-medium">Gunakan tombol + / - untuk besar/kecilkan</span>
          </div>

          {/* If custom PDF URL is loaded */}
          {selectedTask.customPdfUrl ? (
            <div 
              style={{
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="w-full max-w-4xl h-[850px] bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200"
            >
              <iframe
                src={selectedTask.customPdfUrl}
                title={selectedTask.title}
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* Vector-Crisp Academic Paper Canvas with Cheerful Framing */
            <div
              style={{
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'top center',
                transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="w-full max-w-3xl min-h-[1050px] bg-white text-stone-900 rounded-lg shadow-2xl p-10 md:p-14 relative flex flex-col font-sans select-text border border-stone-200"
            >
              {/* Paper Watermark / Seal */}
              <div className="absolute right-10 top-10 opacity-5 pointer-events-none select-none">
                <BookOpen className="w-48 h-48 text-amber-600" />
              </div>

              {/* Official Academic Paper Letterhead / Header with Sunny Seal */}
              <header className="border-b-2 border-stone-900 pb-4 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] tracking-wider uppercase font-semibold text-stone-600">
                      KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
                    </p>
                    <p className="text-xs font-bold text-stone-900">
                      PROGRAM PENDIDIKAN PROFESI GURU (PPG) PRAJABATAN
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Mata Kuliah: {selectedTask.course} · Kode Arsip: {selectedTask.code}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 bg-amber-100 border border-amber-300 text-amber-950 text-[10px] font-bold rounded-lg shadow-2xs">
                      ✓ TERVERIFIKASI DOSEN
                    </span>
                    <p className="text-[10px] font-mono text-stone-400 mt-1">
                      {selectedTask.date}
                    </p>
                  </div>
                </div>
              </header>

              {/* Document Title (Main Paper Heading) */}
              <div className="mb-6">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Kategori Tugas: {selectedTask.category}
                </span>
                <h1 className="text-xl md:text-2xl font-bold font-serif-title leading-snug text-stone-900 mb-2">
                  {highlightSearchText(selectedTask.title)}
                </h1>
                <div className="text-xs text-stone-600 space-y-0.5">
                  <p><strong>Penyusun:</strong> Tantri Fadhillah, S.Pd. (NIM: 2309118042)</p>
                  <p><strong>Dosen Pengampu:</strong> {selectedTask.lecturer}</p>
                </div>
              </div>

              {/* Page Sub-Header with Cheerful Accent */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl px-4 py-2 mb-6 flex items-center justify-between text-xs text-stone-700">
                <span className="font-bold text-stone-900">
                  {currentPageData.title}
                </span>
                <span className="font-mono font-bold text-[11px] text-amber-800">
                  Halaman {currentPage} dari {selectedTask.pagesCount}
                </span>
              </div>

              {/* Page Content Sections */}
              <div className="space-y-6 flex-1 text-sm leading-relaxed text-stone-800">
                {currentPageData.sections.map((section, idx) => (
                  <article key={idx} className="space-y-2">
                    <h2 className="text-base font-bold text-stone-900 tracking-tight font-serif-title border-b border-amber-100 pb-1">
                      {highlightSearchText(section.heading)}
                    </h2>
                    
                    {section.content && (
                      Array.isArray(section.content) ? (
                        <div className="space-y-2">
                          {section.content.map((para, pIdx) => (
                            <p key={pIdx} className="text-stone-700 leading-relaxed text-justify">
                              {highlightSearchText(para)}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-stone-700 leading-relaxed whitespace-pre-line text-justify">
                          {highlightSearchText(section.content)}
                        </p>
                      )
                    )}

                    {/* Render Scientific Data Table if present */}
                    {section.table && (
                      <div className="my-4 overflow-x-auto border-2 border-stone-200 rounded-xl overflow-hidden shadow-2xs">
                        {section.table.caption && (
                          <div className="bg-amber-100/70 px-3 py-1.5 text-xs font-bold text-amber-950 border-b border-amber-200">
                            {section.table.caption}
                          </div>
                        )}
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-stone-100 border-b border-stone-200">
                              {section.table.headers.map((header, hIdx) => (
                                <th key={hIdx} className="p-2.5 font-bold text-stone-800 border-r border-stone-200 last:border-r-0">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b border-stone-200 last:border-b-0 hover:bg-amber-50/40">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2.5 text-stone-700 border-r border-stone-200 last:border-r-0 font-sans">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Render Callout box if present */}
                    {section.callout && (
                      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-3.5 text-xs text-amber-950 italic my-3 shadow-2xs">
                        {section.callout}
                      </div>
                    )}
                  </article>
                ))}

                {/* On Last Page: Lecturer Assessment & Stamp Box */}
                {currentPage === selectedTask.pagesCount && (
                  <div className="mt-10 pt-6 border-t-2 border-stone-200 flex items-end justify-between text-xs">
                    <div>
                      <p className="text-stone-500 mb-1 font-medium">Catatan Verifikator Dosen:</p>
                      <p className="italic text-stone-700 max-w-sm">
                        "Kajian ilmiah komprehensif, penyajian data empiris sangat baik, dan alur diferensiasi sangat aplikatif untuk Kurikulum Merdeka."
                      </p>
                      <p className="font-bold text-teal-800 mt-2">
                        {selectedTask.grade} · LULUS MEMUASKAN
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-stone-500 text-[11px] mb-8">Bandung, {selectedTask.date}</p>
                      <p className="font-bold underline text-stone-900">{selectedTask.lecturer}</p>
                      <p className="text-[10px] text-stone-500 font-medium">Dosen Pengampu Mata Kuliah</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Paper Footer with page numbers and metadata */}
              <footer className="mt-10 pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 select-none">
                <span>Portofolio Seminar Kependidikan · Tantri Fadhillah, S.Pd.</span>
                <span className="font-mono font-bold text-stone-800 bg-amber-100 px-2 py-0.5 rounded">
                  Halaman {currentPage}
                </span>
                <span>Dokumen Akademik PPG UPI</span>
              </footer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
