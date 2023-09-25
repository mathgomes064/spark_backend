import { AppDataSource } from "../../data-source"
import { Compartimento } from "../../entities/compartimento.entity";
import { GrupoItem } from "../../entities/grupoItem.entity";
import { Item } from "../../entities/item.entity";
import { TipoItem } from "../../entities/tipoItem.entity";

export const listTipoItemService = async() => {
    const tipoRepository = AppDataSource.getRepository(TipoItem);
    const tipos = await tipoRepository.find();
    const currentTipoItem = tipos.filter((tipo) => tipo.excluido == false);
    return currentTipoItem;
}

export const listByGroupService = async (group_id: string) => {
    const groupRepository = AppDataSource.getRepository(GrupoItem);
    const tipoRepository = AppDataSource.getRepository(TipoItem);

    const group = await groupRepository.findOne({
        where: {
            id: group_id
        }
    });

    if(!group){
        throw new Error('GrupoItem not found'); 
    }

    const tipos = await tipoRepository.find({
        where: {
            grupoItem: group
        }
    });

    return tipos;
}

export const listByItemService = async (item_id: string) => {
    const tipoItemRepository = AppDataSource.getRepository(TipoItem);
    const ItemRepository = AppDataSource.getRepository(Item);
    try {
        const item = await ItemRepository.findOne({
            where: {
                id: item_id
            },
            relations: ['tipoItem', 'tipoItem.tipoItemAtributo.tipoItemValor']
        });

        if (!item) {
            throw new Error('Item not found');
        }
        return item;
    } catch (error) {
        console.error("Error:", error);  // Log the original error for debugging
        throw new Error('Houve algum erro na busca do tipo');
    }
}
