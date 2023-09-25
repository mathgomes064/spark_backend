import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateProprietarioService } from "../../services/proprietario/updateProprietario.service"

export const updateProprietarioController = async(req: Request, res: Response) =>{
    try {
        const proprietario = req.body
        const id = req.params.id

        const updatedProprietario = await updateProprietarioService(proprietario, id);

        return res.send(updatedProprietario );
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}