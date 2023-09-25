import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateCompartimentoService } from "../../services/compartimentos/updateCompartimento.service";


export const updateCompartimentoController = async(req: Request, res: Response) =>{
    try {
        const compartimento = req.body;
        const id = req.params.id

        const updatedCompartimento = await updateCompartimentoService(compartimento, id);

        return res.json(updatedCompartimento);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}