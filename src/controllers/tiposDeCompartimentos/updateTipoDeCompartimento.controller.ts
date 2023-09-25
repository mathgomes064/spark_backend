import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updateTipoDeCompartimentoService } from "../../services/tiposDeCompartimentos/updateTipoDeCompartimernto.service"


export const updateTipoDeCompartimentoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const tipo = req.body
        const updateTipo = await updateTipoDeCompartimentoService(tipo, id);

        return res.json({message: "tipo de compartimento atualizado", updateTipo})
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}