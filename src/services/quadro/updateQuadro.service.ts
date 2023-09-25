import { AppDataSource } from "../../data-source"
import { DPS_tipo } from "../../entities/dps_tipo.entity";
import { Quadro } from "../../entities/quadro.entity";
import { AppError } from "../../errors/appError";
import { IQuadroUpdate } from "../../interfaces/quadro";

export const updateQuadroService = async(data: IQuadroUpdate, id: string) =>{
    const quadroRepository = AppDataSource.getRepository(Quadro);
    const dpsRepository = AppDataSource.getRepository(DPS_tipo)

    const quadro = await quadroRepository.findOneBy({id});
    
    if(!quadro){
        throw new AppError(409, "quadros não encontrado");
    }

    if(data.dps_tipo_id){
        const novoDps = await dpsRepository.findOneBy({id: data.dps_tipo_id})

        if(!novoDps){
            throw new AppError(409, "DPS não Encontrado");
        }
        quadro.dps_tipo = novoDps;
    }

    Object.assign(quadro, data);

    await quadroRepository.save(quadro);

    const updatedQuadro = await quadroRepository.findOneBy({id})

    return updatedQuadro
}