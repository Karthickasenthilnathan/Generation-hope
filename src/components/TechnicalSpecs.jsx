import React, { useState } from 'react';
import { Cpu, Sun, Battery, Wrench, Shield, CheckCircle2, ListFilter, Printer } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function TechnicalSpecs() {
  const { technicalSpecs } = PROJECT_DATA;
  const [activeTabId, setActiveTabId] = useState(technicalSpecs.tabs[0].id);

  const activeTab = technicalSpecs.tabs.find((t) => t.id === activeTabId) || technicalSpecs.tabs[0];

  const getTabIcon = (id) => {
    switch (id) {
      case 'pv': return <Sun size={18} />;
      case 'inverter': return <Cpu size={18} />;
      case 'battery': return <Battery size={18} />;
      case 'civil_safety': return <Shield size={18} />;
      default: return <Wrench size={18} />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="section section-alt" id="specs">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Engineering System</span>
          </div>
          <h2 className="section-title">Technical Specifications & Load Design</h2>
          <p className="section-description">
            Complete hardware breakdown and electrical design verified from vendor procurement bills, 
            engineering commissioning records, and site inspection reports.
          </p>
        </div>

        {/* Tabbed Specs Box */}
        <div className="specs-wrapper">
          <div className="specs-tabs-bar" role="tablist">
            {technicalSpecs.tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTabId === tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`specs-tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>

          <div className="specs-tab-content">
            <div className="specs-items-grid">
              {activeTab.items.map((item, idx) => (
                <div key={idx} className="spec-item-box">
                  <span className="spec-item-label">{item.label}</span>
                  <span className="spec-item-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Connected Loads Breakdown Table */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-forest-dark)' }}>
                School Facility Load Distribution & Wiring Allocation
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Directly connected appliances across Nallur Government High School.
              </p>
            </div>

            <button onClick={handlePrint} className="btn btn-secondary btn-sm" aria-label="Print technical specifications">
              <Printer size={15} />
              <span>Print Technical Dossier</span>
            </button>
          </div>

          <div className="loads-table-wrap">
            <table className="loads-table">
              <thead>
                <tr>
                  <th>School Facility / Room</th>
                  <th>Ceiling Fans</th>
                  <th>LED Tube Lights</th>
                  <th>Charging Points / Sockets</th>
                  <th>Operational Purpose</th>
                </tr>
              </thead>
              <tbody>
                {technicalSpecs.connectedLoadsTable.map((row, idx) => (
                  <tr key={idx}>
                    <td><strong>{row.room}</strong></td>
                    <td>{row.fans} Nos</td>
                    <td>{row.lights} Nos</td>
                    <td>{row.sockets} Ports</td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            <CheckCircle2 size={16} color="var(--color-forest)" />
            <span>
              <strong>Field note:</strong> All connections routed through rigid uPVC surface conduits to eliminate electrical risks for students. 
              Assessment matrix logs 57 total active power points including test and expansion points.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
