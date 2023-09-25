import { AppDataSource } from "../../data-source"
import { Propriedade } from "../../entities/propriedade.entity";

export const listPropriedadeByService = async(id: string) =>{
    const propriedadeRepository = AppDataSource.getRepository(Propriedade);
    const propriedade = await propriedadeRepository.findOne({
        where: {
            id
        }
    })
    if(propriedade != undefined){
        return propriedade
    }
    throw Error("Propriedade not found.")
}