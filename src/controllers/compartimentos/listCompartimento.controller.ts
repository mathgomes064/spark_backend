import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { listCompartimentoService } from "../../services/compartimentos/listCompartimento.service";

export const listCompartimentoController = async(req: Request, res: Response) =>{
    try {
        const edificio_id = req.params.edificio_id

        const compartimentos = await listCompartimentoService(edificio_id);

        return res.send(compartimentos);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}