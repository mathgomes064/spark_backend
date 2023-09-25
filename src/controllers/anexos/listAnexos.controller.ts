import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { listAnexosService } from "../../services/anexos/listAnexos.service"

export const listAnexosController = async(req: Request, res: Response) => {
    try {
        const anexos = await listAnexosService()

        return res.send(anexos)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}