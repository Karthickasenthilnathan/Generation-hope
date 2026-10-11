import React from 'react';
import { Sun, ArrowUp, ShieldCheck, MapPin } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Sun size={20} />
              </div>
              <span className="footer-brand-title">Generation Hope • Solar Station</span>
            </div>
            <p className="footer-desc">
              A youth-led, decentralized renewable energy and climate adaptation facility at Nallur Government High School, 
              Poonthandalam, Tamil Nadu, India.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
              <ShieldCheck size={16} color="var(--color-gold)" />
              <span>Funded under IEEE HAC/SIGHT Project 22-HAC-103</span>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation & Sections</div>
            <ul className="footer-links-list">
              <li><a href="#overview" className="footer-link">Project Overview</a></li>
              <li><a href="#challenge" className="footer-link">Community Challenge</a></li>
              <li><a href="#solution" className="footer-link">The Solar Solution</a></li>
              <li><a href="#specs" className="footer-link">Technical Specifications</a></li>
              <li><a href="#impact" className="footer-link">Climate & Social Impact</a></li>
              <li><a href="#gallery" className="footer-link">Photographic Evidence</a></li>
              <li><a href="#timeline" className="footer-link">Implementation Timeline</a></li>
              <li><a href="#team" className="footer-link">Team & Partners</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Project Site & Location</div>
            <p style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Government High School, Nallur, Poonthandalam Village, Kundrathur Block, Kancheepuram / Chengalpattu District, Tamil Nadu.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="#top"
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--color-forest-dark)', backgroundColor: '#fff', justifyContent: 'center' }}
              >
                <ArrowUp size={14} />
                <span>Back to Top</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          
          <div>
            © {new Date().getFullYear()} Rural Solar Electrification Project • Sri Sai Ram Engineering College
          </div>
        </div>
      </div>
    </footer>
  );
}
