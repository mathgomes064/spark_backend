import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createTipoItemValorService } from "../../services/tipoItemValor/createTipoItemValor.service";

export const createTipoItemValorController = async(req: Request, res: Response) =>{
    try {
        const tipoItemValor = req.body;

        const newTipoItemValor = await createTipoItemValorService(tipoItemValor)

        return res.status(201).send(newTipoItemValor);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }  
    }
}