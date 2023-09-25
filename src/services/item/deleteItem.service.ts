import { AppDataSource } from "../../data-source"
import { Item } from "../../entities/item.entity"
import { AppError } from "../../errors/appError";


export const deleteItemService = async(id: string) =>{
    const itemRepository = AppDataSource.getRepository(Item);

    const item = await itemRepository.findOneBy({ id });
    
    if (!item) {
        throw new Error("Item não encontrado");
    }

    await itemRepository.delete({id});

    return item;
}