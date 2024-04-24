import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const secretKey = "QAXXSWEDC";

export const tokeverification = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.auth;

  if (!auth || auth.scheme !== "bearer") {
    return res.status(401).send("schemen is in  valid");
  }

  const data = jwt.verify(auth.token, secretKey) as jwt.JwtPayload;
  req.auth.user = data["user"];
};

export const getToken = (
  user_data: string,
  cb: (error: any, token?: string) => void
) => {
  jwt.sign({ user: user_data }, secretKey, { expiresIn: "300s" }, cb);
};

export const extractToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers["authorization"];
  if (!bearer) {
    return res.status(404);
  }

  const auth = bearer.split(" ")[1];
  req.auth = {
    scheme: auth[0],
    token: auth[1],
  };

  if (!req.auth.token) {
    return res.status(401).json("access denied");
  } else {
    next();
  }
};

declare global {
  namespace Express {
    interface Request {
      auth: {
        scheme: string;
        token: string;
        user?: object;
      };
    }
  }
}
