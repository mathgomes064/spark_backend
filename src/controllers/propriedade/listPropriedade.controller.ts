import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listPropriedadeService } from "../../services/propriedade/listPropriedade.service";

export const listPropriedadeController = async(req: Request, res: Response) => {
    try {
        const propriedades = await listPropriedadeService();
        return res.send(propriedades);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}
