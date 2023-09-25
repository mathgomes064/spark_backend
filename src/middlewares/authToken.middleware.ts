import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const authTokenMiddleware = async(req: Request, res: Response, next: NextFunction) =>{
    try {
        const token = req.headers.authorization;

        jwt.verify(token as string, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            req.userEmail = decoded.user.email
            next()
        })
        
    } catch (error) {
        return res.status(401).json({message: "Invalid Token"})
    }
}