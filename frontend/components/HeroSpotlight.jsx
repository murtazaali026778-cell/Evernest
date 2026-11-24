import React, { useState, useEffect } from 'react';
import './HeroSpotlight.css';

const slides = [
  {
    id: 1,
    tag: 'SPOTLIGHT · HYDROFLOW',
    title: 'HydroFlow 40oz',
    description: 'HYDROFLOW – Insulated Stainless Steel Tumbler with Handle. In stock now.',
    primaryBtn: 'Shop this tumbler',
    secondaryBtn: 'All HydroFlow tumblers',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1400&q=80',
    alt: 'Insulated stainless steel water bottle'
  },
  {
    id: 2,
    tag: 'NEW ARRIVAL · THERMOPRO',
    title: 'ThermoPro 32oz',
    description: 'THERMOPRO – Double-Wall Vacuum Flask. Keeps drinks ice cold for 24 hours.',
    primaryBtn: 'Shop this bottle',
    secondaryBtn: 'All ThermoPro bottles',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1400&q=80',
    alt: 'Matte black insulated water flask'
  },
  {
    id: 3,
    tag: 'BESTSELLER · PURESIP',
    title: 'PureSip Glass 24oz',
    description: 'PURESIP – Borosilicate Glass Bottle with Protective Silicone Sleeve.',
    primaryBtn: 'Shop this bottle',
    secondaryBtn: 'All PureSip collection',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1400&q=80',
    alt: 'Minimalist glass water bottle'
  }
];

export default function HeroSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="hero-spotlight">
      
      <div className="hero-image-wrapper">
        <img
          src={currentSlide.image}
          alt={currentSlide.alt}
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Main Content Container */}
      <div className="hero-content-container">
        <div className="hero-text-block">
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">{currentSlide.tag}</span>
          </div>

          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-description">{currentSlide.description}</p>

          <div className="hero-actions">
            <button className="btn-primary">{currentSlide.primaryBtn}</button>
            <button className="btn-secondary">{currentSlide.secondaryBtn}</button>
          </div>
        </div>

        {/* Bottom Controls: Arrows & Pagination Dots */}
        <div className="hero-controls">
          <div className="hero-arrows">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="arrow-btn"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="arrow-btn"
            >
              &#8250;
            </button>
          </div>

          <div className="hero-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`indicator-bar ${
                  index === currentIndex ? 'active' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}