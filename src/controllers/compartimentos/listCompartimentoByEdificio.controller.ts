import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { getCompartimentosByEdificioService } from "../../services/compartimentos/listCompartimentoByEdificio.service";

export const getCompartimentosByEdificioController = async(req: Request, res: Response) =>{
    try {

        const edificioId = req.params.edf_id

        const compartimentos = await getCompartimentosByEdificioService(edificioId);
        return res.send(compartimentos);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}