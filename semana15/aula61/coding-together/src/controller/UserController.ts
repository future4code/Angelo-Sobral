import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";
import tokenGenerator, { AuthenticationData } from "../services/tokenGenerator";

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(req: Request, res: Response) {
      try {
         const { id } = req.params
         const result = await userBusiness.getUserById(id);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getAllUsers(req: Request, res: Response) {
      try {
         const token = req.headers.authorization as string

         const verifiedToken: AuthenticationData = tokenGenerator.verify(token)

         const result = await userBusiness.getAllUsers(verifiedToken.role);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

export default new UserController()