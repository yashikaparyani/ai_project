import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />
      
      {/* Floating Elements Background */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header animate-on-scroll">
          <div className="section-badge">
            <span className="pulse-dot"></span>
            <span>Our AI Products</span>
          </div>
          <h2 className="section-title">
            Explore Our <span className="gradient-text-animated">AI Solutions</span>
          </h2>
        </div>
        <div className="products-grid">
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">📹</div>
            <h3>CCTV Surveillance</h3>
            <p>AI-powered CCTV system with real-time threat detection and automated alerts.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🌐</div>
            <h3>Network Management System</h3>
            <p>AI-driven network monitoring, predictive maintenance, and troubleshooting.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🤖</div>
            <h3>AI Agents for Amazon Seller</h3>
            <p>Automate and optimize Amazon seller operations with smart AI agents.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🤖</div>
            <h3>AI Agents for Flipkart Seller</h3>
            <p>Boost Flipkart seller performance using intelligent AI automation.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">📝</div>
            <h3>AI Based Assessment System</h3>
            <p>Automated, intelligent assessment and evaluation platform.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🚦</div>
            <h3>AI Based ATCS (Traffic System)</h3>
            <p>Adaptive traffic control system powered by AI for smart cities.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🕒</div>
            <h3>AI Based Attendance Management System</h3>
            <p>Face recognition and smart attendance tracking using AI.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">📈</div>
            <h3>AI Reporting Tools</h3>
            <p>Automated analytics and reporting with actionable insights.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">💬</div>
            <h3>WhatsApp Agents</h3>
            <p>Conversational AI agents for WhatsApp business automation.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🤖</div>
            <h3>Chat Bot</h3>
            <p>Custom AI chatbots for customer support and engagement.</p>
          </div>
          <div className="product-card glass-effect animate-on-scroll">
            <div className="product-icon">🧠</div>
            <h3>LLM</h3>
            <p>Large Language Models for advanced text understanding and generation.</p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section" id="capabilities" data-section="capabilities">
        <div className="section-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="capabilities-container">
          <div className="section-header animate-on-scroll" id="header-capabilities">
            <div className="section-badge">
              <span className="pulse-dot"></span>
              <span>Powerful Features</span>
            </div>
            <h2 className="section-title">
              Transform Your Business with <br />
              <span className="gradient-text-animated">Next-Gen AI</span>
            </h2>
            <p className="section-subtitle">
              Cutting-edge technology that pushes the boundaries of what's possible
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card glass-effect animate-on-scroll" id="cap-1">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">🧠</div>
              </div>
              <h3>Large Language Models</h3>
              <p>Advanced LLMs with billions of parameters for natural language understanding and generation</p>
              <div className="capability-features">
                <span className="feature-tag">Multi-language</span>
                <span className="feature-tag">Context retention</span>
                <span className="feature-tag">Fine-tuning</span>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="capability-card glass-effect animate-on-scroll" id="cap-2">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">🤖</div>
              </div>
              <h3>AI Agents</h3>
              <p>Autonomous agents that plan, execute, and adapt to complex multi-step tasks</p>
              <div className="capability-features">
                <span className="feature-tag">Task automation</span>
                <span className="feature-tag">Self-learning</span>
                <span className="feature-tag">Multi-tool</span>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="capability-card glass-effect animate-on-scroll" id="cap-3">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">👁️</div>
              </div>
              <h3>Computer Vision</h3>
              <p>State-of-the-art visual recognition and analysis for enterprise applications</p>
              <div className="capability-features">
                <span className="feature-tag">Object detection</span>
                <span className="feature-tag">Classification</span>
                <span className="feature-tag">Video analysis</span>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="capability-card glass-effect animate-on-scroll" id="cap-4">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">💬</div>
              </div>
              <h3>NLP Solutions</h3>
              <p>Advanced natural language processing for text understanding and generation</p>
              <div className="capability-features">
                <span className="feature-tag">Sentiment analysis</span>
                <span className="feature-tag">Classification</span>
                <span className="feature-tag">NER</span>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="capability-card glass-effect animate-on-scroll" id="cap-5">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">📊</div>
              </div>
              <h3>ML Services</h3>
              <p>Comprehensive machine learning platforms for predictive analytics and modeling</p>
              <div className="capability-features">
                <span className="feature-tag">Predictive modeling</span>
                <span className="feature-tag">AutoML</span>
                <span className="feature-tag">Real-time</span>
              </div>
              <div className="card-shine"></div>
            </div>

            <div className="capability-card glass-effect animate-on-scroll" id="cap-6">
              <div className="card-glow"></div>
              <div className="capability-icon-wrapper">
                <div className="icon-circle"></div>
                <div className="capability-icon">⚡</div>
              </div>
              <h3>Edge AI</h3>
              <p>Deploy AI models on edge devices for low-latency, real-time processing</p>
              <div className="capability-features">
                <span className="feature-tag">On-device</span>
                <span className="feature-tag">Optimized</span>
                <span className="feature-tag">Privacy-first</span>
              </div>
              <div className="card-shine"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card animate-on-scroll" id="stat-1">
            <div className="stat-icon">⚡</div>
            <div className="stat-number" data-target="99.9">0</div>
            <div className="stat-label">Uptime %</div>
          </div>
          <div className="stat-card animate-on-scroll" id="stat-2">
            <div className="stat-icon">🚀</div>
            <div className="stat-number" data-target="50">0</div>
            <div className="stat-suffix">M+</div>
            <div className="stat-label">API Calls</div>
          </div>
          <div className="stat-card animate-on-scroll" id="stat-3">
            <div className="stat-icon">🌍</div>
            <div className="stat-number" data-target="150">0</div>
            <div className="stat-suffix">+</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-card animate-on-scroll" id="stat-4">
            <div className="stat-icon">⭐</div>
            <div className="stat-number" data-target="10">0</div>
            <div className="stat-suffix">K+</div>
            <div className="stat-label">Customers</div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="section-header animate-on-scroll" id="header-why">
            <div className="section-badge">
              <span className="pulse-dot"></span>
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-title">
              Built for <span className="gradient-text-animated">Excellence</span>
            </h2>
            <p className="section-subtitle">
              Enterprise-grade solutions that deliver real results
            </p>
          </div>
          
          <div className="why-grid">
            <div className="why-card glass-effect animate-on-scroll" id="why-1">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">01</div>
              </div>
              <h3>Cutting-Edge Technology</h3>
              <p>We leverage the latest advancements in AI research to deliver state-of-the-art solutions</p>
              <div className="card-hover-effect"></div>
            </div>

            <div className="why-card glass-effect animate-on-scroll" id="why-2">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">02</div>
              </div>
              <h3>Enterprise-Grade Security</h3>
              <p>Bank-level encryption and compliance with international security standards</p>
              <div className="card-hover-effect"></div>
            </div>

            <div className="why-card glass-effect animate-on-scroll" id="why-3">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">03</div>
              </div>
              <h3>Scalable Infrastructure</h3>
              <p>Cloud-native architecture that grows with your business needs</p>
              <div className="card-hover-effect"></div>
            </div>

            <div className="why-card glass-effect animate-on-scroll" id="why-4">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">04</div>
              </div>
              <h3>24/7 Expert Support</h3>
              <p>Dedicated AI engineers available round-the-clock for your success</p>
              <div className="card-hover-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-gradient"></div>
        </div>
        <div className="cta-container animate-on-scroll" id="cta">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-subtitle">Join thousands of companies already using our AI solutions</p>
          <div className="cta-buttons">
            <button className="cta-btn primary-btn">
              <span>Get Started</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="cta-btn secondary-btn">
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
