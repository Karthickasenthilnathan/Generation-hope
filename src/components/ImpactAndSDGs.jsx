import React from 'react';
import { Leaf, Award, Globe, HeartHandshake, Trees, DollarSign, School, CheckCircle2 } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function ImpactAndSDGs() {
  const { impact, sdgs } = PROJECT_DATA;

  return (
    <section className="section" id="impact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Globe size={14} />
            <span>Impact & Sustainability</span>
          </div>
          <h2 className="section-title">Verified Climate Impact & SDG Alignment</h2>
          <p className="section-description">
            Quantifiable environmental metrics and verified community outcomes logged in the project's 
            formal assessment matrix and monitoring records.
          </p>
        </div>

        {/* Impact Dual Columns: Environmental & Social */}
        <div className="impact-columns-grid">
          <div className="impact-category-card">
            <div className="impact-card-title">
              <Leaf size={22} color="var(--color-forest)" />
              <h3>Environmental & Carbon Mitigation</h3>
            </div>

            <div className="impact-items-stack">
              {impact.environmental.map((item, idx) => (
                <div key={idx} className="impact-metric-block">
                  <div className="impact-metric-top">
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                      {item.title}
                    </span>
                    <span className="impact-stat-highlight">{item.metric}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-category-card">
            <div className="impact-card-title">
              <HeartHandshake size={22} color="var(--color-gold-hover)" />
              <h3>Social, Educational & Resilience Impact</h3>
            </div>

            <div className="impact-items-stack">
              {impact.social.map((item, idx) => (
                <div key={idx} className="impact-metric-block" style={{ borderLeftColor: 'var(--color-gold)' }}>
                  <div className="impact-metric-top">
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                      {item.title}
                    </span>
                    <span className="impact-stat-highlight" style={{ color: 'var(--color-gold-hover)' }}>
                      {item.metric}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SDG Section */}
        <div style={{ marginTop: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold-hover)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              United Nations 2030 Agenda
            </span>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--color-forest-dark)', marginTop: '0.35rem' }}>
              Alignment with UN Sustainable Development Goals
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Each goal is mapped directly to measured project indicators and field interventions.
            </p>
          </div>

          <div className="sdg-grid">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="sdg-card">
                <div className="sdg-card-header" style={{ backgroundColor: sdg.color }}>
                  <div className="sdg-number-badge">{sdg.number}</div>
                  <div className="sdg-header-text">{sdg.title}</div>
                </div>

                <div className="sdg-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span className="sdg-tag">{sdg.alignment}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {sdg.targets}
                    </span>
                  </div>

                  <p className="sdg-desc">{sdg.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
