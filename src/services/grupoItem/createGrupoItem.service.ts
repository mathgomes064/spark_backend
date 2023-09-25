import { AppDataSource } from "../../data-source"
import { GrupoItem } from "../../entities/grupoItem.entity"
import { IGrupoItemCreate } from "../../interfaces/grupoItem";


export const createGrupoItemService = async({descricao, excluido, grupo_id}: IGrupoItemCreate) =>{
    const grupoItemRepository = AppDataSource.getRepository(GrupoItem);
    
    let grupoRelation = null
    if(grupo_id){
        grupoRelation = await grupoItemRepository.findOne({
            where: {id: grupo_id}
        })
    }

    const grupoItem = new GrupoItem()
    grupoItem.descricao = descricao,
    grupoItem.excluido = excluido,
    grupoItem.grupoParente = grupoRelation!

    grupoItemRepository.create(grupoItem);
    await grupoItemRepository.save(grupoItem);

    return grupoItem;
}