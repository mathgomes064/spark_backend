import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { createQuadroService } from "../../services/quadro/createQuadro.service"

export const createQuadroController = async(req: Request, res: Response) => {
    try {
        const quadro = req.body
        console.log(quadro)
        const newQuadro = await createQuadroService(quadro)
        
        return res.status(201).send(newQuadro)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}