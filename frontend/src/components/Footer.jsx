import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🤖</span>
              <span className="logo-text">Ai Bureau</span>
            </div>
            <p className="footer-description">
              Leading the AI revolution with cutting-edge solutions for enterprises worldwide. 
              Transform your business with our advanced AI products.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>⚙</span>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <span>💬</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products">Large Language Models</Link></li>
              <li><Link to="/products">AI Agents</Link></li>
              <li><Link to="/products">Computer Vision</Link></li>
              <li><Link to="/products">NLP Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Community Forum</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Ai Bureau. All rights reserved.
            </p>
            <p className="tagline">
              Powered by <span className="gradient-text">Artificial Intelligence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
