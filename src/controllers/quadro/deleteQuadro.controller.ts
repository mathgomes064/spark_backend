import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deleteQuadroService } from "../../services/quadro/deleteQuadro.service";

export const deleteQuadroController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.quadro_id
        
        const quadroDeletado = await deleteQuadroService(id)
        console.log(quadroDeletado)

        return res.send(quadroDeletado);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}