// src/app.ts
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
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'UP' });
});

// 404 handler for unknown routes
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use('/', routes);

export default app;
