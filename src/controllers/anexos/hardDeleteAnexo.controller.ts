import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { realDeleteAnexoService } from "../../services/anexos/hardDeleteAnexo.service";


export const realDeleteAnexoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const anexoDeletado = await realDeleteAnexoService(id)

        return res.json({message: "Anexo Deletado", anexoDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
} 