import React from 'react';
import { AlertTriangle, CloudRain, BookOpen, PhoneOff, Home, CheckCircle2 } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function CommunityChallenge() {
  const { challenge } = PROJECT_DATA;

  return (
    <section className="section section-alt" id="challenge">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <AlertTriangle size={14} />
            <span>Problem Context</span>
          </div>
          <h2 className="section-title">The Community Challenge in Poonthandalam</h2>
          <p className="section-description">
            How recurring monsoon floods and central grid outages threatened rural school education, 
            communication lifelines, and disaster refuge.
          </p>
        </div>

        <div className="challenge-grid">
          <div className="challenge-main-card">
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--color-forest-dark)' }}>
                Vulnerability to Seasonal Monsoons & Grid Collapse
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                {challenge.villageContext}
              </p>
              <p>
                {challenge.monsoonVulnerability}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-forest)' }}>
                Documented Consequences of Multi-Day Power Outages:
              </h4>

              <div className="consequences-list">
                <div className="consequence-item">
                  <BookOpen size={24} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div className="consequence-title">Disruption of Public Schooling & Digital Learning</div>
                    <div className="consequence-desc">
                      Classrooms with over 150 students regularly lacked ceiling fan ventilation during sweltering days 
                      and lighting during overcast monsoon weeks, halting digital literacy lessons in the computer laboratory.
                    </div>
                  </div>
                </div>

                <div className="consequence-item">
                  <PhoneOff size={24} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div className="consequence-title">Severed Emergency Communication Lifelines</div>
                    <div className="consequence-desc">
                      Extended 3–4 day blackout cycles drained cellphones across the village. Residents could not contact 
                      emergency services, family members, or local administration during heavy rains.
                    </div>
                  </div>
                </div>

                <div className="consequence-item">
                  <Home size={24} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div className="consequence-title">Unpowered Flood Relief Sanctuary</div>
                    <div className="consequence-desc">
                      Nallur GHSS serves as the designated village rehabilitation center during seasonal inundations. In past floods, 
                      evacuees had to spend nights in total darkness without drinking water pump power or device charging.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="survey-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={20} color="var(--color-gold)" />
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                Verified Field Evidence
              </span>
            </div>

            <h3>Door-to-Door Needs Assessment Survey</h3>

            <p>
              Before engineering the station, the student team collaborated with the Poonthandalam Village Panchayat 
              and school administration to conduct a thorough field assessment in <strong>{challenge.needsAssessmentSurvey.date}</strong>.
            </p>

            <div className="survey-stat-callout">
              <div className="survey-stat-num">85%+</div>
              <div style={{ fontSize: '0.825rem', opacity: 0.9 }}>
                of surveyed households prioritized continuous lighting and phone charging as essential during monsoon emergencies.
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
              <em>"{challenge.needsAssessmentSurvey.keyFinding}"</em>
            </p>

            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '0.8rem', opacity: 0.85 }}>
              Documented in IEEE HAC SIGHT Project Assessment Records (Survey Sample: Poonthandalam Panchayat)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
