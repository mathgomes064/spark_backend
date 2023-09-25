import { AppDataSource } from "../../data-source"
import { TipoCompartimento } from "../../entities/tipoDeCompartimento.entity"
import { ITipoCreate } from "../../interfaces/tipoDeCompartimento";


export const createTipoDeComparimentoService = async({descricao}: ITipoCreate) =>{
    const tipoRepository = AppDataSource.getRepository(TipoCompartimento);
    
    const tipoToCreate = new TipoCompartimento();
    tipoToCreate.descricao = descricao

    tipoRepository.create(tipoToCreate);
    await tipoRepository.save(tipoToCreate);

    return tipoToCreate;



}