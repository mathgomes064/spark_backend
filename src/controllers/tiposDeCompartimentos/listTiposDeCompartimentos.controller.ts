import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listTipoDeCompartimentosService } from "../../services/tiposDeCompartimentos/listTiposDeCompartimentos.service";

export const listTipoDeCompartimentosController = async(req: Request, res: Response) =>{
    try {
        const tipos = await listTipoDeCompartimentosService();

        return res.send(tipos);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}