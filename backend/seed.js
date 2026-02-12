import Product from './models/Product.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const sampleProducts = [
  {
    name: "CCTV Surveillance",
    category: "Computer Vision",
    description: "Advanced AI-powered CCTV surveillance system with intelligent monitoring, real-time threat detection, and automated alerts for enhanced security.",
    features: [
      "Real-time video monitoring",
      "Facial recognition",
      "Motion detection & tracking",
      "Automated threat alerts",
      "Cloud storage integration"
    ],
    icon: "📹",
    technology: ["Computer Vision", "Deep Learning", "Edge AI", "Cloud Storage"],
    status: "Active",
    pricing: "Custom enterprise pricing"
  },
  {
    name: "Network Management System",
    category: "ML Service",
    description: "Comprehensive network management solution with AI-driven monitoring, predictive maintenance, and automated troubleshooting capabilities.",
    features: [
      "Real-time network monitoring",
      "Automated fault detection",
      "Performance optimization",
      "Predictive maintenance",
      "Centralized dashboard"
    ],
    icon: "🌐",
    technology: ["Machine Learning", "Network Protocols", "Monitoring Tools", "Analytics"],
    status: "Active",
    pricing: "$799/month"
  },
  {
    name: "AI Agents for Amazon Seller",
    category: "AI Agent",
    description: "Intelligent AI agents designed to automate and optimize your Amazon seller operations, from inventory management to pricing strategies.",
    features: [
      "Automated inventory management",
      "Dynamic pricing optimization",
      "Sales analytics & forecasting",
      "Customer review analysis",
      "Competitor monitoring"
    ],
    icon: "🛒",
    technology: ["AI Agents", "Amazon API", "NLP", "Predictive Analytics"],
    status: "Active",
    pricing: "$299/month"
  },
  {
    name: "AI Agents for Flipkart Seller",
    category: "AI Agent",
    description: "Specialized AI agents to streamline your Flipkart seller operations with automated workflows, pricing optimization, and market insights.",
    features: [
      "Automated order processing",
      "Smart pricing strategies",
      "Inventory forecasting",
      "Performance analytics",
      "Market trend analysis"
    ],
    icon: "🏪",
    technology: ["AI Agents", "Flipkart API", "Machine Learning", "Analytics"],
    status: "Active",
    pricing: "$299/month"
  },
  {
    name: "AI Based Assessment System",
    category: "AI Model",
    description: "Intelligent assessment platform powered by AI for automated grading, adaptive testing, and comprehensive performance analysis.",
    features: [
      "Automated grading system",
      "Adaptive question difficulty",
      "Plagiarism detection",
      "Performance analytics",
      "Custom assessment creation"
    ],
    icon: "📝",
    technology: ["Natural Language Processing", "Machine Learning", "Computer Vision", "Analytics"],
    status: "Active",
    pricing: "$499/month"
  },
  {
    name: "AI Based ATCS (Traffic System)",
    category: "AI Model",
    description: "Advanced Traffic Control System using AI to optimize traffic flow, reduce congestion, and improve urban mobility through intelligent signal management.",
    features: [
      "Real-time traffic monitoring",
      "Dynamic signal optimization",
      "Congestion prediction",
      "Emergency vehicle priority",
      "Traffic flow analytics"
    ],
    icon: "🚦",
    technology: ["Computer Vision", "Deep Learning", "IoT", "Optimization Algorithms"],
    status: "Active",
    pricing: "Custom enterprise pricing"
  },
  {
    name: "AI Based Attendance Management System",
    category: "Computer Vision",
    description: "Smart attendance management system using facial recognition and AI to automate attendance tracking with high accuracy and efficiency.",
    features: [
      "Facial recognition attendance",
      "Automated report generation",
      "Real-time tracking",
      "Mobile app integration",
      "Fraud detection"
    ],
    icon: "✅",
    technology: ["Facial Recognition", "Computer Vision", "Deep Learning", "Mobile Integration"],
    status: "Active",
    pricing: "$399/month"
  },
  {
    name: "AI Reporting Tools",
    category: "ML Service",
    description: "Advanced AI-powered reporting tools that automatically generate insights, visualizations, and actionable recommendations from your data.",
    features: [
      "Automated report generation",
      "Interactive dashboards",
      "Predictive insights",
      "Natural language summaries",
      "Custom template creation"
    ],
    icon: "📊",
    technology: ["Machine Learning", "Data Analytics", "NLP", "Visualization Tools"],
    status: "Active",
    pricing: "$599/month"
  },
  {
    name: "WhatsApp Agents",
    category: "AI Agent",
    description: "Intelligent WhatsApp chatbot agents that automate customer support, sales, and engagement on WhatsApp Business platform.",
    features: [
      "24/7 automated responses",
      "Multi-language support",
      "Order tracking integration",
      "Customer query resolution",
      "Analytics & insights"
    ],
    icon: "💬",
    technology: ["NLP", "WhatsApp Business API", "AI Agents", "Cloud Integration"],
    status: "Active",
    pricing: "$249/month"
  },
  {
    name: "Chatbot",
    category: "AI Agent",
    description: "Customizable AI-powered chatbot solution for websites and applications, providing intelligent conversational experiences for customer support and engagement.",
    features: [
      "Natural language understanding",
      "Multi-platform integration",
      "Custom knowledge base",
      "Sentiment analysis",
      "Conversation analytics"
    ],
    icon: "🤖",
    technology: ["NLP", "Machine Learning", "Transformers", "API Integration"],
    status: "Active",
    pricing: "$199/month"
  },
  {
    name: "LLM",
    category: "LLM",
    description: "Advanced Large Language Model with state-of-the-art natural language understanding and generation capabilities for diverse business applications.",
    features: [
      "Multi-language support",
      "Context-aware responses",
      "Fine-tuning capability",
      "High-speed inference",
      "Enterprise-grade security"
    ],
    icon: "🧠",
    technology: ["Transformer", "Deep Learning", "PyTorch", "GPU Acceleration"],
    status: "Active",
    pricing: "Starting at $0.002 per 1K tokens"
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');
    
    // Insert sample products
    const products = await Product.insertMany(sampleProducts);
    console.log(`✨ Added ${products.length} sample products`);
    
    console.log('🎉 Database seeding completed!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
