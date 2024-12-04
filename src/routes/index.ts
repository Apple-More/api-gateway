import { Router } from 'express';
import protect from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';
import { proxyRequest } from '../services/serviceProxy';

const router = Router();

router.use(rateLimiter);
router.use(protect);
router.use(proxyRequest);

export default router;
