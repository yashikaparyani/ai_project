import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="capabilities-section">
        <div className="capabilities-container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Capabilities</span></h2>
            <p className="section-subtitle">Empowering businesses with state-of-the-art AI technology</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🧠</div>
              <h3>Large Language Models</h3>
              <p>Advanced LLMs with billions of parameters for natural language understanding and generation</p>
              <ul>
                <li>Multi-language support</li>
                <li>Context retention</li>
                <li>Fine-tuning capabilities</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🤖</div>
              <h3>AI Agents</h3>
              <p>Autonomous agents that plan, execute, and adapt to complex multi-step tasks</p>
              <ul>
                <li>Task automation</li>
                <li>Self-learning systems</li>
                <li>Multi-tool integration</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-icon">👁️</div>
              <h3>Computer Vision</h3>
              <p>State-of-the-art visual recognition and analysis for enterprise applications</p>
              <ul>
                <li>Object detection</li>
                <li>Image classification</li>
                <li>Video analysis</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-icon">💬</div>
              <h3>NLP Solutions</h3>
              <p>Advanced natural language processing for text understanding and generation</p>
              <ul>
                <li>Sentiment analysis</li>
                <li>Text classification</li>
                <li>Named entity recognition</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-icon">📊</div>
              <h3>ML Services</h3>
              <p>Comprehensive machine learning platforms for predictive analytics and modeling</p>
              <ul>
                <li>Predictive modeling</li>
                <li>AutoML capabilities</li>
                <li>Real-time inference</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-icon">⚡</div>
              <h3>Edge AI</h3>
              <p>Deploy AI models on edge devices for low-latency, real-time processing</p>
              <ul>
                <li>On-device inference</li>
                <li>Model optimization</li>
                <li>Privacy-focused</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="section-title">Why Choose <span className="gradient-text">Ai Bureau</span></h2>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3>Cutting-Edge Technology</h3>
              <p>We leverage the latest advancements in AI research to deliver state-of-the-art solutions</p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>
              <h3>Enterprise-Grade Security</h3>
              <p>Bank-level encryption and compliance with international security standards</p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>
              <h3>Scalable Infrastructure</h3>
              <p>Cloud-native architecture that grows with your business needs</p>
            </div>

            <div className="why-card">
              <div className="why-number">04</div>
              <h3>24/7 Expert Support</h3>
              <p>Dedicated AI engineers available round-the-clock for your success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
