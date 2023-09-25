import { AppDataSource } from "../../data-source";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";


export const listTipoItemValorService = async() =>{
    const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);

    const tipoItemValor = await tipoItemValorRepository.find();

    const currentTipoItemValor = tipoItemValor.filter((tipo) => tipo.excluido == false);

    return currentTipoItemValor;
}