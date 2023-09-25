import { Request, Response } from "express";
import { listPropriedadeByService } from "../../services/propriedade/listPropriedadeById.service";
import { AppError, handleError } from "../../errors/appError";

export const listPropriedadeByIdController = async(req: Request, res: Response) =>{
    try {
        const propriedadeId = req.params.id;
        const propriedade = await listPropriedadeByService(propriedadeId);
        return res.send(propriedade)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}