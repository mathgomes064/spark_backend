import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listProprietariosService } from "../../services/proprietario/listProprietarios.service";

export const listProprietariosController = async(req: Request, res: Response) =>{
    try {
        const proprietarios = await listProprietariosService();

        return res.send(proprietarios);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}