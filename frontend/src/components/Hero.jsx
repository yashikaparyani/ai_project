import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import HeroImage from '../assets/hero-ai.png';

const Hero = () => {
  const orbRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (orbRef.current) {
      orbRef.current.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
  }, [mousePosition]);

  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="neural-network"></div>
        <div className="particles"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-element element-1"></div>
        <div className="float-element element-2"></div>
        <div className="float-element element-3"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* <div className="hero-badge">
          <span className="badge-icon">✨</span>
          <span>Next-Gen AI Solutions</span>
          <div className="badge-shine"></div>
        </div> */}

        <h1 className="hero-title">
          Welcome to <br />
          <span className="gradient-text-hero">Ai Bureau</span>
        </h1>

        <p className="hero-subtitle">
          Pioneering the Future of <span className="highlight-text">Artificial Intelligence</span>
        </p>

        <p className="hero-description">
          Unlock unprecedented possibilities with our cutting-edge AI products.
          From advanced Large Language Models to autonomous AI Agents, we deliver
          enterprise-grade solutions that transform how you work.
        </p>

        {/* Stats with Counter Animation */}
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon-small">🚀</div>
            <div className="stat-number">15+</div>
            <div className="stat-label">AI Products</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-small">⚡</div>
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon-small">🌍</div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            <span>Explore Products</span>
            <span className="btn-icon">→</span>
            <div className="btn-glow"></div>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <span>Schedule Demo</span>
            <span className="btn-icon">📅</span>
          </Link>
        </div>

        {/* Feature Chips */}
        <div className="hero-features">
          <div className="feature-chip">
            <span className="chip-icon">🧠</span>
            <span>Advanced LLMs</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">🤖</span>
            <span>AI Agents</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">👁️</span>
            <span>Computer Vision</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">💬</span>
            <span>NLP Solutions</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="badge-item">
            <span className="badge-check">✓</span>
            <span>Enterprise Ready</span>
          </div>
          <div className="badge-item">
            <span className="badge-check">✓</span>
            <span>SOC 2 Certified</span>
          </div>
          <div className="badge-item">
            <span className="badge-check">✓</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hero-visual">
        <div className="hero-image-container" ref={orbRef}>
          <img src={HeroImage} alt="AI Technology" className="hero-main-image" />
          <div className="orb-glow"></div>
        </div>

        {/* Data Streams */}
        <div className="data-streams">
          <div className="stream stream-1"></div>
          <div className="stream stream-2"></div>
          <div className="stream stream-3"></div>
        </div>

        {/* Floating Icons */}
        <div className="floating-icons">
          <div className="icon-float icon-1">⚡</div>
          <div className="icon-float icon-2">🚀</div>
          <div className="icon-float icon-3">✨</div>
          <div className="icon-float icon-4">💎</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
