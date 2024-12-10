import express from 'express';
import taskRoutes from './routes/taskRoutes';
import procedureRoutes from './routes/procedureRoutes';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/procedures', procedureRoutes);

app.listen(port, () => { console.log(`Server running on http://localhost:${port}`); });
