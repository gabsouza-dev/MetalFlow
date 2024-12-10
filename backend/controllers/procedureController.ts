import { Request, Response } from 'express';
import db from '../config/dbConfig';

export const getProceduresByTask = (req: Request, res: Response) => {
    const { taskId } = req.params;
    db.query('SELECT * FROM procedures WHERE task_id = ?', [taskId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(result);
    });
};

export const createProcedure = (req: Request, res: Response) => {
    const { task_id, name, status } = req.body;
    const query = 'INSERT INTO procedures (task_id, name, status) VALUES (?, ?, ?)';
    db.query(query, [task_id, name, status], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create procedure' });
        }
        res.status(201).json({ id: result.insertId });
    });
};
