import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteProprietarioService } from "../../services/proprietario/deleteProprietario.service";

export const deleteProprietarioController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const proprietarioDeletado = await deleteProprietarioService(id)

        return res.json({message: "Proprietario Deletado", proprietarioDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}