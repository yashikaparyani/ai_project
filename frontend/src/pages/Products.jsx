import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import ProductsBanner from '../assets/image2.png';
import { productsData } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Agent', 'Computer Vision', 'CV', 'ML Service', 'AI Model', 'LLM', 'Chatbot'];

  // Map productsData to match the structure if needed, or use directly
  const products = productsData;

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
        <div className="products-banner-wrapper">
          <img src={ProductsBanner} alt="AI Products" className="products-banner-image" />
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
          <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
            <div className="product-card">
              <div className="card-header">
                <div className="product-icon">{product.icon}</div>
                <div className="product-category">{product.category}</div>
              </div>

              <h3 className="product-name">{product.title}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span>
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-tech">
                {product.techStack.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
