import React from 'react';
import { Award, ShieldCheck, Info } from 'lucide-react';

export default function ReviewerBanner({ onOpenReviewerModal }) {
  return (
    <aside className="reviewer-banner" aria-label="Reviewer Notice">
      <div className="container reviewer-banner-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <span className="reviewer-badge-label">
            <ShieldCheck size={16} />
            Verified Project Dossier
          </span>
          <span>Prepared for the Generation Hope Youth Climate Programme Review Committee</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="disclaimer-pill">
            Independent Application Submission
          </span>
          <button
            onClick={onOpenReviewerModal}
            style={{
              textDecoration: 'underline',
              color: 'var(--color-forest)',
              fontWeight: 700,
              fontSize: '0.775rem'
            }}
          >
            Reviewer Notes
          </button>
        </div>
      </div>
    </aside>
  );
}
