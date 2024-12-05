import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
  user: {
    userId: string;
    userName: string;
    userRole: string;
    email: string;
  };
}

interface RequestWithUser extends Request {
  user?: DecodedToken;
}

const protect = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string,
      ) as DecodedToken;

      if (!decoded) {
        return res.status(401).json({
          status: false,
          data: {},
          error: 'Not authorized, token failed',
        });
      }

      req.user = decoded as DecodedToken;

      next();
    } catch (error: any) {
      console.error(error);
      return res.status(401).json({
        status: false,
        data: {},
        error: 'Not authorized, token failed',
      });
    }
  } else {
    return res.status(401).json({
      status: false,
      data: {},
      error: 'No token provided, authorization denied',
    });
  }
};

export default protect;
