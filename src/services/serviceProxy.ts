import type { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

interface CustomRequest extends Request {
  user?: {
    userId: string;
    userName: string;
    userRole: string;
    email: string;
  };
}

import {
  USER_SERVICE_URL,
  ORDER_SERVICE_URL,
  PRODUCT_SERVICE_URL,
  CART_SERVICE_URL,
  PAYMENT_SERVICE_URL,
  NOTIFICATION_SERVICE_URL,
  EMAIL_SERVICE_URL,
} from '../config';

const serviceMap: { [key: string]: string | undefined } = {
  '/user-service': USER_SERVICE_URL,
  '/order-service': ORDER_SERVICE_URL,
  '/product-service': PRODUCT_SERVICE_URL,
  '/cart-service': CART_SERVICE_URL,
  '/payment-service': PAYMENT_SERVICE_URL,
  '/notification-service': NOTIFICATION_SERVICE_URL,
  '/email-service': EMAIL_SERVICE_URL,
};

export const proxyRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const baseRoute = `/${req.url.split('/')[1]}`;
  const isPublicRoute = req.path.includes('public');

  const onProxyReq = !isPublicRoute
    ? {
        proxyReq: (proxyReq: any, req: CustomRequest) => {
          proxyReq.setHeader('user', JSON.stringify(req.user));
        },
        error: (err: any) => {
          console.error(err);
        },
      }
    : {};

  const targetService = serviceMap[baseRoute];
  if (targetService) {
    const proxy = createProxyMiddleware<Request, Response>({
      target: targetService,
      changeOrigin: true,
      pathRewrite: { [`^${baseRoute}`]: '' },
      on: onProxyReq,
    });
    return proxy(req, res, next);
  } else {
    next();
  }
};
