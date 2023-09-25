import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/user";

export const userUpdateService = async (data: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({ id });

  if (!userToUpdate) {
    throw new AppError(409, "User not found");
  }

  const usersCheck = await userRepository.find();
  const emailAlreadyExists = usersCheck.find(
    (user) => user.email === data.email && user.id !== id
  );
  const cpfAlreadyExists = usersCheck.find(
    (user) => user.cpf === data.cpf && user.id !== id
  );

  if (data.email === userToUpdate.email || !emailAlreadyExists) {
    if (data.cpf === userToUpdate.cpf || !cpfAlreadyExists) {
      await userRepository.update(id, { ...data });
      const updatedUser = await userRepository.findOneBy({ id });
      return updatedUser!;
    } else {
      throw new AppError(409, "CPF já existe");
    }
  } else {
    throw new AppError(409, "Email já existe");
  }
};
