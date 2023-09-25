import { AppDataSource } from "../../data-source";
import { GrupoItem } from "../../entities/grupoItem.entity";


export const deleteGroupItemService = async(id: string) =>{
    const grupoItemRepository = AppDataSource.getRepository(GrupoItem);

    const grupoItem = await grupoItemRepository.findOneBy({ id });
    
    if (!grupoItem) {
        throw new Error("Grupo não encontrado");
    }

    await grupoItemRepository.delete({id});

    return grupoItem;
}