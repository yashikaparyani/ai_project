# 🤖 Ai Bureau - AI Products Showcase Website

A stunning, modern MERN stack website showcasing AI Bureau's cutting-edge artificial intelligence products including Large Language Models (LLMs), AI Agents, Computer Vision models, and NLP solutions.

## ✨ Features

- **Modern UI/UX**: Beautiful AI-themed design with animations and gradients
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Showcase**: Display AI products with categories, features, and specifications
- **Dynamic Content**: Products loaded from MongoDB database
- **Contact Form**: Functional contact form with backend integration
- **Smooth Navigation**: React Router for seamless page transitions
- **AI-Themed Animations**: Floating orbs, pulsing effects, and gradient animations

## 🎯 Product Categories

- **Large Language Models (LLMs)**: Advanced natural language processing models
- **AI Agents**: Autonomous agents for task automation
- **Computer Vision**: Visual recognition and analysis systems
- **NLP Solutions**: Sentiment analysis and text processing
- **ML Services**: Predictive analytics and machine learning platforms
- **AI Tools**: Specialized AI development tools

## 🛠️ Tech Stack

### Frontend
- **React**: UI library for building interactive interfaces
- **React Router**: Client-side routing
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with animations and gradients

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for storing products and contacts
- **Mongoose**: MongoDB object modeling

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Seed the database:
```bash
node seed.js
```

5. Start the backend server:
```bash
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>

# Install backend dependencies and start
cd backend
npm install
node seed.js
npm start

# In a new terminal, install frontend dependencies and start
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to see the website!

## 📁 Project Structure

```
ai_project/
├── backend/
│   ├── models/
│   │   ├── Contact.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   └── productRoutes.js
│   ├── package.json
│   ├── seed.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── Products.jsx
│   │   │   ├── Products.css
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Gradient Color Scheme**: Cyan (#4fd1c5), Blue (#63b3ed), Purple (#805ad5)
- **Dark Theme**: Professional dark background (#0a0a1e, #1a1a3e)
- **Animations**: 
  - Floating AI orb
  - Pulsing effects
  - Gradient shifts
  - Hover transitions
  - Particle effects
- **Typography**: Clean, modern fonts with proper hierarchy
- **Responsive**: Mobile-first design approach

## 📄 Pages

1. **Home**: Hero section with capabilities and statistics
2. **Products**: Filterable grid of AI products with detailed information
3. **About**: Company mission, values, team stats, and technology stack
4. **Contact**: Contact form with backend integration

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Contact
- `POST /api/contact` - Submit contact form

## 🌟 Key Features

### Product Cards
- Eye-catching design with hover effects
- Category badges
- Feature lists
- Technology tags
- Status indicators (Active, In Development, Coming Soon)
- Pricing information

### Navigation
- Fixed navbar with blur effect
- Smooth scroll behavior
- Mobile-responsive menu
- Active link highlighting

### Hero Section
- Animated AI orb visualization
- Statistics display
- Call-to-action buttons
- Feature chips

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai_bureau
# or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai_bureau
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Admin dashboard for product management
- [ ] Blog section
- [ ] API documentation page
- [ ] Live demo integration
- [ ] Newsletter subscription
- [ ] Dark/Light mode toggle
- [ ] Multi-language support

## 👨‍💻 Development

### Build for Production

Frontend:
```bash
cd frontend
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For inquiries, please use the contact form on the website or reach out to contact@aibureau.ai

---

Built with ❤️ using MERN Stack

**Ai Bureau** - Pioneering the Future of Artificial Intelligence
