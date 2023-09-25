import { AppDataSource } from "../../data-source"
import { TipoCompartimento } from "../../entities/tipoDeCompartimento.entity"
import { AppError } from "../../errors/appError";
import { ITipoUpdate } from "../../interfaces/tipoDeCompartimento";


export const updateTipoDeCompartimentoService = async(data: ITipoUpdate, id: string) =>{
    const tipoRepository = AppDataSource.getRepository(TipoCompartimento);
    const tipo = await tipoRepository.findOneBy({id});

    if(!tipo){
        throw new AppError(409, "Tipo não encontrado");
    }

    await tipoRepository.update(id, {...data});

    const updatedTipo = await tipoRepository.findOneBy({id});

    return updatedTipo;
}