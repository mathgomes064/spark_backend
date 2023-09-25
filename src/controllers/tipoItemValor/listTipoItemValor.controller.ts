import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listTipoItemValorService } from "../../services/tipoItemValor/listTipoItemValor.service";

export const listTipoItemValorController = async(req: Request, res: Response) =>{
    try {
        const tipoItemValor = await listTipoItemValorService();

        return res.send(tipoItemValor);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}