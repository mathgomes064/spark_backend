import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { getCompartimentosByPropriedadeService } from "../../services/compartimentos/getCompartimentosByPropriedade.service";

export const getCompartimentosByPropriedadeController = async(req: Request, res: Response) =>{
    try {

        const propriedadeId = req.params.prop_id

        const compartimentos = await getCompartimentosByPropriedadeService(propriedadeId);
        return res.send(compartimentos);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}