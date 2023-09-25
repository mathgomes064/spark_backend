import { AppDataSource } from "../../data-source";
import { Permission } from "../../entities/permissions.entity";
import { User } from "../../entities/user.entity";
import { IPermissionCreate } from "../../interfaces/permissions";

export const createPermissionsService = async (permissions: IPermissionCreate[]) => {
  const permissionsRepository = AppDataSource.getRepository(Permission);
  const userRepository = AppDataSource.getRepository(User);

  const createdPermissions: Permission[] = [];

  for (const permissionData of permissions) {
    const { visualizar, editar, adicionar, deletar, tabela, user_id } = permissionData;

    const user = await userRepository.findOne({
      where: { id: user_id },
    });

    const permission = new Permission();
    permission.visualizar = visualizar;
    permission.editar = editar;
    permission.adicionar = adicionar;
    permission.deletar = deletar;
    permission.tabela = tabela;
    permission.user = user!;

    permissionsRepository.create(permission);
    await permissionsRepository.save(permission);

    createdPermissions.push(permission);
  }

  return createdPermissions;
};
