import { Request, Response } from "express"
import { AppError, handleError } from "../../errors/appError"
import { updatePermissionService } from "../../services/permissions/updatePermissions.service"

export const updatePermissionController = async(req: Request, res: Response) =>{
    try {
        const permissions = req.body;

        const updatedPermissions = await Promise.all(
            permissions.map(async (permission: any) => {
                const updatedPermission = await updatePermissionService(permission);
                return updatedPermission;
            })
        );

        return res.send(updatedPermissions);
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}
