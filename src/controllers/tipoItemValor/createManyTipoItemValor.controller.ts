import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createManyTipoItemValorService } from "../../services/tipoItemValor/createManyTipoItemValor.service";

export const createManyTipoItemValorController = async(req: Request, res: Response) =>{
    try {
        const tipoItemValor = req.body;

        const newTipoItemValor = await createManyTipoItemValorService(tipoItemValor)

        return res.status(201).send(newTipoItemValor);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }  
    }
}