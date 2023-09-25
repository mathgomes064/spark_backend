import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listEdificioService } from "../../services/edificio/listEdificio.service";

export const listEdificioController = async(req: Request, res: Response) =>{
    try {
        const property_id = req.params.property_id
        const listEdificios = await listEdificioService(property_id)
        return res.send(listEdificios)
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}