import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listGrupoItemService } from "../../services/grupoItem/listGrupoItem.service";

export const listGrupoItemController = async(req: Request, res: Response) =>{
    try {
        const grupos = await listGrupoItemService();
        return res.send(grupos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}