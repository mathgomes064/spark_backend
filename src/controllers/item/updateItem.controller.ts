import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { updateItemService } from "../../services/item/updateItem.service";

export const updateItemController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        const item = req.body;

        const updatedItem = await updateItemService(item, id);

        return res.send(updatedItem);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}