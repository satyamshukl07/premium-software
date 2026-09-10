import React, { useState } from 'react';
import HeroShowcase from '../components/HeroShowcase.jsx';
import HireCarSection from '../components/home/HireCarSection.jsx';
import ChmSection from '../components/home/ChmSection.jsx';
import FleetTrackingSection from '../components/home/FleetTrackingSection.jsx';
import WrmsProSection from '../components/home/WrmsProSection.jsx';
import TrustSection from '../components/home/TrustSection.jsx';
import GlobalCtaSection from '../components/home/GlobalCtaSection.jsx';
import TrialModal from '../components/TrialModal.jsx';
import SpecialistModal from '../components/SpecialistModal.jsx';

export default function HomePage() {
  const [trialModal, setTrialModal] = useState({
    isOpen: false,
    productName: 'HireCar Marketplace',
  });

  const [specialistModal, setSpecialistModal] = useState({
    isOpen: false,
    productName: 'HireCar Marketplace',
  });

  const handleOpenTrial = (productName) => {
    setTrialModal({
      isOpen: true,
      productName: productName || 'HireCar Marketplace',
    });
  };

  const handleCloseTrial = () => {
    setTrialModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenSpecialist = (productName) => {
    setSpecialistModal({
      isOpen: true,
      productName: productName || 'HireCar Marketplace',
    });
  };

  const handleCloseSpecialist = () => {
    setSpecialistModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="bg-white text-slate-800">
      {/* ========================================================================= */}
      {/* SECTION 1: 4-PRODUCT / WEBSITE SHOWCASE HERO (UNTOUCHED) */}
      {/* ========================================================================= */}
      <HeroShowcase />

      {/* ========================================================================= */}
      {/* SECTION 1 → HireCar Marketplace */}
      {/* ========================================================================= */}
      <HireCarSection
        onTrial={handleOpenTrial}
        onSpecialist={handleOpenSpecialist}
      />

      {/* ========================================================================= */}
      {/* SECTION 2 → Car Hire Manager (CHM) */}
      {/* ========================================================================= */}
      <ChmSection
        onTrial={handleOpenTrial}
        onSpecialist={handleOpenSpecialist}
      />

      {/* ========================================================================= */}
      {/* SECTION 3 → Australia Fleet Tracking / Techtonika Autolink */}
      {/* ========================================================================= */}
      <FleetTrackingSection
        onTrial={handleOpenTrial}
        onSpecialist={handleOpenSpecialist}
      />

      {/* ========================================================================= */}
      {/* SECTION 4 → WRMS Pro */}
      {/* ========================================================================= */}
      <WrmsProSection
        onTrial={handleOpenTrial}
        onSpecialist={handleOpenSpecialist}
      />

      {/* ========================================================================= */}
      {/* CROSS-PRODUCT TRUST SECTION */}
      {/* ========================================================================= */}
      <TrustSection />

      {/* ========================================================================= */}
      {/* GLOBAL CTA / CONTACT */}
      {/* ========================================================================= */}
      <GlobalCtaSection
        onTrial={handleOpenTrial}
        onSpecialist={handleOpenSpecialist}
      />

      {/* Reusable Free Trial Modal across homepage sections */}
      <TrialModal
        isOpen={trialModal.isOpen}
        onClose={handleCloseTrial}
        defaultProductName={trialModal.productName}
      />

      {/* Reusable Specialist Modal across homepage sections */}
      <SpecialistModal
        isOpen={specialistModal.isOpen}
        onClose={handleCloseSpecialist}
        defaultProduct={specialistModal.productName}
      />
    </div>
  );
}
