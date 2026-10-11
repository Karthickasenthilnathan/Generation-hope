import React from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function Timeline() {
  const { timeline } = PROJECT_DATA;

  return (
    <section className="section" id="timeline">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Clock size={14} />
            <span>Implementation Journey</span>
          </div>
          <h2 className="section-title">Verified Implementation Timeline & Milestones</h2>
          <p className="section-description">
            From initial grassroots community surveys to structural installation, safety commissioning, 
            and long-term operational stewardship.
          </p>
        </div>

        <div className="timeline-list">
          {timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node" />
              <div className="timeline-content-card">
                <div className="timeline-meta">
                  <span className="timeline-date">
                    <Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    {item.date}
                  </span>
                  <span className="timeline-badge">{item.badge}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
