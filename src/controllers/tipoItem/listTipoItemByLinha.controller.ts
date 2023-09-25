import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listTipoItemByLinhaService } from "../../services/tipoItem/listTipoItemByLinha.service";

export const listTipoItemByLinhaController = async (req: Request, res: Response) => {
    try {
        const tipoItemLinha = req.params.cor; 
        console.log(tipoItemLinha);

        const tipoItems = await listTipoItemByLinhaService(tipoItemLinha);

        return res.send(tipoItems);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        } else {
            handleError(new AppError(500, "Erro interno do servidor"), res);
        }
    }
};
