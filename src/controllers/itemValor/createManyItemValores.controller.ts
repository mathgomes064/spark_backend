import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createManyItemValoresService } from "../../services/itemValor/createManyItemValores.service";

export const createManyItemValoresController = async(req: Request, res: Response) =>{
    try {
        const itemValor = req.body;

        const newItemValor = await createManyItemValoresService(itemValor)

        return res.status(201).send(newItemValor);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }  
    }
}