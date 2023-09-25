import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/user";
import { AppError, handleError } from "../../errors/appError";
import { userLoginService } from "../../services/login/userLogin.service";

export const userLoginController = async(req: Request, res: Response) =>{
    try {
        const { email, password }: IUserLogin = req.body;

        const token = await userLoginService({ email, password });
  
        return res.status(200).json({token: token});
        
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}