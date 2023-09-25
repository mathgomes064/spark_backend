import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteCompartimentoService } from "../../services/compartimentos/deleteCompartimento.service"

export const deleteCompartimentoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const compartimentoDeletado = await deleteCompartimentoService(id)

        return res.json({message: "Compartimento Deletado", compartimentoDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}