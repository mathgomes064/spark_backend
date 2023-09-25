import { AppDataSource } from "../../data-source";
import { TipoItem } from "../../entities/tipoItem.entity";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";
import { ITipoItemAtributoCreate } from "../../interfaces/tipoItemAtributo";


export const createTipoItemAtributoService = async({descricao, selecionavel, unidade, sigla, excluido, tipo_item_id}: ITipoItemAtributoCreate) =>{
    const tipoRepository = AppDataSource.getRepository(TipoItemAtributo);
    const tipoItemRepository = AppDataSource.getRepository(TipoItem)

    const tipoItem = await tipoItemRepository.findOne({
        where: {id: tipo_item_id}
    })

    const tipoItemAtributo = new TipoItemAtributo()
    tipoItemAtributo.descricao = descricao,
    tipoItemAtributo.selecionavel = selecionavel,
    tipoItemAtributo.unidade = unidade,
    tipoItemAtributo.sigla = sigla,
    tipoItemAtributo.excluido = excluido,
    tipoItemAtributo.tipoItem = tipoItem!

    tipoRepository.create(tipoItemAtributo);
    await tipoRepository.save(tipoItemAtributo);

    return tipoItemAtributo;
}