import React, { useState } from 'react';
import { Sun, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Challenge', href: '#challenge' },
    { label: 'Solution', href: '#solution' },
    { label: 'Specs', href: '#specs' },
    { label: 'Impact & SDGs', href: '#impact' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Team', href: '#team' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header" id="top">
        <div className="container header-inner">
          <a href="#top" className="brand-wrap" aria-label="Generation Hope - Poonthandalam Solar Station">
            <div className="brand-logo-badge">
              <Sun size={22} />
            </div>
            <div className="brand-text-wrap">
              <span className="brand-title">Generation Hope</span>
              <span className="brand-subtitle">Rural Solar Station • Poonthandalam</span>
            </div>
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-cta-group">
            <a href="#solution" className="btn btn-primary btn-sm header-action-btn">
              <span>Explore Solar Station</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--color-forest)', fontSize: '1rem' }}>Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X size={22} color="var(--color-forest)" />
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="mobile-drawer-link"
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="#solution"
              onClick={handleLinkClick}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Explore Solar Station</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
