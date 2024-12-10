import express from 'express';
import { getTasks, createTask } from '../controllers/taskController';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);

export default router;
