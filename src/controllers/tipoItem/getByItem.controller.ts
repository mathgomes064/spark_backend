import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listByItemService } from "../../services/tipoItem/listTipoItem.service";


export const getByItemController = async(req: Request, res: Response) => {
    try {
        const id = req.params.itemId
        const tipos = await listByItemService(id);
        return res.send(tipos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}