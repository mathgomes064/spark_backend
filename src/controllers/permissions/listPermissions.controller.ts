import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listPermissionService } from "../../services/permissions/listPermissions.service";

export const listPermissionController = async(req: Request, res: Response) => {
    try {
        const permissions = await listPermissionService();

        return res.send(permissions);
    } catch (error) {
        if (error instanceof AppError) {
            handleError(error, res);
        }
    }
}
