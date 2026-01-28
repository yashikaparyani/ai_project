import { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'LLM', 'AI Model', 'AI Agent', 'NLP', 'ML Service', 'Computer Vision'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading AI Products...</p>
        </div>
      ) : (
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
                <div className="product-pricing">{product.pricing}</div>
              </div>

              <button className="card-btn">
                <span>Learn More</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
