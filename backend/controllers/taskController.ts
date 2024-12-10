import { Request, Response } from 'express';
import db from '../config/dbConfig';

export const getTasks = (req: Request, res: Response) => {
  db.query('SELECT * FROM tasks', (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(result);
  });
};

export const createTask = (req: Request, res: Response) => {
  const { task_name, start_date, end_date, progress, status } = req.body;
  const query = 'INSERT INTO tasks (task_name, start_date, end_date, progress, status) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [task_name, start_date, end_date, progress, status], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create task' });
    }
    res.status(201).json({ id: result.insertId });
  });
};
