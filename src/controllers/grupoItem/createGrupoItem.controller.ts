import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createGrupoItemService } from "../../services/grupoItem/createGrupoItem.service";

export const createGrupoItemController = async(req: Request, res: Response) =>{
    try {
        const grupoItem = req.body;

        const newgrupoItem = await createGrupoItemService(grupoItem)

        return res.status(201).send(newgrupoItem);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}