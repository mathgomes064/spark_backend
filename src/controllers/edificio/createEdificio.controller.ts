import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { createEdificioService } from "../../services/edificio/createEdificio.service";
import { validateEdificio } from "../../services/edificio/createEdificio.service";




export const createEdificioController = async(req: Request, res: Response) =>{
    try {
        const edificio = req.body;
        
        validateEdificio(edificio);

        const newEdificio = await createEdificioService(edificio);

        return res.status(201).send(newEdificio);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}