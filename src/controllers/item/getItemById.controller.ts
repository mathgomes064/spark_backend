import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { listItemByIdService } from "../../services/item/getItemById.service";

export const listItemByIdController = async(req: Request, res: Response) =>{
    try {
        const item_id = req.params.item_id
        let item = await listItemByIdService(item_id)
        return res.send(item)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}