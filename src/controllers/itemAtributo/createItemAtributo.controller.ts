import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createItemAtributoService } from "../../services/itemAtributo/createItemAtributo.service";

export const createItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const itemAtributo = req.body;

        const newItemAtributo = await createItemAtributoService(itemAtributo)

        return res.status(201).send(newItemAtributo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}