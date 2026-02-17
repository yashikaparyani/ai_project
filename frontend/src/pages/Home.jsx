import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './Home.css';
import FeatureImage from '../assets/image1.jpg';

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
          <Link to="/product/cctv-surveillance" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">📹</div>
              <h3>CCTV Surveillance</h3>
              <p>AI-powered CCTV system with real-time threat detection and automated alerts.</p>
            </div>
          </Link>
          <Link to="/product/network-management-system" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🌐</div>
              <h3>Network Management System</h3>
              <p>AI-driven network monitoring, predictive maintenance, and troubleshooting.</p>
            </div>
          </Link>
          <Link to="/product/amazon-ai-agents" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🤖</div>
              <h3>AI Agents for Amazon Seller</h3>
              <p>Automate and optimize Amazon seller operations with smart AI agents.</p>
            </div>
          </Link>
          <Link to="/product/flipkart-ai-agents" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🤖</div>
              <h3>AI Agents for Flipkart Seller</h3>
              <p>Boost Flipkart seller performance using intelligent AI automation.</p>
            </div>
          </Link>

          {/* Featured Image - 5th Item (Middle Column, Spanning 2 Rows) */}
          {/* Featured Image - 5th Item (Middle Column, Spanning 2 Rows) */}
          <Link to="/products" className="product-card-link featured-image-link">
            <div className="product-card featured-image-card animate-on-scroll">
              <img src={FeatureImage} alt="AI Solutions" className="featured-product-image" />
              <div className="featured-overlay">
                <h3>Comprehensive AI Ecosystem</h3>
                <p>Integrated solutions for every business need</p>
              </div>
            </div>
          </Link>
          <Link to="/product/ai-assessment-system" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">📝</div>
              <h3>AI Based Assessment System</h3>
              <p>Automated, intelligent assessment and evaluation platform.</p>
            </div>
          </Link>
          <Link to="/product/smart-traffic-control" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🚦</div>
              <h3>AI Smart Traffic Control System</h3>
              <p>Adaptive traffic control system powered by AI for smart cities.</p>
            </div>
          </Link>
          <Link to="/product/attendance-management" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🕒</div>
              <h3>AI Based Attendance Management System</h3>
              <p>Face recognition and smart attendance tracking using AI.</p>
            </div>
          </Link>
          <Link to="/product/ai-reporting-tools" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">📈</div>
              <h3>AI Tools for Reporting</h3>
              <p>Automated analytics and reporting with actionable insights.</p>
            </div>
          </Link>
          <Link to="/product/chatbot" className="product-card-link">
            <div className="product-card glass-effect animate-on-scroll">
              <div className="product-icon">🤖</div>
              <h3>Chat Bot</h3>
              <p>Custom AI chatbots for customer support and engagement.</p>
            </div>
          </Link>
          <Link to="/product/enterprise-llm" className="product-card-link">
            <div className="product-card glass-effect">
              <div className="product-icon">🧠</div>
              <h3>Enterprise LLM & Custom AI Models</h3>
              <p>Large Language Models for advanced text understanding and generation.</p>
            </div>
          </Link>
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

          <div className="capabilities-grid-modern">
            <div className="capability-item animate-on-scroll" id="cap-1">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">🧠</div>
              </div>
              <h3>Cognitive Language Engines</h3>
              <p>Beyond text generation. Context-aware models that act as your business's central nervous system.</p>
              <div className="modern-features">
                <span>Context Recall</span>
                <span>•</span>
                <span>Reasoning</span>
                <span>•</span>
                <span>Synthesis</span>
              </div>
            </div>

            <div className="capability-item animate-on-scroll" id="cap-2">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">🤖</div>
              </div>
              <h3>Autonomous Workforce</h3>
              <p>Self-managing agents that plan, execute, and learn. True automation that evolves with your needs.</p>
              <div className="modern-features">
                <span>Planning</span>
                <span>•</span>
                <span>Execution</span>
                <span>•</span>
                <span>Self-Correction</span>
              </div>
            </div>

            <div className="capability-item animate-on-scroll" id="cap-3">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">👁️</div>
              </div>
              <h3>Visual Intelligence</h3>
              <p>Transform video feeds into actionable data. Real-time precision for security, quality control, and analytics.</p>
              <div className="modern-features">
                <span>Detection</span>
                <span>•</span>
                <span>Tracking</span>
                <span>•</span>
                <span>Analysis</span>
              </div>
            </div>

            <div className="capability-item animate-on-scroll" id="cap-4">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">💬</div>
              </div>
              <h3>Semantic Understanding</h3>
              <p>Decode intent and sentiment instantly. Turn unstructured text into structured, decision-ready insights.</p>
              <div className="modern-features">
                <span>Intent</span>
                <span>•</span>
                <span>Sentiment</span>
                <span>•</span>
                <span>Extraction</span>
              </div>
            </div>

            <div className="capability-item animate-on-scroll" id="cap-5">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">📊</div>
              </div>
              <h3>Predictive Horizons</h3>
              <p>Stop guessing. Use historical data to forecast trends and optimize complex decision-making in real-time.</p>
              <div className="modern-features">
                <span>Forecasting</span>
                <span>•</span>
                <span>Optimization</span>
                <span>•</span>
                <span>Trends</span>
              </div>
            </div>

            <div className="capability-item animate-on-scroll" id="cap-6">
              <div className="icon-modern-wrapper">
                <div className="icon-glow-ring"></div>
                <div className="capability-icon-modern">⚡</div>
              </div>
              <h3>Edge Intelligence</h3>
              <p>Maximum power, zero latency. Deploy sophisticated AI models directly on devices for privacy and speed.</p>
              <div className="modern-features">
                <span>On-Device</span>
                <span>•</span>
                <span>Real-Time</span>
                <span>•</span>
                <span>Secure</span>
              </div>
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
            <div className="stat-icon">🏢</div>
            <div className="stat-number" data-target="25">0</div>
            <div className="stat-suffix">+</div>
            <div className="stat-label">Industries Served</div>
          </div>
          <div className="stat-card animate-on-scroll" id="stat-3">
            <div className="stat-icon">💖</div>
            <div className="stat-number" data-target="98">0</div>
            <div className="stat-suffix">%</div>
            <div className="stat-label">Client Satisfaction</div>
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

          <div className="why-visual">
            <img src={FeatureImage} alt="Why Choose AI Bureau" className="why-feature-image" />
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

            <div className="why-card glass-effect animate-on-scroll" id="why-5">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">05</div>
              </div>
              <h3>Seamless Integration</h3>
              <p>Plug-and-play solutions that integrate effortlessly with your existing tech stack</p>
              <div className="card-hover-effect"></div>
            </div>

            <div className="why-card glass-effect animate-on-scroll" id="why-6">
              <div className="why-number-wrapper">
                <div className="number-glow"></div>
                <div className="why-number">06</div>
              </div>
              <h3>Continuous Innovation</h3>
              <p>Stay ahead of the curve with regular updates and cutting-edge feature releases</p>
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
