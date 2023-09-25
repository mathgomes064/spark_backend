import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateTipoItemAtributoService } from "../../services/tipoItemAtributo/updateTipoItemAtributo.service"

export const updateTipoItemAtributoController = async(req: Request, res: Response) => {
    try {
        const tipoItemAtributo = req.body
        const id = req.params.id

        const updatedTipoItemAtributo = await updateTipoItemAtributoService(tipoItemAtributo, id);

        return res.send(updatedTipoItemAtributo);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}