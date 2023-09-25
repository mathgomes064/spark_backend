import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteGroupItemService } from "../../services/grupoItem/deleteGrupoItem.service";

export const deleteGroupItemController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        const grupoDeletado = await deleteGroupItemService(id);

        return res.json({message: "Grupo Deletado", grupoDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}