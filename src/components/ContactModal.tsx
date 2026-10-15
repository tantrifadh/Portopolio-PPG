import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, Check, Download } from 'lucide-react';
import { EDUCATOR_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Kolaborasi Penelitian Tindakan Kelas (PTK)');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-stone-300 shadow-2xl overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
              Komunikasi & Kemitraan Guru
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-stone-900 mt-1">
              Hubungi {EDUCATOR_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Terbuka untuk kolaborasi Kurikulum Merdeka, narasumber pembelajaran berdiferensiasi, maupun riset tindakan kelas sains.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl text-center space-y-3">
              <div className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto shadow-2xs">
                <Check className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-stone-900 text-sm">Pesan Berhasil Terkirim</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Terima kasih atas pesan Anda. Pendidik akan merespons melalui alamat surel <strong>{senderEmail}</strong> sesegera mungkin.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-medium cursor-pointer transition-colors shadow-2xs"
              >
                Tutup Jendela
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block font-medium text-stone-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap atau Sekolah/Instansi"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-stone-400 text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">Alamat Surel</label>
                <input
                  type="email"
                  required
                  placeholder="nama@sekolah.sch.id"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-stone-400 text-stone-900 text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">Topik Diskusi</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-stone-400 text-stone-900 text-xs"
                >
                  <option value="Kolaborasi Penelitian Tindakan Kelas (PTK)">Kolaborasi Penelitian Tindakan Kelas (PTK)</option>
                  <option value="Workshop Pembelajaran Berdiferensiasi">Narasumber Pembelajaran Berdiferensiasi</option>
                  <option value="Telaah Modul Ajar">Telaah Modul Ajar & LKPD</option>
                  <option value="Diskusi Umum">Diskusi Akademik Umum</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-stone-700 mb-1">Pesan</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tuliskan rencana kegiatan atau pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-none focus:border-stone-400 text-stone-900 text-xs resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium border border-stone-200 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-stone-600" />
                  <span>Unduh CV (.txt)</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-all shadow-2xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </form>
          )}

          {/* Direct channels */}
          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-mono">
            <span>{EDUCATOR_INFO.email}</span>
            <span>{EDUCATOR_INFO.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
