import express from 'express';
import { getProceduresByTask, createProcedure } from '../controllers/procedureController';

const router = express.Router();

router.get('/:taskId', getProceduresByTask);
router.post('/', createProcedure);

export default router;
