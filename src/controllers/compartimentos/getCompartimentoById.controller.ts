import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { compartimentoByIdService } from "../../services/compartimentos/getCompartimentoById.service";



export const compartimentoByIdController = async(req: Request, res: Response) =>{
    try {
        const compartimento_id = req.params.compart_id
        let compartimento = await compartimentoByIdService(compartimento_id)
        return res.send(compartimento)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}