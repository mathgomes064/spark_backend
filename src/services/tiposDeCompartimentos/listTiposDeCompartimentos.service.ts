import { AppDataSource } from "../../data-source"
import { TipoCompartimento } from "../../entities/tipoDeCompartimento.entity"


export const listTipoDeCompartimentosService = async() =>{
    const tipoRepository = AppDataSource.getRepository(TipoCompartimento);

    const tipos = tipoRepository.find();

    return tipos;
}