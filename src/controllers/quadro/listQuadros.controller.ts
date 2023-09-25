import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { listQuadroService } from "../../services/quadro/listQuadros.service";

export const listQuadroController = async(req: Request, res: Response) =>{
    try {
        const compartimento_id = req.params.compartimento_id

        const quadros = await listQuadroService(compartimento_id);

        return res.send(quadros);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}