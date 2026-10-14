import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle, Download, Sparkles } from 'lucide-react';
import { EDUCATOR_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Kolaborasi Penelitian / Workshop');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleDownloadCV = () => {
    let cv = `========================================================\n`;
    cv += `CURRICULUM VITAE (CV) PENDIDIK PROFESIONAL\n`;
    cv += `========================================================\n\n`;
    cv += `NAMA: ${EDUCATOR_INFO.name}\n`;
    cv += `GELAR: Sarjana Pendidikan (S.Pd.) & Gr. (Guru Profesional)\n`;
    cv += `INSTITUSI: ${EDUCATOR_INFO.institution}\n`;
    cv += `EMAIL: ${EDUCATOR_INFO.email}\n`;
    cv += `TELEPON: ${EDUCATOR_INFO.phone}\n`;
    cv += `DOMISILI: ${EDUCATOR_INFO.location}\n\n`;
    cv += `MOTTO: "${EDUCATOR_INFO.motto}"\n\n`;
    cv += `RIWAYAT PENDIDIKAN:\n`;
    EDUCATOR_INFO.degrees.forEach(d => {
      cv += `- ${d.year}: ${d.degree} - ${d.institution} (${d.field}) [${d.grade}]\n`;
    });
    cv += `\nSERTIFIKASI & KOMPETENSI:\n`;
    EDUCATOR_INFO.certifications.forEach(c => {
      cv += `- ${c}\n`;
    });
    cv += `\nEMPAT PILAR KOMPETENSI:\n`;
    EDUCATOR_INFO.competencies.forEach(c => {
      cv += `* ${c.domain}: ${c.description}\n`;
    });

    const blob = new Blob([cv], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${EDUCATOR_INFO.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-lg w-full border-2 border-amber-300 shadow-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Kemitraan & Diskusi Pendidikan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 mt-2">
              Hubungi {EDUCATOR_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Terbuka untuk diskusi kurikulum merdeka, narasumber lokakarya pembelajaran berdiferensiasi, maupun kemitraan riset tindakan kelas.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-emerald-950 text-base">Pesan Anda Berhasil Terkirim!</h4>
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                Terima kasih atas pesan dan perhatian Anda. Pendidik akan merespons melalui email <strong>{senderEmail}</strong> sesegera mungkin.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda atau Sekolah/Instansi"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Alamat Email</label>
                <input
                  type="email"
                  required
                  placeholder="email.anda@contoh.id"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Topik Kerja Sama</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 text-stone-900 text-xs"
                >
                  <option value="Kolaborasi Penelitian / PTK">Kolaborasi Penelitian Tindakan Kelas (PTK)</option>
                  <option value="Workshop Pembelajaran Berdiferensiasi">Narasumber Workshop Pembelajaran Berdiferensiasi</option>
                  <option value="Telaah Modul Ajar">Telaah Dokumen Kurikulum Merdeka & Modul Ajar</option>
                  <option value="Diskusi Umum">Diskusi Pedagogis Umum</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Pesan / Gagasan Kolaborasi</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan gambaran rencana kerja sama atau pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-stone-50 border-2 border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:border-amber-500 text-stone-900 text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-950 rounded-xl text-xs font-bold border border-amber-200 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-700" />
                  <span>Unduh CV (.txt)</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </form>
          )}

          {/* Direct channels with cheerful icons */}
          <div className="pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-medium">
            <span>📧 {EDUCATOR_INFO.email}</span>
            <span>📱 {EDUCATOR_INFO.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
