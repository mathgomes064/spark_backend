import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteItemAtributoService } from "../../services/itemAtributo/deleteItemAtributo.service";

export const deleteItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const itemAtributoDeletado = await deleteItemAtributoService(id)

        return res.json({message: "Item Atributo Deletada", itemAtributoDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}