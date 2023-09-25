import { AppDataSource } from "../../data-source";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";
import { AppError } from "../../errors/appError";
import { ITipoItemValorUpdate } from "../../interfaces/tipoItemValor";


export const updateTipoItemValorService = async(data: ITipoItemValorUpdate, id: string) =>{
    const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);
    const tipoItemValorToUpdate = await tipoItemValorRepository.findOneBy({id})

    if(!tipoItemValorToUpdate){
        throw new AppError(409, "Tipo item valor não Encontrado");
    }

    await tipoItemValorRepository.update(id, {...data});

     const updatedTipo = await tipoItemValorRepository.findOneBy({id});

    return updatedTipo!;
}