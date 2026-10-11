import React from 'react';
import { X, CheckCircle2, ShieldAlert, Award, FileText, Download, Printer } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function ReviewerModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close reviewer modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="timeline-badge" style={{ backgroundColor: 'var(--color-forest-subtle)', color: 'var(--color-forest)' }}>
            Generation Hope Reviewer Dossier
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Reference: IEEE 22-HAC-103
          </span>
        </div>

        <h2 id="modal-title" style={{ fontSize: '1.6rem', color: 'var(--color-forest-dark)', marginBottom: '0.75rem' }}>
          Executive Summary for Programme Evaluators
        </h2>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          This concise briefing consolidates verified metrics, technical sizing, and community outcomes 
          extracted from on-site engineering and audited IEEE humanitarian reports for the Rural Solar 
          Electrification Station in Poonthandalam, Tamil Nadu.
        </p>

        {/* Key Metrics Quick Table */}
        <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
            Verified Quantitative Outcomes
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', fontSize: '0.85rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Solar PV Peak Power</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>2.68 kWp</strong> (8 × 335Wp)
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Energy Storage Bank</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>7.2 kWh</strong> (48V 150Ah)
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Daily Clean Energy Yield</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>~12 kWh / day</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Annual CO₂ Abatement</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>~4.0 Tonnes / yr</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Community Beneficiaries</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>100+ Families</strong>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>School Cost Savings</span>
              <strong style={{ color: 'var(--color-forest-dark)', fontSize: '1.05rem' }}>₹34,560 / yr</strong>
            </div>
          </div>
        </div>

        {/* Reviewer Verification Checklist */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
            Key Strengths for Generation Hope Criteria
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Youth-Led Implementation:</strong> Ideated, designed, and executed by student volunteers from Sri Sai Ram Engineering College in partnership with IEEE student branch.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Dual Educational & Climate Resilience Function:</strong> Powers 2 classrooms, office, and computer lab on weekdays; transforms into a flood relief shelter and phone charging hub during cyclones.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Verified Institutional Backing:</strong> Officially awarded and monitored by IEEE HAC/SIGHT (Project 22-HAC-103) with local endorsements from Poonthandalam Village Panchayat and Government High School.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <CheckCircle2 size={16} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong>Low-Cost Scalability:</strong> Total turnkey installation completed under ₹2,82,000 INR (~$3,450 USD), creating a replicable blueprint for thousands of monsoon-vulnerable rural schools.</span>
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
            * This dossier reflects verified project records as of October 2026.
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print Dossier</span>
            </button>
            <button onClick={onClose} className="btn btn-primary btn-sm">
              Close Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
