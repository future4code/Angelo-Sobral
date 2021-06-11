import * as jwt from "jsonwebtoken";
import { authData } from "../types";

const expiresIn = "7d";

export const createToken = (payload: authData): string => {
  const token = jwt.sign({ id: payload.id }, process.env.JWT_KEY as string, {
    expiresIn,
  });
  return token;
};

export const getTokenData = (token: string): authData => {
  return jwt.verify(token, process.env.JWT_KEY!) as authData;
};
