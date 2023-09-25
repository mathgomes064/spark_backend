import { AppDataSource } from "../../data-source";
import { Edificio } from "../../entities/edificio.entity";
import { AppError } from "../../errors/appError";
import { IEdificioUpdate } from "../../interfaces/edificio";

export const editEdificioService = async(data: IEdificioUpdate, id: string) => {
    const edificioRepository = AppDataSource.getRepository(Edificio);
    const edificioParaAtualziar = await edificioRepository.findOneBy({id})

    if(!edificioParaAtualziar){
        throw new AppError(409, "Edificio não Encontrado");
    }

    await edificioRepository.update(id, {...data});

     const edificio = await edificioRepository.findOneBy({id});

    return edificio!;
}