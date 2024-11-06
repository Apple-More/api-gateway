// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../errors/ApiError';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  if (err instanceof ApiError) {
    // Handle known API errors
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error('Unexpected Error:', err.message);
  return res.status(500).json({ error: 'Internal Server Error' });
};
/* eslint-enable @typescript-eslint/no-unused-vars */
