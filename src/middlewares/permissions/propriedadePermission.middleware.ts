import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const permissionMiddleware = (tabela: string, permissionLevel: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const token = req.headers.authorization;

        jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
        const userPermissions = decoded.user.permission;  

        let permissions: any = {}

        userPermissions.forEach((element: any) => {
          if(element.tabela === tabela)
            permissions = element
        });
        
        if(permissions[permissionLevel]){
          next()
        }else{
          return res.status(401).send("Usuário não autorizado") 
        }
      })
    }catch (error) {
        return res.status(401).send("Usuário não autorizado") 
    }
  }
};
