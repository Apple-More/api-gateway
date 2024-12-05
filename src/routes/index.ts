import { Router } from 'express';
import protect from '../middleware/auth';
import { rateLimiter } from '../middleware/rateLimiter';
import { proxyRequest } from '../services/serviceProxy';
import publicRoutes from '../utils/public-routes';

const router = Router();

router.use(rateLimiter);

router.use((req, res, next) => {
  if (publicRoutes.includes(req.path)) {
    console.log('Public route accessed', req.path);
    return next();
  }
  protect(req, res, next);
});

router.use(proxyRequest);

export default router;
