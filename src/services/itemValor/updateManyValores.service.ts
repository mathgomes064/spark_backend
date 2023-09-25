import { AppDataSource } from "../../data-source";
import { ItemValor } from "../../entities/itemValor.entity";
import { AppError } from "../../errors/appError";
import { IItemValorUpdate } from "../../interfaces/itemValor";

export const updateManyItemValoresService = async (data: Array<{ id: string, valor: string }>) => {
    const itemValorRepository = AppDataSource.getRepository(ItemValor);

    const updatedItems = [];

    for (const { id, valor } of data) {
        const itemValorToUpdate = await itemValorRepository.findOneBy({ id });

        if (!itemValorToUpdate) {
            throw new AppError(409, `Item valor com ID ${id} não encontrado`);
        }

        await itemValorRepository.update(id, { valor });
        const updatedTipo = await itemValorRepository.findOneBy({ id });
        updatedItems.push(updatedTipo!);
    }

    return updatedItems;
};







