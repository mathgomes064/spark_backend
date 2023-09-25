import { AppDataSource } from "../../data-source";
import { ItemAtributo } from "../../entities/itemAtributo.entity";
import { AppError } from "../../errors/appError";
import { IItemAtributoUpdate } from "../../interfaces/itemAtributo";

export const updateItemAtributoService = async (data: IItemAtributoUpdate[]) => {
    const itemAtributoRepository = AppDataSource.getRepository(ItemAtributo);

    const updatedItems = [];

    for (const item of data) {
        if (!item.id) {
            throw new AppError(400, "ID do Item Atributo é obrigatório");
        }

        const itemAtributoToUpdate = await itemAtributoRepository.findOneBy({ id: item.id });

        if (!itemAtributoToUpdate) {
            throw new AppError(409, "Item Atributo não Encontrado");
        }

        await itemAtributoRepository.update(item.id, { ...item });
        const updatedItem = await itemAtributoRepository.findOneBy({ id: item.id });
        updatedItems.push(updatedItem);
    }

    return updatedItems;
}

