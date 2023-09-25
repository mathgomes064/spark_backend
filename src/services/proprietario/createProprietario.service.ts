import { AppDataSource } from "../../data-source"
import { Proprietario } from "../../entities/proprietario.entity"
import { AppError } from "../../errors/appError";
import { IProprietarioCreate } from "../../interfaces/proprietario";

export const createProprietarioService = async({nome, tipo_pessoa, cpf_cnpj, email, celular}: IProprietarioCreate) =>{
    const proprietarioRepository = AppDataSource.getRepository(Proprietario);
    const proprietarios = await proprietarioRepository.find();

    const emailAlreadyExists = proprietarios.find(proprietario => proprietario.email === email);
    const cpfAlreadyExists = proprietarios.find(proprietario => proprietario.cpf_cnpj === cpf_cnpj)

    if(emailAlreadyExists){
        throw new AppError(409, "Email já existe");
    }

    if(cpfAlreadyExists){
        if(cpfAlreadyExists.cpf_cnpj.length == 11){
            throw new AppError(409, "CPF já existe");
        }
        throw new AppError(409, "CNPJ já existe");
    }

    const proprietario = new Proprietario()
    proprietario.tipo_pessoa = tipo_pessoa,
    proprietario.nome = nome,
    proprietario.cpf_cnpj = cpf_cnpj,
    proprietario.email = email,
    proprietario.celular = celular

    proprietarioRepository.create(proprietario);
    await proprietarioRepository.save(proprietario);

    return proprietario;
}