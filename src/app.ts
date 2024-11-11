import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { logger } from './utils/logger';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(logger);

// API routes
app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP' });
});

app.use('/api/v1', routes);

// 404 handler for unknown routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

export default app;
