import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteTipoItemService } from "../../services/tipoItem/deleteTipoItem.service";


export const deleteTipoItemCotroller = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        const deletedTipo = await deleteTipoItemService(id);

        return res.json({message: "Tipo de Item Deletado", deletedTipo});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}