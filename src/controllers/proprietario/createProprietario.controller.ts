import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createProprietarioService } from "../../services/proprietario/createProprietario.service";

export const createProprietarioController = async(req: Request, res: Response) =>{
    try {
        const proprietario = req.body;

        const newProprietario = await createProprietarioService(proprietario);

        return res.status(201).send(newProprietario);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}