import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createPropriedadeService } from "../../services/propriedade/createPropriedade.service";

export const createPropriedadeController = async(req: Request, res: Response) => {
    try {
        const propriedade = req.body;

        const newpropriedade = await createPropriedadeService(propriedade)

        return res.status(201).send(newpropriedade);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}