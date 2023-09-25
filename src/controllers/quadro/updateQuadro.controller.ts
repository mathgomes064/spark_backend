import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateQuadroService } from "../../services/quadro/updateQuadro.service";

export const updateQuadroController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.quadro_id
        const quadro = req.body;

        const updatedQuadro = await updateQuadroService(quadro, id);
        return res.json(updatedQuadro);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}