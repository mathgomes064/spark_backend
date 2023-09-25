import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { userListService } from "../../services/user/listUser.service";


export const userListController = async(req: Request, res: Response) =>{
    try {
        const users = await userListService();

        return res.status(200).send(users);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}