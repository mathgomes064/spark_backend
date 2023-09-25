import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserCreate } from "../../interfaces/user";

export const userCreateService = async ({ name, telefone, email, cpf , password}: IUserCreate) => {
    
    [name, telefone, email, cpf].forEach((credential, index) => {
        if (!credential) {
            throw new AppError(409, `Por favor insira o ${["nome", "telefone", "email",  "CPF"][index]} para fazer o cadastro`);
        }
    });
    
    const userRepository = AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOne({ where: [{ email }, { cpf }] });
    if (existingUser) {
        if (existingUser.email === email) throw new AppError(409, "Email já existe");
        if (existingUser.cpf === cpf) throw new AppError(409, "CPF já existe");
    }

    const user = userRepository.create({ name, telefone, email, cpf, password });

    try {
        await userRepository.save(user);
        return user;
    } catch {
        throw new AppError(409, "Houve algum problema na criação do usuário");
    }
}
