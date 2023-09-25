import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createItemService } from "../../services/item/createItem.service";



export const createItemController = async(req: Request, res: Response) =>{
    try {
        // const data = req.body;

        // const itemService = createItemService(); 

        // return res.status(201).send(itemService);
        const data = req.body;

        const itemService = new createItemService(); 

        const newItem = await itemService.createItem(data); 

        return res.status(201).send(newItem);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}
