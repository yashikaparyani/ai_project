import Product from './models/Product.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const sampleProducts = [
  {
    name: "Bureau GPT",
    category: "LLM",
    description: "Advanced Large Language Model powered by cutting-edge transformer architecture. Trained on diverse datasets for superior natural language understanding and generation.",
    features: [
      "Multi-language support (100+ languages)",
      "Context window of 128K tokens",
      "Fine-tunable for specific domains",
      "Real-time streaming responses",
      "Advanced reasoning capabilities"
    ],
    icon: "🧠",
    technology: ["Transformer", "PyTorch", "CUDA", "Triton"],
    status: "Active",
    pricing: "Starting at $0.002 per 1K tokens"
  },
  {
    name: "Vision AI Pro",
    category: "Computer Vision",
    description: "State-of-the-art computer vision model for object detection, image segmentation, and visual understanding at enterprise scale.",
    features: [
      "Real-time object detection",
      "Semantic segmentation",
      "Facial recognition & analysis",
      "OCR with 99.9% accuracy",
      "Custom model training"
    ],
    icon: "👁️",
    technology: ["CNN", "YOLO", "TensorFlow", "OpenCV"],
    status: "Active",
    pricing: "Custom enterprise pricing"
  },
  {
    name: "AutoAgent Suite",
    category: "AI Agent",
    description: "Autonomous AI agents that can plan, execute, and adapt to complex multi-step tasks. Powered by advanced reasoning and tool-use capabilities.",
    features: [
      "Autonomous task planning",
      "Multi-tool integration",
      "Self-correction & learning",
      "Chain-of-thought reasoning",
      "API & web automation"
    ],
    icon: "🤖",
    technology: ["ReAct", "LangChain", "Function Calling", "Vector DB"],
    status: "Active",
    pricing: "$499/month per agent"
  },
  {
    name: "Sentiment Analyzer",
    category: "NLP",
    description: "Deep learning-based sentiment analysis for social media monitoring, customer feedback analysis, and brand reputation management.",
    features: [
      "Multi-lingual sentiment detection",
      "Emotion classification",
      "Aspect-based analysis",
      "Real-time processing",
      "Custom domain adaptation"
    ],
    icon: "💭",
    technology: ["BERT", "RoBERTa", "Transformers", "spaCy"],
    status: "Active",
    pricing: "$299/month"
  },
  {
    name: "Predictive Analytics Engine",
    category: "ML Service",
    description: "End-to-end machine learning platform for predictive modeling, forecasting, and data-driven decision making.",
    features: [
      "Automated feature engineering",
      "Multiple algorithm support",
      "Time series forecasting",
      "A/B testing framework",
      "Model monitoring & drift detection"
    ],
    icon: "📊",
    technology: ["XGBoost", "Random Forest", "Neural Networks", "AutoML"],
    status: "Active",
    pricing: "$799/month"
  },
  {
    name: "Code Assistant AI",
    category: "AI Agent",
    description: "AI-powered coding assistant that understands context, generates code, finds bugs, and suggests optimizations across multiple programming languages.",
    features: [
      "Code generation & completion",
      "Bug detection & fixing",
      "Code review & optimization",
      "Documentation generation",
      "Multi-language support"
    ],
    icon: "💻",
    technology: ["CodeLLM", "Tree-sitter", "LSP", "AST Analysis"],
    status: "In Development",
    pricing: "Coming Q2 2026"
  },
  {
    name: "Voice Intelligence",
    category: "NLP",
    description: "Advanced speech recognition and synthesis system with natural voice generation and real-time transcription capabilities.",
    features: [
      "Real-time speech-to-text",
      "Natural text-to-speech",
      "Voice cloning",
      "Accent adaptation",
      "Multi-speaker diarization"
    ],
    icon: "🎤",
    technology: ["Whisper", "Tacotron", "WaveNet", "Conformer"],
    status: "Active",
    pricing: "$0.006 per minute"
  },
  {
    name: "Neural Search",
    category: "AI Model",
    description: "Semantic search engine powered by neural networks for finding relevant information beyond keyword matching.",
    features: [
      "Semantic similarity search",
      "Multi-modal search (text, image, video)",
      "Personalized results",
      "Real-time indexing",
      "Privacy-focused architecture"
    ],
    icon: "🔍",
    technology: ["CLIP", "FAISS", "Sentence Transformers", "Elasticsearch"],
    status: "Active",
    pricing: "$399/month"
  },
  {
    name: "Quantum AI Lab",
    category: "AI Model",
    description: "Experimental quantum-classical hybrid AI models for solving optimization problems beyond classical computing capabilities.",
    features: [
      "Quantum circuit optimization",
      "Hybrid quantum-classical training",
      "Optimization problem solving",
      "Research collaboration tools",
      "Cloud quantum access"
    ],
    icon: "⚛️",
    technology: ["Qiskit", "Pennylane", "Quantum Circuits", "Variational Algorithms"],
    status: "Coming Soon",
    pricing: "Research partnerships available"
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
