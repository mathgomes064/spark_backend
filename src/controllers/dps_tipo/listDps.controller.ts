import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listDpsService } from "../../services/dps_tipo/listDps.service";

export const listDpsController = async(req: Request, res: Response) =>{
    try {
        const grupos = await listDpsService();
        return res.send(grupos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}