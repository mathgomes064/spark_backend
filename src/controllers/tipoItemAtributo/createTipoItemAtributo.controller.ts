import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createTipoItemAtributoService } from "../../services/tipoItemAtributo/createTipoItemAtributo.service";

export const createTipoItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const tipoItemAtributo = req.body;

        const newtipoItemAtributo = await createTipoItemAtributoService(tipoItemAtributo)

        return res.status(201).send(newtipoItemAtributo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}