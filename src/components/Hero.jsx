import React from 'react';
import { 
  Sun, 
  MapPin, 
  Zap, 
  BatteryCharging, 
  Leaf, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';
import { getAssetUrl } from '../utils/assetHelper';

export default function Hero() {
  const iconMap = {
    Sun: <Sun size={20} />,
    BatteryCharging: <BatteryCharging size={20} />,
    Zap: <Zap size={20} />,
    Leaf: <Leaf size={20} />,
    Users: <Users size={20} />,
    TrendingUp: <TrendingUp size={20} />,
  };

  return (
    <section className="section hero-section" id="overview">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            

            <h1 className="hero-title">
              Rural Solar Electrification Station in <span className="hero-highlight">Poonthandalam</span>
            </h1>

            <p className="hero-lead">
              A youth-engineered, community-centered renewable electricity station delivering reliable clean energy to 
              <strong> Nallur Government High School</strong> and safeguarding 100+ rural families during monsoon floods 
              and cyclone-triggered power failures.
            </p>

            <div className="hero-location-card">
              <MapPin size={20} color="var(--color-forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--color-forest-dark)' }}>Project Site: </strong>
                <span>Government High School (Nallur GHSS), Poonthandalam Village, Kundrathur Block, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#solution" className="btn btn-primary">
                <span>Explore Implemented Solution</span>
                <ArrowRight size={16} />
              </a>
              <a href="#specs" className="btn btn-secondary">
                <span>Technical Specifications</span>
              </a>
              <a href="#impact" className="btn btn-secondary">
                <span>Climate & Social Impact</span>
              </a>
            </div>
          </div>

          <div className="hero-media-wrap">
            <div className="hero-media-card">
              <img
                src={getAssetUrl("/images/solar-rooftop-array.jpg")}
                alt="2.68 kWp Solar Rooftop Array at Nallur Government High School"
                className="hero-media-img"
                onError={(e) => {
                  if (import.meta.env.DEV) {
                    console.error(`[Hero] Failed to load image: ${e.currentTarget.src}`);
                  }
                }}
              />
              <div className="hero-media-caption">
                <span>Rooftop Solar PV Array • Nallur GHSS</span>
                <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>8 × 335Wp Polycrystalline</span>
              </div>
            </div>

            <div className="hero-float-badge">
              <ShieldCheck size={20} color="var(--color-gold)" />
              <div>
                <div style={{ fontSize: '0.725rem', opacity: 0.85, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Commissioned & Operational
                </div>
                <div>IEEE HAC/SIGHT Grant Awardee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Metrics Grid */}
        <div className="metrics-grid">
          {PROJECT_DATA.summaryMetrics.map((item) => (
            <div key={item.id} className="metric-card">
              <div className="metric-icon-wrap">
                {iconMap[item.icon] || <Zap size={20} />}
              </div>
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-subtext">{item.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
