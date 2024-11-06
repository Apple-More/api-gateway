import httpProxy from 'http-proxy';
import { Request, Response } from 'express';
import {
  USER_SERVICE_URL,
  ORDER_SERVICE_URL,
  PRODUCT_SERVICE_URL,
} from '../config';

const apiProxy = httpProxy.createProxyServer();

const serviceMap: { [key: string]: string | undefined } = {
  '/users': USER_SERVICE_URL,
  '/orders': ORDER_SERVICE_URL,
  '/products': PRODUCT_SERVICE_URL,
};

export const proxyRequest = (req: Request, res: Response) => {
  const baseRoute = `/${req.url.split('/')[1]}`;

  if (serviceMap[baseRoute]) {
    apiProxy.web(req, res, { target: serviceMap[baseRoute] }, (err) => {
      console.error('Error forwarding request:', err);
      res.status(500).send('An error occurred while processing your request.');
    });
  } else {
    res.status(404).send('Service not found.');
  }
};
