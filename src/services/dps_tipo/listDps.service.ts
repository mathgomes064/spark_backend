import { AppDataSource } from "../../data-source";
import { DPS_tipo } from "../../entities/dps_tipo.entity";

export const listDpsService = async() =>{
    try{
        const dpsRepository = AppDataSource.getRepository(DPS_tipo);
    
        const dps_tipo =  await dpsRepository.find()
        
        return dps_tipo;
    }catch(error){
       console.log(error)
    }
}