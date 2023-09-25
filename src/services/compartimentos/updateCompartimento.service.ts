import { AppDataSource } from "../../data-source"
import { Compartimento } from "../../entities/compartimento.entity"
import { Edificio } from "../../entities/edificio.entity";
import { AppError } from "../../errors/appError";
import { ICompartimentoUpdate } from "../../interfaces/compartimento";


export const updateCompartimentoService = async(data: ICompartimentoUpdate, id: string) =>{
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const edificioRepository = AppDataSource.getRepository(Edificio)

    const compartimento = await compartimentoRepository.findOneBy({id});
    
    if(!compartimento){
        throw new AppError(409, "compartimento não encontrado");
    }

    if(data.edificio_id){
        const novoEdificio = await edificioRepository.findOneBy({id: data.edificio_id})

        if(!novoEdificio){
            throw new AppError(409, "Edifício não Encontrado");
        }

        compartimento.edificio = novoEdificio
    }

    Object.assign(compartimento, data);

    await compartimentoRepository.save(compartimento);
  
    const newCompartimento = await compartimentoRepository.findOneBy({ id });
  
    return newCompartimento!;
}