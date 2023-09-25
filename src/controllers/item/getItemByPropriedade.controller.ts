import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { getItensByPropriedadeService } from "../../services/item/getItemByPropriedade.service";

export const getItensByPropriedadeController = async(req: Request, res: Response) =>{
    try {
        const propriedadeId = req.params.prop_id

        const itens = await getItensByPropriedadeService(propriedadeId);
        return res.send(itens);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}