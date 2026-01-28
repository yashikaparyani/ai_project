import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="neural-network"></div>
        <div className="particles"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">✨</span>
          <span>Next-Gen AI Solutions</span>
        </div>

        <h1 className="hero-title">
          Welcome to <span className="gradient-text">Ai Bureau</span>
        </h1>

        <p className="hero-subtitle">
          Pioneering the Future of Artificial Intelligence
        </p>

        <p className="hero-description">
          Unlock unprecedented possibilities with our cutting-edge AI products. 
          From advanced Large Language Models to autonomous AI Agents, we deliver 
          enterprise-grade solutions that transform how you work with artificial intelligence.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">AI Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>

        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">
            <span>Explore Products</span>
            <span className="btn-icon">→</span>
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            <span>Schedule Demo</span>
            <span className="btn-icon">📅</span>
          </Link>
        </div>

        <div className="hero-features">
          <div className="feature-chip">🧠 Advanced LLMs</div>
          <div className="feature-chip">🤖 AI Agents</div>
          <div className="feature-chip">👁️ Computer Vision</div>
          <div className="feature-chip">💬 NLP Solutions</div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="ai-orb">
          <div className="orb-core"></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
          <div className="orb-ring"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
