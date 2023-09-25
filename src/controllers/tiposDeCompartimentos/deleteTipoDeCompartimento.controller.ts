import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { deleteTipoDeCompartimentoService } from "../../services/tiposDeCompartimentos/deleteTipoDeCompartimento.service";


export const deleteTipoDeCompartimentoController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const updateTipo = await deleteTipoDeCompartimentoService(id);

        return res.json({message: "tipo de compartimento deletado", updateTipo})
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}