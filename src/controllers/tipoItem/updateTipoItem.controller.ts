import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { updateTipoItemService } from "../../services/tipoItem/updateTipoItem.service";

export const updateTipoItemController = async(req: Request, res: Response) =>{
    try {
        const tipo = req.body
        const id = req.params.id

        const updateTipo = await updateTipoItemService(tipo, id);
        return res.send(updateTipo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}