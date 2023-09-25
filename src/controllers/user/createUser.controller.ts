import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { userCreateService } from "../../services/user/createUser.service";

export const userCreateController = async(req: Request, res: Response) =>{
    try {
        const user = req.body;

        const newUser = await userCreateService(user);

        return res.status(201).send(newUser);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}