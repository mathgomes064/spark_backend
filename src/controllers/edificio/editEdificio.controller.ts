import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { editEdificioService } from "../../services/edificio/editEdifico.service"

export const editEdificioController = async(req: Request, res: Response) => {
    try {
        const edificio = req.body
        const id = req.params.id

        const updateEdificio = await editEdificioService(edificio, id);

        return res.send(updateEdificio);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}