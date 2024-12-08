import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const USER_SERVICE_URL = process.env.USER_SERVICE_URL;
export const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL;
export const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;
export const CART_SERVICE_URL = process.env.CART_SERVICE_URL;
export const PAYMENT_SERVICE_URL = process.env.PAYMENT_SERVICE_URL;
export const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL;
export const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL;
export const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET as string;
export const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET as string;
