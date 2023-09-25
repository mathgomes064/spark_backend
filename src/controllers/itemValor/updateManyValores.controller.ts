import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { updateManyItemValoresService } from "../../services/itemValor/updateManyValores.service";

export const updateManyItemValoresController = async (req: Request, res: Response) => {
  try {
    const tipoItemValores = req.body;

    const updatedTipoItemValores = await updateManyItemValoresService(tipoItemValores);

    return res.send(updatedTipoItemValores);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};