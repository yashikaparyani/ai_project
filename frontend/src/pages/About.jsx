import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-badge">
            <span>🌟</span>
            <span>About Ai Bureau</span>
          </div>
          <h1 className="about-title">
            Pioneering the <span className="gradient-text">AI Revolution</span>
          </h1>
          <p className="about-subtitle">
            Leading the charge in artificial intelligence innovation since 2024
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                At Ai Bureau, we're committed to democratizing access to cutting-edge artificial intelligence. 
                Our mission is to empower businesses and developers with enterprise-grade AI solutions that 
                drive innovation, efficiency, and growth.
              </p>
              <p className="mission-text">
                We believe that AI should be accessible, reliable, and powerful. That's why we've built a 
                comprehensive suite of AI products ranging from advanced Large Language Models to autonomous 
                AI Agents, all designed to solve real-world problems.
              </p>
            </div>
            <div className="mission-visual">
              <div className="visual-orb"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <h2 className="section-title">Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation First</h3>
              <p>We constantly push the boundaries of what's possible with AI technology</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Privacy & Security</h3>
              <p>Your data security and privacy are our top priorities in every solution we build</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Creating AI solutions that make a positive difference worldwide</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working closely with our clients to understand and solve their unique challenges</p>
            </div>

            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Excellence</h3>
              <p>Delivering exceptional quality in every product and service we offer</p>
            </div>

            <div className="value-card">
              <div className="value-icon">📚</div>
              <h3>Continuous Learning</h3>
              <p>Staying at the forefront of AI research and development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <h2 className="section-title">
            Powered by <span className="gradient-text">AI Experts</span>
          </h2>
          <p className="team-description">
            Our team consists of world-class AI researchers, engineers, and innovators from leading 
            tech companies and research institutions. Together, we're building the future of AI.
          </p>

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">50+</div>
              <div className="stat-label">AI Researchers</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">100+</div>
              <div className="stat-label">Patents Filed</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">500+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <div className="tech-container">
          <h2 className="section-title">Our Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-icon">🔥</span>
              <span>PyTorch</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🧮</span>
              <span>TensorFlow</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">⚡</span>
              <span>CUDA</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🔗</span>
              <span>LangChain</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🦜</span>
              <span>Transformers</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">☁️</span>
              <span>AWS/Azure</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">🐳</span>
              <span>Docker/K8s</span>
            </div>
            <div className="tech-item">
              <span className="tech-icon">📊</span>
              <span>Vector DBs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
