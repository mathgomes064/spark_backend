import { AppDataSource } from "../../data-source";
import { Permission } from "../../entities/permissions.entity";
import { AppError } from "../../errors/appError";
import { IPermissionUpdate } from "../../interfaces/permissions";

export const updatePermissionService = async(data: IPermissionUpdate) => {
    const permissionRepository = AppDataSource.getRepository(Permission);

    const { id } = data;

    const permissionToUpdate = await permissionRepository.findOneBy({ id });

    if (!permissionToUpdate) {
        throw new AppError(409, "Permissão não Encontrado");
    }

    await permissionRepository.update(id, { ...data });

    const updatedPermission = await permissionRepository.findOneBy({ id });

    return updatedPermission!;
}
