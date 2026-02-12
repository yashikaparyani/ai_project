import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Agent', 'Computer Vision', 'CV', 'ML Service', 'AI Model', 'LLM', 'Chatbot'];

  const products = [
    {
      _id: '1',
      name: 'CCTV Surveillance',
      category: 'Computer Vision',
      icon: '📹',
      description: 'Advanced AI-powered surveillance system for real-time threat detection and anomaly recognition.',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Face Recognition'],
      technology: ['YOLOv8', 'OpenCV', 'TensorFlow'],
      status: 'Active',
      pricing: 'Custom'
    },
    {
      _id: '2',
      name: 'Network Management System',
      category: 'AI Agent',
      icon: '🌐',
      description: 'Autonomous network optimization and security monitoring agent to ensure 99.9% uptime.',
      features: ['Traffic Analysis', 'Auto-Scaling', 'Security Patching'],
      technology: ['Python', 'K8s', 'Prometheus'],
      status: 'Active',
      pricing: '$499/mo'
    },
    {
      _id: '3',
      name: 'AI Agents for Amazon Seller',
      category: 'AI Agent',
      icon: '🛒',
      description: 'Automate pricing strategies, inventory management, and customer support for Amazon sellers.',
      features: ['Dynamic Pricing', 'Review Analysis', 'Auto-Restocking'],
      technology: ['NLP', 'Reinforcement Learning'],
      status: 'Active',
      pricing: '$99/mo'
    },
    {
      _id: '4',
      name: 'AI Agents for Flipkart Seller',
      category: 'AI Agent',
      icon: '🛍️',
      description: 'Boost sales and streamline operations on Flipkart with dedicated AI automation agents.',
      features: ['Order Processing', 'Competitor Analysis', 'Sales Forecasting'],
      technology: ['Scikit-learn', 'Pandas'],
      status: 'In Development',
      pricing: '$99/mo'
    },
    {
      _id: '5',
      name: 'AI Based Assessment System',
      category: 'AI Model',
      icon: '📝',
      description: 'Automated evaluation and proctoring platform for educational institutions and corporate hiring.',
      features: ['Auto-Grading', 'Anti-Cheating', 'Performance Analytics'],
      technology: ['BERT', 'React', 'Node.js'],
      status: 'Active',
      pricing: 'Per User'
    },
    {
      _id: '6',
      name: 'AI Based ATCS',
      category: 'Computer Vision',
      icon: '🚦',
      description: 'Smart traffic control system that adapts signal timings in real-time to reduce congestion.',
      features: ['Vehicle Counting', 'Adaptive Signals', 'Emergency Priority'],
      technology: ['IoT', 'Edge AI', 'Cloud'],
      status: 'Pilot',
      pricing: 'Government'
    },
    {
      _id: '7',
      name: 'AI Attendance System',
      category: 'Computer Vision',
      icon: '📅',
      description: 'Contactless, facial recognition-based attendance tracking for secure and efficient workforce management.',
      features: ['Face Comparison', 'Liveness Detection', 'Geo-Fencing'],
      technology: ['FaceNet', 'MobileNet'],
      status: 'Active',
      pricing: '$2/user'
    },
    {
      _id: '8',
      name: 'AI Reporting Tools',
      category: 'ML Service',
      icon: '📊',
      description: 'Intelligent data analysis suite that generates actionable insights and automated reports.',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Data Visualization'],
      technology: ['Tableau', 'PowerBI', 'Python'],
      status: 'Active',
      pricing: '$199/mo'
    },
    {
      _id: '9',
      name: 'WhatsApp Agents',
      category: 'Chatbot',
      icon: '💬',
      description: 'AI-driven customer engagement and support agents integrated directly into WhatsApp Business.',
      features: ['24/7 Support', 'Auto-Replies', 'Order Tracking'],
      technology: ['WhatsApp API', 'Dialogflow'],
      status: 'Active',
      pricing: '$0.05/conversation'
    },
    {
      _id: '10',
      name: 'Chat Bot',
      category: 'Chatbot',
      icon: '🤖',
      description: 'Versatile conversational AI for website and app support, capable of handling complex queries.',
      features: ['Context Awareness', 'Multi-Language', 'Seamless Handoff'],
      technology: ['GPT-4', 'LangChain'],
      status: 'Active',
      pricing: 'Usage Based'
    },
    {
      _id: '11',
      name: 'LLM',
      category: 'LLM',
      icon: '🧠',
      description: 'State-of-the-art Large Language Models for natural language understanding and content generation.',
      features: ['Text Generation', 'Summarization', 'Translation'],
      technology: ['Transformers', 'PyTorch'],
      status: 'Beta',
      pricing: 'API Cost'
    }
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="products-section">
      <div className="products-header">
        <div className="section-badge">
          <span>🚀</span>
          <span>Our AI Arsenal</span>
        </div>
        <h1 className="section-title">
          Cutting-Edge <span className="gradient-text">AI Products</span>
        </h1>
        <p className="section-description">
          Explore our comprehensive suite of AI solutions designed to revolutionize your business
        </p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card">
            <div className="card-header">
              <div className="product-icon">{product.icon}</div>
              <div className="product-category">{product.category}</div>
            </div>

            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h4>Key Features:</h4>
              <ul>
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-tech">
              {product.technology.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="product-footer">
              <div className="product-status">
                <span className={`status-badge ${product.status.toLowerCase().replace(' ', '-')}`}>
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
