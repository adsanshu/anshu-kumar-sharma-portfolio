import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import Toast from './components/Toast';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import AcademicSection from './components/sections/AcademicSection';
import SkillsSection from './components/sections/SkillsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import JourneySection from './components/sections/JourneySection';
import CareerSection from './components/sections/CareerSection';
import ExperienceSection from './components/sections/ExperienceSection';
import InterestsSection from './components/sections/InterestsSection';
import ContactSection from './components/sections/ContactSection';

import { personalInfo } from './data/portfolioData';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  // Sync dark class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: 'success' }), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="flex-grow">
        <HeroSection onOpenPhoto={() => setIsPhotoModalOpen(true)} />
        <AboutSection />
        <EducationSection />
        <AcademicSection />
        <SkillsSection />
        <CertificatesSection />
        <ProjectsSection />
        <AchievementsSection />
        <JourneySection />
        <CareerSection />
        <ExperienceSection />
        <InterestsSection />
        <ContactSection showToast={showToast} />
      </main>

      <Footer />

      {/* Lightbox Viewer for Profile Image */}
      <ImageModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        src={personalInfo.profilePhoto}
        alt={personalInfo.name}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </div>
  );
}

