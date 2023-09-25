import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteAnexoService } from "../../services/anexos/softDeleteAnexo.service";

export const deleteAnexoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        const deletedAnexo = await deleteAnexoService(id);

        return res.json({message: "Deleted Anexo", deletedAnexo});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}