import { AppDataSource } from "../../data-source";
import { Proprietario } from "../../entities/proprietario.entity";
import { AppError } from "../../errors/appError";
import { IProprietarioUpdate } from "../../interfaces/proprietario";

export const updateProprietarioService = async (
  data: IProprietarioUpdate,
  id: string
) => {
  const proprietarioRepository = AppDataSource.getRepository(Proprietario);
  const proprietarioToUpdate = await proprietarioRepository.findOneBy({ id });

  if (!proprietarioToUpdate) {
    throw new AppError(409, "Proprietario não Encontrado");
  }

  const proprietariosCheck = await proprietarioRepository.find();
  const emailAlreadyExists = proprietariosCheck.find(
    (proprietario) => proprietario.email === data.email && proprietario.id !== id
  );

  const isCpf = data.cpf_cnpj!.length === 11;
  const isCnpj = data.cpf_cnpj!.length === 14;

  if (isCpf) {
    const cpfAlreadyExists = proprietariosCheck.find(
      (proprietario) => proprietario.cpf_cnpj === data.cpf_cnpj && proprietario.id !== id
    );

    if (!cpfAlreadyExists && !emailAlreadyExists) {
      await proprietarioRepository.update(id, { ...data });
      const updatedProprietario = await proprietarioRepository.findOneBy({
        id,
      });
      return updatedProprietario!;
    } else if (cpfAlreadyExists) {
      throw new AppError(409, "CPF já existe");
    } else {
      throw new AppError(409, "Email já existe");
    }
  } else if (isCnpj) {
    const cnpjAlreadyExists = proprietariosCheck.find(
      (proprietario) => proprietario.cpf_cnpj === data.cpf_cnpj && proprietario.id !== id
    );

    if (!cnpjAlreadyExists && !emailAlreadyExists) {
      await proprietarioRepository.update(id, { ...data });
      const updatedProprietario = await proprietarioRepository.findOneBy({
        id,
      });
      return updatedProprietario!;
    } else if (cnpjAlreadyExists) {
      throw new AppError(409, "CNPJ já existe");
    } else {
      throw new AppError(409, "Email já existe");
    }
  } else {
    throw new AppError(400, "CPF ou CNPJ inválido");
  }
};
