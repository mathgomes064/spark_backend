import { AppDataSource } from "../../data-source"
import { DPS_tipo } from "../../entities/dps_tipo.entity";
import { Quadro } from "../../entities/quadro.entity";
import { AppError } from "../../errors/appError";
import { IDpsCreate } from "../../interfaces/dps_tipo";


export const createDpsService = async({
    classe,
    corrente,
    tensao,
}: IDpsCreate) => {
    const dpsRepository = AppDataSource.getRepository(DPS_tipo);

    try{
        const dps_tipo = new DPS_tipo()
        dps_tipo.classe = classe
        dps_tipo.corrente = corrente
        dps_tipo.tensao = tensao

        dpsRepository.create(dps_tipo);
        await dpsRepository.save(dps_tipo);

        return dps_tipo;
    }catch(e){
        throw new AppError(404, `${e}`)    
    }
    
}