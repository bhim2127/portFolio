import express from 'express';
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js';

const router = express.Router();

// Routes for projects
router.get('/', getProjects); // GET all projects
router.get('/:id', getProjectById); // GET a single project
router.post('/', createProject); // POST create a new project
router.put('/:id', updateProject); // PUT update a project
router.delete('/:id', deleteProject); // DELETE a project

export default router;