import { AppDataSource } from "../../data-source"
import { TipoItem } from "../../entities/tipoItem.entity"


export const deleteTipoItemService = async(id: string) =>{
    const tipoRepository = AppDataSource.getRepository(TipoItem);

    const tipos = await tipoRepository.findOneBy({id});

    if (!tipos) {
        throw new Error("Tipo de item não encontrado");
    }

    const excluido = true;

    await tipoRepository.update(id, {...{excluido}});

    const deletedTipo = await tipoRepository.findOneBy({id});

    return deletedTipo;
}