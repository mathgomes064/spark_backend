import { AppDataSource } from "../../data-source"
import { TipoItem } from "../../entities/tipoItem.entity";

export const listTipoItemByService = async(id: string) =>{
    const tipoItemRepository = AppDataSource.getRepository(TipoItem);
    const tipoItem = await tipoItemRepository.findOne({
        where: {
            id
        }
    })
    if(tipoItem != undefined){
        return tipoItem
    }
    throw Error("Tipo Item não encontrado.")
}