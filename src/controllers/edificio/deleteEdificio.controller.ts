import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { deleteEdificioService } from "../../services/edificio/deleteEdificio.service"

export const deleteEdificioController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        await deleteEdificioService(id)
        return res.status(204).json({message: "Edificio Deletado"});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}