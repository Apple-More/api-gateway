import { createProxyMiddleware } from 'http-proxy-middleware';
import { Request, Response, NextFunction } from 'express';
import {
  USER_SERVICE_URL,
  ORDER_SERVICE_URL,
  PRODUCT_SERVICE_URL,
  CART_SERVICE_URL,
  PAYMENT_SERVICE_URL,
  NOTIFICATION_SERVICE_URL,
} from '../config';

// Service map defining paths to corresponding microservice URLs
const serviceMap: { [key: string]: string | undefined } = {
  '/users': USER_SERVICE_URL,
  '/orders': ORDER_SERVICE_URL,
  '/products': PRODUCT_SERVICE_URL,
  '/carts': CART_SERVICE_URL,
  '/payments': PAYMENT_SERVICE_URL,
  '/notifications': NOTIFICATION_SERVICE_URL,
};

// Middleware function to handle proxy requests
export const proxyRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const baseRoute = `/${req.url.split('/')[1]}`;

  const targetService = serviceMap[baseRoute];
  if (targetService) {
    // Create the proxy middleware dynamically
    const proxy = createProxyMiddleware({
      target: targetService,
      changeOrigin: true,
      pathRewrite: { [`^${baseRoute}`]: '' },
    });

    return proxy(req, res, next);
  } else {
    next(); // Pass to the next middleware (404 handler if no route matches)
  }
};
