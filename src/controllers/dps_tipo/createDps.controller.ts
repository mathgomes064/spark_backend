import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { createDpsService } from "../../services/dps_tipo/createDps.service"

export const createDpsController = async(req: Request, res: Response) => {
    try {
        const dps = req.body
        const newDps = await createDpsService(dps)
        
        return res.status(201).send(newDps)
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}