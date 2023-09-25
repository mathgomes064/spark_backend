import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { createCompartimentoService } from "../../services/compartimentos/createCompartimento.service"

export const createCompartimentoController = async(req: Request, res: Response) => {
    try {
        const compartimento = req.body

        const newCompartimento = await createCompartimentoService(compartimento)
        
        return res.status(201).send(newCompartimento)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}