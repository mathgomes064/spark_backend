import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateGrupoItemService } from "../../services/grupoItem/updateGruoItem.service"

export const updateGrupoItemController = async(req: Request, res: Response) =>{
    try {
        const grupoItem = req.body
        const id = req.params.id

        const updatedGrupoItem = await updateGrupoItemService(grupoItem, id);

        return res.json({ message: "Grupo Editado", updatedGrupoItem });
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}