import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CommunityChallenge from './components/CommunityChallenge';
import SolarSolution from './components/SolarSolution';
import TechnicalSpecs from './components/TechnicalSpecs';
import ImpactAndSDGs from './components/ImpactAndSDGs';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import SustainabilityReplication from './components/SustainabilityReplication';
import TeamPartners from './components/TeamPartners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout">
      {/* Sticky Navigation Header */}
      <Header />

      <main>
        {/* Hero Section & Key Summary Metrics */}
        <Hero />

        {/* Community Challenge & Needs Survey Findings */}
        <CommunityChallenge />

        {/* The Solar Solution & Dual-Mode Operations */}
        <SolarSolution />

        {/* Technical System Specs & Loads Breakdown Table */}
        <TechnicalSpecs />

        {/* Climate, Environmental & Social Impact + SDG Alignment */}
        <ImpactAndSDGs />

        {/* Authentic Photographic Evidence Gallery */}
        <PhotoGallery />

        {/* Implementation Milestones & Timeline */}
        <Timeline />

        {/* Maintenance Protocol & Scalable Model */}
        <SustainabilityReplication />

        {/* Youth Engineering Team, Mentors & Partners */}
        <TeamPartners />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
