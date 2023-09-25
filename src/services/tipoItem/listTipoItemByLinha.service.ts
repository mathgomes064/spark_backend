import { AppDataSource } from "../../data-source";
import { TipoItem } from "../../entities/tipoItem.entity";

export const listTipoItemByLinhaService = async (linha: string) => {
    const tipoItemRepository = AppDataSource.getRepository(TipoItem);
    const tipoItems = await tipoItemRepository.find({
        where: {
            linha: linha 
        }
    });

    if (tipoItems.length > 0) {
        return tipoItems;
    }

    throw new Error("Nenhum Tipo Item encontrado para a linha especificada.");
};

