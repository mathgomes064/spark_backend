import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";
import { AppError } from "../../errors/appError";
import { ITipoItemAtributoUpdate } from "../../interfaces/tipoItemAtributo";


export const updateTipoItemAtributoService = async(data: ITipoItemAtributoUpdate,  id: string) => {
    const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);
    const tipoItemAtributoToUpdate = await tipoItemAtributoRepository.findOneBy({id})

    if(!tipoItemAtributoToUpdate){
        throw new AppError(409, "Tipo item atributo não Encontrado");
    }

    await tipoItemAtributoRepository.update(id, {...data});

    const updatedTipo = await tipoItemAtributoRepository.findOneBy({id});

    return updatedTipo!;
}