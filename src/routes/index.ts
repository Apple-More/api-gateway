import { Router } from 'express';
// import { authenticateToken } from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';
import { proxyRequest } from '../services/serviceProxy';

const router = Router();

router.use(rateLimiter);
// router.use(authenticateToken);
router.use(proxyRequest);

export default router;
