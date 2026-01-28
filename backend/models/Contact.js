import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  company: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true
  },
  interest: {
    type: String,
    enum: ['LLM', 'AI Agent', 'Custom AI Model', 'Consultation', 'Other']
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Closed'],
    default: 'New'
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
