import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteTipoItemAtributoService } from "../../services/tipoItemAtributo/deleteTipoItemAtributo.service";

export const deleteTipoItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;

        const deletedTipoItemAtributo = await deleteTipoItemAtributoService(id);

        return res.json({message: "Deleted Tipo Item Atributo", deletedTipoItemAtributo});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}