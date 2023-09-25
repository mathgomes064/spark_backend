import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listQuadroWithDpsService } from "../../services/quadro/listQuadroWithDps.service";


export const listQuadroWithDpsController = async(req: Request, res: Response) => {
    try {
        const quadro_id = req.params.quadro_id

        const quadros = await listQuadroWithDpsService(quadro_id);

        return res.send(quadros);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}