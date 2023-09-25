import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updatePropriedadeService } from "../../services/propriedade/updatePropriedade.service"

export const updatePropriedadeController = async(req: Request, res: Response) =>{
    try {
        const propriedade = req.body
        const id = req.params.id

        const updatedPropriedade = await updatePropriedadeService(propriedade, id);

        return res.send(updatedPropriedade);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}