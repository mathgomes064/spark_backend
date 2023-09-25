import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createTipoDeComparimentoService } from "../../services/tiposDeCompartimentos/createTiposDeCompartimentos.service";

export const createTipoDeComparimentoController = async(req: Request, res: Response) =>{
    try {
        const newTipo = req.body;

        const createNewTipo = await createTipoDeComparimentoService(newTipo);

        return res.status(201).send(createNewTipo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}