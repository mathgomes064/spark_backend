import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteTipoItemValorService } from "../../services/tipoItemValor/deleteTipoItemValor.service";

export const deleteTipoItemValorController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        
        const deletedTipoItemValor = await deleteTipoItemValorService(id);

        return res.json({message: "Deleted Tipo Item Valor", deletedTipoItemValor});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}