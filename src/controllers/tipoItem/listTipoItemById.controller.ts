import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listTipoItemByService } from "../../services/tipoItem/listTipoItemById.service";

export const listTipoItemByIdController = async(req: Request, res: Response) =>{
    try {
        const tipoItemId = req.params.id;
        console.log(tipoItemId)

        const tipoItem = await listTipoItemByService(tipoItemId);

        return res.send(tipoItem)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
          }
    }
}