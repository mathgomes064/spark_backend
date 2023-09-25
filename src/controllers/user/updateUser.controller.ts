import { AppError, handleError } from "../../errors/appError"
import { Request, Response } from "express"
import { userUpdateService } from "../../services/user/updateUser.service";


export const userUpdateController = async (req: Request, res: Response) =>{
    try {
        const user = req.body;
        const id = req.params.id;
        const updateUser = await userUpdateService(user, id);
        return res.send(updateUser);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}