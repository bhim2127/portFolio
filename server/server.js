import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/images', express.static('public/images')); // Serve images
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Seed initial projects
const seedProjects = async () => {
  const Project = (await import('./models/Project.js')).default;
  const count = await Project.countDocuments();
  if (count === 0) {
    const projects = [
      {
        title: 'Project 1',
        description: 'A web app built with MERN stack for task management.',
        liveLink: 'https://example.com/project1',
        githubLink: 'https://github.com/bhim027',
        image: 'http://localhost:8000/images/project1.png',
      },
      {
        title: 'Project 2',
        description: 'An e-commerce platform with payment integration.',
        liveLink: 'https://example.com/project2',
        githubLink: 'https://github.com/bhim027',
        image: 'http://localhost:8000/images/project2.png',
      },
      {
        title: 'Project 3',
        description: 'A portfolio website with modern design.',
        liveLink: 'https://example.com/project3',
        githubLink: 'https://github.com/bhim027',
        image: 'http://localhost:8000/images/project3.png',
      },
    ];
    await Project.insertMany(projects);
    console.log('Projects seeded');
  }
};

seedProjects();

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});