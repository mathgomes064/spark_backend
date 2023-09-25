import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listByGroupService, listTipoItemService } from "../../services/tipoItem/listTipoItem.service";


export const listTipoItemController = async(req: Request, res: Response) => {
    try {
        const tipos = await listTipoItemService();

        return res.send(tipos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}

export const listByGroupController = async(req: Request, res: Response) => {
    try {
        const group_id = req.params.group_id
        const tipos = await listByGroupService(group_id)
        return res.send(tipos)
    } catch {

    }
}