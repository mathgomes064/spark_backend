import { AppDataSource } from "../../data-source";
import { Compartimento } from "../../entities/compartimento.entity";
import { Item } from "../../entities/item.entity";
import { ItemValor } from "../../entities/itemValor.entity";
import { TipoItem } from "../../entities/tipoItem.entity";
import { AppError } from "../../errors/appError";
import { IItemUpdate } from "../../interfaces/item";

export const updateItemService = async (item: IItemUpdate, id: string) => {
    const itemRepository = AppDataSource.getRepository(Item);
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const tipoItemRepository = AppDataSource.getRepository(TipoItem);
    // const itemValorRepository = AppDataSource.getRepository(ItemValor);

    const existingItem = await itemRepository.findOneBy({ id });

    if (!existingItem) {
        throw new AppError(409, "Item não encontrado");
    }

    if (item.tipo_item_id) {
        const novo_tipo_item = await tipoItemRepository.findOneBy({ id: item.tipo_item_id });

        if (!novo_tipo_item) {
            throw new AppError(409, "Tipo Item não Encontrado");
        }

        existingItem.tipoItem = novo_tipo_item;
    }
    
    if (item.compartimentoId) {
        const novo_compartimento = await compartimentoRepository.findOneBy({ id: item.compartimentoId });
        if (!novo_compartimento) {
            throw new AppError(409, "Compartimento não Encontrado");
        }

        existingItem.compartimento = novo_compartimento

    }

    Object.assign(existingItem, item);

    await itemRepository.save(existingItem);

    const updatedItem = await itemRepository.findOneBy({id});

    return updatedItem;

    // await itemRepository.update(id, {
    //     descricao: item.descricao,
    //     quantidade: item.quantidade
    // });

    // for (let valor of item.valores) {
    //     const existingValorItem = await itemValorRepository.findOneBy({
    //         id: valor.atributo_id
    //     });

    //     if (existingValorItem) {
    //         await itemValorRepository.update(existingValorItem.id, {
    //             valor: valor.atributo_valor
    //         });
    //     } else {
    //         throw new AppError(409, "Valor do Item com atributo_id " + valor.atributo_id + " não encontrado");
    //     }
    // }

    // return await itemRepository.findOneBy({ id });
};
