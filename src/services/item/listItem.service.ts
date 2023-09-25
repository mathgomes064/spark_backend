import { AppDataSource } from "../../data-source"
import { Item } from "../../entities/item.entity"


export const listItemService = async (id: string) => {
    const itemRepository = AppDataSource.getRepository(Item);

    const item = await itemRepository.findOne({
        where: {
            id: id
        }
    });

    if (!item) {
        throw new Error('item not found');
    }

    return item;
}