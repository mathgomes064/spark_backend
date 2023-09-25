import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError"
import { createAnexoService } from "../../services/anexos/createAnexos.service";

export const createAnexoController = async(req: Request, res: Response) =>{
    try {
        const anexo = req.body;

        const newAnexo = await createAnexoService(anexo);

        return res.status(201).send(newAnexo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        } 
    }
}