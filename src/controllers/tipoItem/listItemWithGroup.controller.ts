import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listItemWithGroupService } from "../../services/tipoItem/listItemWithGroup.service";


export const listItemWithGroupController = async(req: Request, res: Response) => {
    try {
        const id = req.params.id

        const tipos = await listItemWithGroupService(id);

        return res.send(tipos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}