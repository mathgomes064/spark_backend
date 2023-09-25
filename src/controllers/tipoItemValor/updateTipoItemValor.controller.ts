import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { updateTipoItemValorService } from "../../services/tipoItemValor/updateTipoItemValor.service";

export const updateTipoItemValorController = async(req: Request, res: Response) =>{
    try {
        const tipoItemValor = req.body
        const id = req.params.id

        const updatedTipoItemValor = await updateTipoItemValorService(tipoItemValor, id);

        return res.json({ message: "Tipo Item valor Editado", updatedTipoItemValor });
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}