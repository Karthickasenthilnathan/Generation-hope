import React from 'react';
import { SunMedium, Shield, BatteryMedium, Cpu, CheckCircle } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';
import { getAssetUrl } from '../utils/assetHelper';

export default function SolarSolution() {
  const { solution } = PROJECT_DATA;

  return (
    <section className="section" id="solution">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <SunMedium size={14} />
            <span>Implemented Solution</span>
          </div>
          <h2 className="section-title">The Rural Solar Electrification Station</h2>
          <p className="section-description">
            A dual-mode, decentralized 2.68 kWp off-grid solar installation tailored for educational 
            empowerment and extreme weather disaster resilience.
          </p>
        </div>

        <div style={{ maxWidth: '880px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {solution.overview}
          </p>
        </div>

        <div className="solution-grid">
          {solution.dualModeOperation.map((item, idx) => (
            <div key={idx} className="solution-mode-card">
              <div className={`mode-badge ${idx === 0 ? 'mode-badge-green' : 'mode-badge-gold'}`}>
                {idx === 0 ? <SunMedium size={14} /> : <Shield size={14} />}
                <span>{item.mode}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-forest-dark)' }}>
                {item.purpose}
              </h3>

              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.coverage}
              </p>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--color-forest)', fontWeight: 600 }}>
                  <CheckCircle size={16} />
                  <span>Verified Operational at Nallur GHSS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Architecture Cards & Photos */}
        <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="hero-media-card" style={{ padding: '1rem' }}>
            <img
              src={getAssetUrl("/images/inverter-battery-bank.jpg")}
              alt="Child-Safe Battery Enclosure and 3.5 kVA Solar Inverter"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              onError={(e) => {
                if (import.meta.env.DEV) {
                  console.error(`[SolarSolution] Failed to load battery bank image: ${e.currentTarget.src}`);
                }
              }}
            />
            <div style={{ padding: '0.85rem 0.25rem 0' }}>
              <div style={{ fontWeight: 700, color: 'var(--color-forest-dark)', fontSize: '0.95rem' }}>
                Child-Safe Welded Security Enclosure
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Heavy-duty iron-mesh protective cage fabricated to keep curious schoolchildren safe from the 48Vdc battery bank and 3.5 kVA inverter unit.
              </p>
            </div>
          </div>

          <div className="hero-media-card" style={{ padding: '1rem' }}>
            <img
              src={getAssetUrl("/images/electrical-distribution.jpg")}
              alt="AC and DC Distribution Conduits and Earthing Protection"
              style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              onError={(e) => {
                if (import.meta.env.DEV) {
                  console.error(`[SolarSolution] Failed to load electrical distribution image: ${e.currentTarget.src}`);
                }
              }}
            />
            <div style={{ padding: '0.85rem 0.25rem 0' }}>
              <div style={{ fontWeight: 700, color: 'var(--color-forest-dark)', fontSize: '0.95rem' }}>
                Engineered Cabling & Protective Conduits
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                4 sq.mm tin-annealed DC cabling routed through rigid uPVC conduits, AC distribution boards with 32A MCB breakers, and external copper earth pit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
