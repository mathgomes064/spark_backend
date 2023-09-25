import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateItemAtributoService } from "../../services/itemAtributo/updateItemAtributo.service"

export const updateItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const itemAtributo = req.body
        // const id = req.params.id

        const updatedItemAtributo = await updateItemAtributoService(itemAtributo);

        return res.json(updatedItemAtributo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}