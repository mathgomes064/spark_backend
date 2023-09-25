import { AppDataSource } from "../../data-source"
import { Proprietario } from "../../entities/proprietario.entity"


export const listProprietariosService = async() =>{
    const proprietarioRepository = AppDataSource.getRepository(Proprietario);

    const proprietarios = proprietarioRepository.find()

    return proprietarios;
}