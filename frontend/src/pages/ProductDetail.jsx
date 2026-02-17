import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './ProductDetail.css';
import nms1 from '../assets/nms1.jpeg';
import nms2 from '../assets/nms2.jpeg';
import nms3 from '../assets/nms3.jpeg';

import cctvImg from '../assets/cctv.png';
import assessmentImg from '../assets/assessment.png';
import atcsImg from '../assets/atcs.png';
import attendanceImg from '../assets/attendance.png';
import chatbotImg from '../assets/chatbot.png';
import llmImg from '../assets/llm.png';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nmsImages = [nms1, nms2, nms3];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % nmsImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + nmsImages.length) % nmsImages.length);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product Not Found</h2>
                <Link to="/products" className="back-link">Back to Products</Link>
            </div>
        );
    }

    // Image Mapping
    const getProductImage = (id) => {
        switch (id) {
            case 'cctv-surveillance': return <img src={cctvImg} alt={product.title} className="product-detail-image" />;
            case 'ai-assessment-system': return <img src={assessmentImg} alt={product.title} className="product-detail-image" />;
            case 'smart-traffic-control': return <img src={atcsImg} alt={product.title} className="product-detail-image" />;
            case 'attendance-management': return <img src={attendanceImg} alt={product.title} className="product-detail-image" />;
            case 'chatbot': return <img src={chatbotImg} alt={product.title} className="product-detail-image" />;
            case 'enterprise-llm': return <img src={llmImg} alt={product.title} className="product-detail-image" />;
            case 'network-management-system':
                return (
                    <div className="nms-carousel">
                        <button className="carousel-btn prev-btn" onClick={prevImage}>❮</button>
                        <img
                            src={nmsImages[currentImageIndex]}
                            alt={`NMS Interface ${currentImageIndex + 1}`}
                            className="nms-image-slide"
                        />
                        <button className="carousel-btn next-btn" onClick={nextImage}>❯</button>

                        <div className="carousel-indicators">
                            {nmsImages.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(idx)}
                                ></span>
                            ))}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="placeholder-content">
                        <span>🖼️</span>
                        <p>Product Image Coming Soon</p>
                    </div>
                );
        }
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">

                {/* Header */}
                <div className="product-header">
                    <div className="product-detail-icon">{product.icon}</div>
                    <h1 className="product-detail-title">{product.title}</h1>
                    <p className="product-tagline">{product.tagline}</p>
                </div>

                {/* Main Content: Image & Description */}
                <div className="product-content-grid">
                    {/* Left: Image Placeholder */}
                    <div className={`product-image-area ${product.id === 'network-management-system' ? 'nms-area' : ''}`}>
                        {getProductImage(product.id)}
                    </div>

                    {/* Right: Description & Tech */}
                    <div className="product-info-column">
                        <p className="product-description">
                            {product.description}
                        </p>

                        <div className="tech-stack-section">
                            <h3>Technology Stack</h3>
                            <div className="tech-tags">
                                {product.techStack.map((tech, index) => (
                                    <span key={index} className="tech-pill">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <section className="product-features-section">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        {product.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="product-cta">
                    <h2>Book a Demo for {product.title}</h2>
                    <Link to="/contact">
                        <button className="cta-btn">Book a Demo</button>
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default ProductDetail;
