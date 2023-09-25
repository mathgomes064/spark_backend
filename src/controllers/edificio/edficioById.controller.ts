import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { edificioByIdService } from "../../services/edificio/edificioById.service";



export const edficioByIdController = async(req: Request, res: Response) =>{
    try {
        const edf_id = req.params.edf_id
        let edificio = await edificioByIdService(edf_id)
        return res.send(edificio)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}