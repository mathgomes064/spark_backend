import { AppDataSource } from "../../data-source"
import { GrupoItem } from "../../entities/grupoItem.entity";
import { TipoItem } from "../../entities/tipoItem.entity"
import { ITipoItemCreate } from "../../interfaces/tipoDeElemento";


export const createTipoItemService = async({descricao, linha, excluido, grupo_id}: ITipoItemCreate) =>{
    const tipoRepository = AppDataSource.getRepository(TipoItem);
    const grupoRepository = AppDataSource.getRepository(GrupoItem);

    const grupo = await grupoRepository.findOne({
        where: {id: grupo_id}
    })

    const newTipo = new TipoItem()
    newTipo.descricao = descricao,
    newTipo.linha = linha,
    newTipo.excluido = excluido
    newTipo.grupoItem = grupo!

    tipoRepository.create(newTipo);
    await tipoRepository.save(newTipo);

    return newTipo;
}