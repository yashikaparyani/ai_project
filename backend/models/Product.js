import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['LLM', 'AI Model', 'AI Agent', 'ML Service', 'Computer Vision', 'NLP']
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  icon: {
    type: String,
    default: '🤖'
  },
  technology: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['Active', 'In Development', 'Coming Soon'],
    default: 'Active'
  },
  pricing: {
    type: String
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
