import { AppDataSource } from "../../data-source";
import { GrupoItem } from "../../entities/grupoItem.entity";

export const listGrupoItemService = async() =>{
    try{
        const grupoItemRepository = AppDataSource.getRepository(GrupoItem);
    
        const grupoItem =  await grupoItemRepository.find({where:{
            excluido : false
        }})
        return grupoItem;
    }catch(error){
       console.log(error)
    }
}