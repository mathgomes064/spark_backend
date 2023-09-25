import { AppDataSource } from "../../data-source";
import { GrupoItem } from "../../entities/grupoItem.entity";


export const softDeleteGrupoItemService = async(id: string) =>{
    const grupoItemRepository = AppDataSource.getRepository(GrupoItem);

    const grupos = await grupoItemRepository.findOneBy({id});

    if (!grupos) {
        throw new Error("Grupo não encontrado");
    }

    const excluido = true;

    await grupoItemRepository.update(id, {...{excluido}});

    const deletedGrupo = await grupoItemRepository.findOneBy({id});

    return deletedGrupo;
}