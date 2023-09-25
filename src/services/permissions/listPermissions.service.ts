import { AppDataSource } from "../../data-source"
import { Permission } from "../../entities/permissions.entity";


export const listPermissionService = async() => {
    const permissionRepositpory = AppDataSource.getRepository(Permission);

    const permissions = permissionRepositpory.find()

    return permissions;
}