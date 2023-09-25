import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteItemService } from "../../services/item/deleteItem.service";


export const deleteItemController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const itemDeletado = await deleteItemService(id)

        return res.json({message: "Item Deletado", itemDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}