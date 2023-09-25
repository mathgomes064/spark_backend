import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { softDeleteGrupoItemService } from "../../services/grupoItem/softDeleteGrupoItem.service";

export const softDeleteGrupoItemController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        const deletedGrupo = await softDeleteGrupoItemService(id);

        return res.json({message: "Deleted Grupo", deletedGrupo}); 
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}