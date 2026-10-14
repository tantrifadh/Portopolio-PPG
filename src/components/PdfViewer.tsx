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
  Layers
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
    setZoomLevel(125);
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
        grade: 'Berkas Asli (.pdf)',
        category: 'Artikel Ilmiah',
        abstractIndo: `Berkas PDF '${file.name}' dimuat dalam penampil dokumen interaktif dengan kontrol perbesaran (zoom in/out).`,
        abstractEng: `Local PDF file '${file.name}' loaded into the interactive reader.`,
        keywords: ['PDF Unggahan', 'Seminar Kependidikan', 'Dokumen Mandiri'],
        customPdfUrl: fileUrl,
        pages: [
          {
            pageNumber: 1,
            title: file.name,
            sections: [
              {
                heading: 'DOKUMEN PDF BERHASIL DIMUAT',
                content: `Berkas "${file.name}" ditayangkan dalam penampil dokumen. Anda dapat mengatur skala baca dengan tombol Zoom In/Out di atas.`
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
        <mark key={i} className="bg-yellow-200 text-stone-900 px-0.5 rounded-xs">{part}</mark>
      ) : part
    );
  };

  return (
    <div 
      ref={viewerContainerRef}
      className={`flex flex-col bg-stone-100 text-stone-800 rounded-2xl border border-stone-300 shadow-sm overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0' : 'w-full min-h-[780px]'
      }`}
    >
      {/* Clean Document Reader Toolbar */}
      <div className="bg-white border-b border-stone-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs select-none">
        
        {/* Left: Document Identity & Switcher toggle */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-stone-100 border border-stone-200 text-stone-700 flex items-center justify-center shrink-0 font-mono text-[11px] font-semibold">
              PDF
            </span>
            <div className="truncate">
              <p className="font-semibold text-stone-900 truncate max-w-[200px] sm:max-w-[320px]">
                {selectedTask.title}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-stone-500">
                <span>{selectedTask.code}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedTask.pagesCount} Halaman</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-700 font-medium">{selectedTask.grade}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`px-2.5 py-1.5 rounded border text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              showThumbnails 
                ? 'bg-stone-100 border-stone-300 text-stone-900' 
                : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50'
            }`}
            title="Daftar naskah dan halaman"
          >
            <Layers className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden sm:inline">Daftar Naskah</span>
          </button>
        </div>

        {/* Center: CORE FEATURE - BESAR / KECILIN PDF (Zoom Controls) */}
        <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-lg p-0.5">
          {/* Zoom Out Button (Perkecil) */}
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 50}
            className="p-1.5 rounded hover:bg-white text-stone-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Perkecil PDF (Zoom Out)"
          >
            <ZoomOut className="w-4 h-4" />
            <span className="sr-only">Perkecil PDF</span>
          </button>

          {/* Zoom Percentage Display */}
          <button
            onClick={handleResetZoom}
            className="px-2 py-1 text-center font-mono text-xs font-medium text-stone-800 hover:bg-white rounded transition-colors min-w-[54px] cursor-pointer"
            title="Reset ke 100%"
          >
            {zoomLevel}%
          </button>

          {/* Zoom In Button (Perbesar) */}
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 250}
            className="p-1.5 rounded hover:bg-white text-stone-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Perbesar PDF (Zoom In)"
          >
            <ZoomIn className="w-4 h-4" />
            <span className="sr-only">Perbesar PDF</span>
          </button>

          <div className="w-px h-4 bg-stone-200 mx-1" />

          {/* Fit to width */}
          <button
            onClick={handleFitToWidth}
            className="px-2 py-1 rounded text-[11px] font-medium text-stone-600 hover:bg-white transition-colors hidden md:inline-block cursor-pointer"
            title="Sesuaikan lebar halaman"
          >
            Pas Lebar
          </button>

          {/* Reset 100% */}
          <button
            onClick={handleResetZoom}
            className="px-2 py-1 rounded text-[11px] font-medium text-stone-600 hover:bg-white transition-colors hidden md:inline-block cursor-pointer"
            title="Reset ke ukuran asli"
          >
            100%
          </button>
        </div>

        {/* Right: Page Navigation, Search & Actions */}
        <div className="flex items-center gap-1.5">
          {/* Page Prev/Next */}
          <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-lg p-0.5">
            <button
              onClick={handlePrevPage}
              disabled={currentPage <= 1}
              className="p-1 rounded text-stone-700 hover:bg-white disabled:opacity-30 transition-colors cursor-pointer"
              title="Halaman sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[11px] font-mono px-1.5 text-stone-700 whitespace-nowrap">
              {currentPage} / {selectedTask.pagesCount}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage >= selectedTask.pagesCount}
              className="p-1 rounded text-stone-700 hover:bg-white disabled:opacity-30 transition-colors cursor-pointer"
              title="Halaman selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Text Search */}
          <div className="relative hidden lg:block">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Cari kata di teks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-2.5 py-1 bg-white border border-stone-200 rounded text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 w-32 focus:w-40 transition-all"
            />
          </div>

          {/* Rotate */}
          <button
            onClick={handleRotate}
            className="p-1.5 rounded border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors hidden sm:block cursor-pointer"
            title="Putar naskah"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {/* Download */}
          <button
            onClick={handleDownload}
            className="p-1.5 rounded border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
            title="Unduh naskah"
          >
            <Download className="w-3.5 h-3.5" />
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="p-1.5 rounded border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors hidden sm:block cursor-pointer"
            title="Cetak naskah"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="p-1.5 rounded border border-stone-200 bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
            title={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Reader Viewport */}
      <div className="flex-1 flex overflow-hidden relative min-h-[640px]">
        {/* Document List Sidebar */}
        {showThumbnails && (
          <aside className="w-72 bg-white border-r border-stone-200 flex flex-col shrink-0 overflow-y-auto p-3 text-xs z-10">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-200">
              <span className="font-semibold text-stone-800">Daftar Naskah Seminar</span>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1 px-2.5 py-1 bg-stone-900 hover:bg-stone-800 text-white rounded text-[11px] font-medium transition-colors cursor-pointer"
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

            <div className="space-y-1.5 mb-4">
              {customTasks.map((task) => {
                const isSelected = selectedTask.id === task.id;
                return (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className={`w-full text-left p-2.5 rounded-lg border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-stone-100 border-stone-400 text-stone-950 font-medium'
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-stone-500 mb-0.5">
                      <span className="font-mono">{task.code}</span>
                      <span>{task.pagesCount} Hlm</span>
                    </div>
                    <p className="text-xs text-stone-800 line-clamp-2 leading-snug">
                      {task.title}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-100 text-[11px] text-stone-500">
                      <span>{task.category}</span>
                      <span className="font-medium text-stone-700">{task.grade}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Page thumbnails for selected task */}
            <div className="mt-auto pt-3 border-t border-stone-200">
              <p className="font-medium text-stone-600 mb-2">Halaman Dokumen</p>
              <div className="grid grid-cols-2 gap-2">
                {selectedTask.pages.map((page) => (
                  <button
                    key={page.pageNumber}
                    onClick={() => setCurrentPage(page.pageNumber)}
                    className={`flex flex-col items-center p-2 rounded border text-center transition-colors cursor-pointer ${
                      currentPage === page.pageNumber
                        ? 'border-stone-800 bg-stone-100 text-stone-900 font-medium'
                        : 'border-stone-200 bg-white text-stone-500 hover:border-stone-300'
                    }`}
                  >
                    <div className="w-12 h-16 bg-stone-50 rounded-xs shadow-2xs mb-1 flex items-center justify-center text-[10px] font-mono text-stone-700 border border-stone-200">
                      Hal {page.pageNumber}
                    </div>
                    <span className="text-[10px] truncate max-w-full">
                      Halaman {page.pageNumber}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        )}

        {/* Center Paper Canvas with Smooth Zoom Scaling */}
        <div className="flex-1 bg-stone-200/50 overflow-auto flex items-start justify-center p-6 md:p-10 relative">
          
          {/* Subtle zoom indicator */}
          <div className="absolute bottom-4 right-4 z-20 bg-white border border-stone-300 px-3 py-1.5 rounded-md text-[11px] text-stone-600 shadow-sm flex items-center gap-2">
            <span>Perbesaran: <strong className="font-mono text-stone-900">{zoomLevel}%</strong></span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Gunakan + / - untuk mengatur skala</span>
          </div>

          {/* If custom PDF URL is loaded */}
          {selectedTask.customPdfUrl ? (
            <div 
              style={{
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out'
              }}
              className="w-full max-w-4xl h-[850px] bg-white rounded-lg shadow-sm overflow-hidden border border-stone-300"
            >
              <iframe
                src={selectedTask.customPdfUrl}
                title={selectedTask.title}
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* Vector-Crisp Academic Paper Canvas */
            <div
              style={{
                transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                transformOrigin: 'top center',
                transition: 'transform 0.18s ease-out',
              }}
              className="w-full max-w-3xl min-h-[1050px] bg-white text-stone-900 rounded-sm shadow-md p-10 md:p-14 relative flex flex-col font-sans select-text border border-stone-300"
            >
              {/* Official Academic Letterhead */}
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
                      Mata Kuliah: {selectedTask.course} · Kode Naskah: {selectedTask.code}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono text-stone-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded">
                      Naskah Disetujui
                    </span>
                    <p className="text-[10px] font-mono text-stone-400 mt-1">
                      {selectedTask.date}
                    </p>
                  </div>
                </div>
              </header>

              {/* Document Title (Main Paper Heading) */}
              <div className="mb-6">
                <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider block mb-1">
                  Kategori: {selectedTask.category}
                </span>
                <h1 className="text-xl md:text-2xl font-bold font-serif-title leading-snug text-stone-900 mb-2">
                  {highlightSearchText(selectedTask.title)}
                </h1>
                <div className="text-xs text-stone-600 space-y-0.5">
                  <p><strong>Penyusun:</strong> Tantri Fadhillah, S.Pd. (NIM: 2309118042)</p>
                  <p><strong>Dosen Pengampu:</strong> {selectedTask.lecturer}</p>
                </div>
              </div>

              {/* Page Sub-Header */}
              <div className="bg-stone-50 border border-stone-200 rounded px-3 py-1.5 mb-6 flex items-center justify-between text-xs text-stone-700">
                <span className="font-semibold text-stone-900">
                  {currentPageData.title}
                </span>
                <span className="font-mono text-[11px] text-stone-500">
                  Halaman {currentPage} dari {selectedTask.pagesCount}
                </span>
              </div>

              {/* Page Content Sections */}
              <div className="space-y-6 flex-1 text-sm leading-relaxed text-stone-800">
                {currentPageData.sections.map((section, idx) => (
                  <article key={idx} className="space-y-2">
                    <h2 className="text-base font-bold text-stone-900 tracking-tight font-serif-title border-b border-stone-100 pb-1">
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

                    {/* Scientific Data Table */}
                    {section.table && (
                      <div className="my-4 overflow-x-auto border border-stone-300 rounded-sm">
                        {section.table.caption && (
                          <div className="bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-800 border-b border-stone-300">
                            {section.table.caption}
                          </div>
                        )}
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-stone-50 border-b border-stone-300">
                              {section.table.headers.map((header, hIdx) => (
                                <th key={hIdx} className="p-2.5 font-bold text-stone-800 border-r border-stone-200 last:border-r-0">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b border-stone-200 last:border-b-0 hover:bg-stone-50">
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

                    {/* Callout box */}
                    {section.callout && (
                      <div className="bg-stone-50 border-l-2 border-stone-700 rounded-r p-3.5 text-xs text-stone-800 italic my-3">
                        {section.callout}
                      </div>
                    )}
                  </article>
                ))}

                {/* Last Page: Verification Block */}
                {currentPage === selectedTask.pagesCount && (
                  <div className="mt-10 pt-6 border-t-2 border-stone-200 flex items-end justify-between text-xs">
                    <div>
                      <p className="text-stone-500 mb-1">Catatan Evaluator Dosen:</p>
                      <p className="italic text-stone-700 max-w-sm">
                        "Kajian ilmiah komprehensif, penyajian data empiris sangat baik, dan alur diferensiasi sangat aplikatif untuk Kurikulum Merdeka."
                      </p>
                      <p className="font-semibold text-stone-900 mt-2">
                        {selectedTask.grade} · LULUS
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-stone-500 text-[11px] mb-8">Bandung, {selectedTask.date}</p>
                      <p className="font-bold underline text-stone-900">{selectedTask.lecturer}</p>
                      <p className="text-[10px] text-stone-500">Dosen Pengampu Mata Kuliah</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Paper Footer */}
              <footer className="mt-10 pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500 select-none">
                <span>Seminar Kependidikan · Tantri Fadhillah, S.Pd.</span>
                <span className="font-mono text-stone-700 font-medium">
                  Halaman {currentPage}
                </span>
                <span>PPG Prajabatan UPI</span>
              </footer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
