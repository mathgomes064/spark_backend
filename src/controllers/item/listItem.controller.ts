import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { listItemService } from "../../services/item/listItem.service";


export const listItemController = async(req: Request, res: Response) =>{
    try {
        const id_item = req.params.id
        const itens = await listItemService(id_item);
        return res.send(itens);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}