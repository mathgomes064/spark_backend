import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { listQuadroByIdService } from "../../services/quadro/listQuadroById.service";

export const listQuadroByIdController = async(req: Request, res: Response) =>{
    try {
        const quadro_id = req.params.quadro_id
        let quadro = await listQuadroByIdService(quadro_id)
        return res.send(quadro)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}