import { AppError, handleError } from "../../errors/appError"
import { Request, Response } from "express-serve-static-core"
import { userDeleteService } from "../../services/user/deleteUser.service"


export const userDeleteController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        await userDeleteService(id);
        return res.status(204).json({message: "Usuário deletado"});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}