import React from 'react';
import { RefreshCw, Wrench, ShieldCheck, Layers, IndianRupee, MapPin } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function SustainabilityReplication() {
  const { sustainability } = PROJECT_DATA;

  return (
    <section className="section section-alt" id="sustainability">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <RefreshCw size={14} />
            <span>Operational Longevity</span>
          </div>
          <h2 className="section-title">Sustainability, Maintenance & Replication Blueprint</h2>
          <p className="section-description">
            A low-maintenance operational protocol and an open, modular engineering model ready for 
            replication across flood-vulnerable rural schools.
          </p>
        </div>

        {/* Maintenance Protocol Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--color-forest-dark)', marginBottom: '1.25rem', textAlign: 'center' }}>
            Structured Operations & Preventative Maintenance Protocol
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {sustainability.maintenancePlan.map((plan, idx) => (
              <div key={idx} className="metric-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="timeline-badge" style={{ fontSize: '0.8rem', padding: '0.25rem 0.65rem' }}>
                    {plan.frequency} Check
                  </span>
                  <Wrench size={18} color="var(--color-forest)" />
                </div>

                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-forest-dark)', marginBottom: '0.35rem' }}>
                  {plan.task}
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-gold-hover)', marginBottom: '0.65rem' }}>
                  Lead: {plan.responsible}
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {plan.procedure}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scalability Blueprint Card */}
        <div style={{ backgroundColor: '#fff', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-forest-subtle)', color: 'var(--color-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-forest-dark)' }}>
                Blueprint for Climate-Resilient Rural School Microgrids
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                How this proven model can be deployed across similar coastal and monsoon regions.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.4rem' }}>
                Modular, Non-Proprietary Architecture
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {sustainability.replicationBlueprint.modularity}
              </p>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.4rem' }}>
                Exceptional Capital Efficiency
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {sustainability.replicationBlueprint.totalCost} Every dollar translates directly into resilient community electricity access and avoided diesel costs.
              </p>
            </div>

            <div style={{ padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '0.4rem' }}>
                High Scalability in Coastal Districts
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                {sustainability.replicationBlueprint.scalability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
