import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { deletePermissionService } from "../../services/permissions/deletePermissions.service";

export const deletePermissionController = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id

        const permissionDeletado = await deletePermissionService(id)

        return res.json({message: "Permissão Deletada", permissionDeletado});
    } catch (error) {
        if(error instanceof AppError){
            handleError(error, res)
        }
    }
}