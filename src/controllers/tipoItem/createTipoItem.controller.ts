import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createTipoItemService } from "../../services/tipoItem/createTipoItem.service";

export const createTipoItemController = async(req: Request, res: Response) =>{
    try {
        const newTipo = req.body;

        const createNewTipo = await createTipoItemService(newTipo);

        return res.status(201).send(createNewTipo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}