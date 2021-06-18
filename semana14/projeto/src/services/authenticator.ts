import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";

const expiresIn = "24min";

export const createToken = (payload: AuthenticationData): string => {
  return jwt.sign(payload, process.env.JWT_KEY as string, { expiresIn });
};

export const getTokenData = (token: string): AuthenticationData => {
  return jwt.verify(
    token, String(process.env.JWT_KEY)
  ) as AuthenticationData;
};
