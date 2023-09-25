import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { getQuadrosByPropriedadeService } from "../../services/quadro/getQuadrosByPropriedade.service";

export const getQuadrosByPropriedadeController = async(req: Request, res: Response) =>{
    try {
        const propriedadeId = req.params.prop_id

        const quadros = await getQuadrosByPropriedadeService(propriedadeId);
        return res.send(quadros);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}