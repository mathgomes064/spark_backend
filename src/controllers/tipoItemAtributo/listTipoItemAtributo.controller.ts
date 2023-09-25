import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listTipoItemAtributoService } from "../../services/tipoItemAtributo/listTipoItemAtributo.service";

export const listTipoItemAtributoController = async(req: Request, res: Response) =>{
    try {
        const tipoItemAtributo = await listTipoItemAtributoService();

        return res.send(tipoItemAtributo);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}