import { AppDataSource } from "../../data-source";
import { GrupoItem } from "../../entities/grupoItem.entity";
import { AppError } from "../../errors/appError";
import { IGrupoItemUpdate } from "../../interfaces/grupoItem";


export const updateGrupoItemService = async(data: IGrupoItemUpdate, id: string) =>{
    const grupoItemRepository = AppDataSource.getRepository(GrupoItem);
    const grupotoUpdate = await grupoItemRepository.findOneBy({id})

    if(!grupotoUpdate){
        throw new AppError(409, "Grupo não Encontrado");
    }

    await grupoItemRepository.update(id, {...data});

     const grupoItem = await grupoItemRepository.findOneBy({id});

    return grupoItem!;
}