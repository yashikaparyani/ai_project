import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-badge">
            <span>📬</span>
            <span>Get In Touch</span>
          </div>
          <h1 className="contact-title">
            Let's Build the <span className="gradient-text">Future Together</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how Ai Bureau can help transform your business with AI
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="content-grid">
          <div className="contact-info">
            <h2>Why Reach Out?</h2>
            
            <div className="info-card">
              <div className="info-icon">💼</div>
              <div className="info-text">
                <h3>Enterprise Solutions</h3>
                <p>Custom AI solutions tailored to your business needs</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🎯</div>
              <div className="info-text">
                <h3>Free Consultation</h3>
                <p>Get expert advice on your AI strategy</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🚀</div>
              <div className="info-text">
                <h3>Quick Integration</h3>
                <p>Seamlessly integrate our AI products into your workflow</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🤝</div>
              <div className="info-text">
                <h3>Partnership Opportunities</h3>
                <p>Collaborate with us on cutting-edge AI research</p>
              </div>
            </div>

            <div className="contact-details">
              <h3>Other Ways to Connect</h3>
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <span>contact@aibureau.ai</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="status-message success">
                  <span>✓</span>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="status-message error">
                  <span>✕</span>
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
