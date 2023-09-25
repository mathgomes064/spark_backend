import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { createPermissionsService } from "../../services/permissions/createPermissons.service";

export const createPermissonsController = async(req: Request, res: Response) => {
    try {
        const permission = req.body;

        const newPermission = await createPermissionsService(permission)

        return res.status(201).send(newPermission);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res);
        }
    }
}