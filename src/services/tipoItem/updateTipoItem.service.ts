import { AppDataSource } from "../../data-source"
import { GrupoItem } from "../../entities/grupoItem.entity";
import { TipoItem } from "../../entities/tipoItem.entity"
import { AppError } from "../../errors/appError";
import { ITipoItemUpdate } from "../../interfaces/tipoDeElemento";

export const updateTipoItemService = async(data: ITipoItemUpdate, id: string) =>{
    const tipoRepository = AppDataSource.getRepository(TipoItem);
    const grupoRepository = AppDataSource.getRepository(GrupoItem)

    const tipos = await tipoRepository.findOneBy({id});

    if(!tipos){
        throw new AppError(409, "Tipo de item não encontrado");
    }

    if (data.grupo_id) {
        const novoProprietario = await grupoRepository.findOneBy({ id: data.grupo_id });

        if (!novoProprietario) {
            throw new AppError(409, "Proprietário não Encontrado");
        }

        tipos.grupoItem = novoProprietario;
    }

    Object.assign(tipos, data);

    await tipoRepository.save(tipos);

    const updatedTipo = await tipoRepository.findOneBy({id});

    return updatedTipo;
}