import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { updateManyValoresService } from "../../services/tipoItemValor/updateManyValores.service";

export const updateManyValoresController = async (req: Request, res: Response) => {
  try {
    const tipoItemValores = req.body;

    const updatedTipoItemValores = await updateManyValoresService(tipoItemValores);

    return res.send(updatedTipoItemValores);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};