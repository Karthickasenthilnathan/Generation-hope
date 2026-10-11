import React from 'react';
import { FileCheck, AlertCircle, Shield, HelpCircle, Mail, MapPin } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function EvidenceDossier() {
  const { evidenceDossier } = PROJECT_DATA;

  return (
    <section className="section section-alt" id="evidence">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FileCheck size={14} />
            <span>Audit & Verification</span>
          </div>
          <h2 className="section-title">Evidence Dossier & Technical Audit Notes</h2>
          <p className="section-description">
            Complete transparency for Generation Hope evaluators. Cross-referencing primary project documents, 
            field adjustments, and transparent discrepancy notes.
          </p>
        </div>

        {/* Primary Documents Summary Stack */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--color-forest-dark)', marginBottom: '1.25rem' }}>
            Primary Archival Evidence Cross-Reference
          </h3>

          <div className="evidence-cards-stack">
            {evidenceDossier.documentsSummary.map((doc, idx) => (
              <div key={idx} className="evidence-doc-row">
                <div>
                  <div className="evidence-doc-name">{doc.docName}</div>
                  <div className="evidence-doc-type">{doc.type}</div>
                </div>
                <div className="evidence-doc-facts">
                  {doc.verifiedFacts}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Discrepancy Clarifications */}
        <div className="discrepancy-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <AlertCircle size={22} color="var(--color-gold-hover)" />
            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-forest-dark)' }}>
              Transparent Clarification of Document Variations
            </h3>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            To uphold scientific and reporting integrity, we document every adjustment between the initial conceptual proposal 
            and the final commissioned engineering system:
          </p>

          <div>
            {evidenceDossier.discrepancyClarifications.map((item, idx) => (
              <div key={idx} className="discrepancy-item">
                <div className="discrepancy-title">
                  {idx + 1}. {item.item}
                </div>
                <div className="discrepancy-text">
                  {item.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Official Inquiries */}
        <div style={{ marginTop: '3.5rem', backgroundColor: '#fff', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--color-forest-dark)', marginBottom: '0.35rem' }}>
              Project Location & Verification Queries
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              For institutional verification, contact Sri Sai Ram Engineering College, Leo Nagar, Poonthandalam, West Tambaram, Chennai 600044.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#top"
              className="btn btn-secondary btn-sm"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
