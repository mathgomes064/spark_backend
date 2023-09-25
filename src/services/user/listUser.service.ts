import { AppDataSource } from "../../data-source";
import { Permission } from "../../entities/permissions.entity";
import { User } from "../../entities/user.entity";

export const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const permissionRepository = AppDataSource.getRepository(Permission);

  const users = await userRepository.createQueryBuilder("user")
    .leftJoinAndSelect("user.permission", "permission")
    .orderBy("user.id", "ASC")
    .orderBy("permission.tabela", "DESC")
    .getMany();

  return users;
};

