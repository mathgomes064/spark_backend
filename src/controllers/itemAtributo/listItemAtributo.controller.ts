import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listItemAtributoService } from "../../services/itemAtributo/listItemAtributo.service";

export const listItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const itemAtributo = await listItemAtributoService();

        return res.send(itemAtributo);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}