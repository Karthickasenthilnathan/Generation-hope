import React, { useState } from 'react';
import { Camera, Maximize2, X, CheckCircle } from 'lucide-react';
import { PROJECT_DATA } from '../data/projectData';

export default function PhotoGallery() {
  const { photos } = PROJECT_DATA;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} />
            <span>On-Site Photographic Evidence</span>
          </div>
          <h2 className="section-title">Authentic Project Installation & Launch Gallery</h2>
          <p className="section-description">
            High-resolution visual documentation captured on-site during installation, safety commissioning, 
            and the community launch ceremony at Nallur Government High School.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-card"
              onClick={() => setSelectedPhoto(photo)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedPhoto(photo);
              }}
              aria-label={`View enlarged photo: ${photo.title}`}
            >
              <div className="gallery-card-img-wrap" style={{ position: 'relative' }}>
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(19, 42, 32, 0.75)',
                    color: '#fff',
                    padding: '0.3rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Maximize2 size={14} />
                </div>
              </div>

              <div className="gallery-card-info">
                <span className="gallery-card-tag">{photo.category}</span>
                <h3 className="gallery-card-title">{photo.title}</h3>
                <p className="gallery-card-caption">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <CheckCircle size={16} color="var(--color-forest)" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
          All photographs are original field records from the 2023 installation and launch at Poonthandalam Village, Tamil Nadu.
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="modal-close-btn"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              style={{ width: '100%', maxHeight: '520px', objectFit: 'contain', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', backgroundColor: '#000' }}
            />

            <span className="gallery-card-tag">{selectedPhoto.category}</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-forest-dark)', margin: '0.35rem 0 0.5rem 0' }}>
              {selectedPhoto.title}
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
