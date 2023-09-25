import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";


export const listTipoItemAtributoService = async() =>{
    const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);

    const tipoItem = await tipoItemAtributoRepository.find();

    const currentTipoItem = tipoItem.filter((tipo) => tipo.excluido == false);

    return currentTipoItem;
}