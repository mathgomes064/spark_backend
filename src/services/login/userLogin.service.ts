import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserLogin } from "../../interfaces/user";
import jwt from "jsonwebtoken";

export const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const account = await userRepository.findOne({ where: { email } });
  if (!account || password !== account.password) {
    throw new AppError(403, "Email ou senha incorretos");
  }

  const userPermissions = account.permission;

  const token = jwt.sign(
    { user: account },
    String(process.env.JWT_SECRET),
    { expiresIn: "1d" }
  );

  return { token, userPermissions };
};
