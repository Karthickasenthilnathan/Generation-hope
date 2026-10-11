import React from 'react';
import { Users, GraduationCap, Building2, ShieldCheck, Heart } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function TeamPartners() {
  const { team } = PROJECT_DATA;

  return (
    <section className="section" id="team">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Users size={14} />
            <span>Youth Leadership & Mentorship</span>
          </div>
          <h2 className="section-title">The Project Team & Community Partners</h2>
          <p className="section-description">
            A youth-led engineering initiative by student volunteers from Sri Sai Ram Engineering College, 
            guided by academic faculty and supported by local community leaders.
          </p>
        </div>

        {/* Mentors Section */}
        <div>
          <div className="team-subsection-title">
            <GraduationCap size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Principal Investigators & Faculty Mentors
          </div>

          <div className="mentors-grid">
            {team.mentors.map((mentor, idx) => (
              <div key={idx} className="mentor-card">
                <div className="mentor-name">{mentor.name}</div>
                <div className="mentor-role">{mentor.role}</div>
                <div className="mentor-desig">{mentor.designation}</div>
                <div className="mentor-contrib">{mentor.contribution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Youth Student Leaders Section */}
        <div>
          <div className="team-subsection-title">
            <Users size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Youth Student Engineering Volunteers
          </div>

          <div className="youth-leads-grid">
            {team.youthLeaders.map((lead, idx) => (
              <div key={idx} className="youth-card">
                <div className="youth-name">{lead.name}</div>
                <div className="youth-role">{lead.role}</div>
                <div className="youth-details">{lead.details}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Institutional Partners */}
        <div>
          <div className="team-subsection-title">
            <Building2 size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Collaborating Institutional & Community Partners
          </div>

          <div className="partners-grid">
            {team.communityPartners.map((partner, idx) => (
              <div key={idx} className="partner-card">
                <div className="partner-entity">{partner.entity}</div>
                <div className="partner-rep">{partner.representative}</div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {partner.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', padding: '1rem 1.5rem', backgroundColor: 'var(--color-forest-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-forest-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ShieldCheck size={20} color="var(--color-forest)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.8rem', color: 'var(--color-forest-dark)', margin: 0 }}>
            <strong>Privacy & Data Compliance Notice:</strong> In accordance with ethical reporting standards, personal student/faculty contact numbers, private email addresses, and handwritten signatures have been excluded from this public dossier. All participant roles and affiliations are verified from IEEE project documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
