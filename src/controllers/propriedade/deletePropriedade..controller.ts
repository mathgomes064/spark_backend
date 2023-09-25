import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deletePropriredadeService } from "../../services/propriedade/deletePropriedade.service";

export const deletePropriredadeController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const propriedadeDeletado = await deletePropriredadeService(id)

        return res.json({message: "Propriedade Deletada", propriedadeDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}