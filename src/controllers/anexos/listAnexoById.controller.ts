import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listAnexoByService } from "../../services/anexos/listAnexoById.service";

export const listAnexoByIdController = async(req: Request, res: Response) =>{
    try {
        const anexoId = req.params.id;

        const anexo = await listAnexoByService(anexoId);

        return res.send(anexo)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}