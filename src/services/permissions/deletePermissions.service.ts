import { AppDataSource } from "../../data-source";
import { Permission } from "../../entities/permissions.entity";

export const deletePermissionService = async(id: string) =>{
    const permissionRepository = AppDataSource.getRepository(Permission);

    const permission = await permissionRepository.findOneBy({ id });
    
    if (!permission) {
        throw new Error("Permissão não encontrado");
    }

    await permissionRepository.delete({id});

    return permission;
}