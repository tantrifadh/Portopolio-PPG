/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionId } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { ProfileSection } from './components/ProfileSection';
import { ArtefakSection } from './components/ArtefakSection';
import { PenilaianSection } from './components/PenilaianSection';
import { DokumentasiSection } from './components/DokumentasiSection';
import { SeminarSection } from './components/SeminarSection';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('beranda');
  const [selectedSeminarTaskId, setSelectedSeminarTaskId] = useState<string | undefined>(undefined);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Scroll to top when section changes
  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSeminarTask = (taskId: string) => {
    setSelectedSeminarTaskId(taskId);
    setActiveSection('seminar');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-stone-200 selection:text-stone-900">
      
      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeSection === 'beranda' && (
          <HomeSection
            onNavigate={handleNavigate}
            onSelectSeminarTask={handleSelectSeminarTask}
          />
        )}

        {activeSection === 'profil' && <ProfileSection />}

        {activeSection === 'artefak' && <ArtefakSection />}

        {activeSection === 'penilaian' && <PenilaianSection />}

        {activeSection === 'dokumentasi' && <DokumentasiSection />}

        {activeSection === 'seminar' && (
          <SeminarSection
            selectedTaskId={selectedSeminarTaskId}
            onSelectTask={setSelectedSeminarTaskId}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Contact & CV Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

    </div>
  );
}
