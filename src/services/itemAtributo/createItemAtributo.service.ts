import { AppDataSource } from "../../data-source";
import { Item } from "../../entities/item.entity";
import { ItemAtributo } from "../../entities/itemAtributo.entity";
import { IItemAtributoCreate } from "../../interfaces/itemAtributo";


export const createItemAtributoService = async({descricao, selecionavel, unidade, sigla, item_id}: IItemAtributoCreate) =>{
    const itemAtributoRepository = AppDataSource.getRepository(ItemAtributo);
    const itemRepository = AppDataSource.getRepository(Item);

    const item = await itemRepository.findOne({
        where: {id: item_id}
    })

    const itemAtributo = new ItemAtributo()
    itemAtributo.descricao = descricao,
    itemAtributo.selecionavel = selecionavel,
    itemAtributo.unidade = unidade,
    itemAtributo.sigla = sigla,
    itemAtributo.item = item!,

    itemAtributoRepository.create(itemAtributo);
    await itemAtributoRepository.save(itemAtributo);

    return itemAtributo;
}