import { AppDataSource } from "../../data-source";
import { Propriedade } from "../../entities/propriedade.entity";


export const deletePropriredadeService = async(id: string) =>{
    const propriedadeRepository = AppDataSource.getRepository(Propriedade);

    const propriedade = await propriedadeRepository.findOneBy({ id });
    
    if (!propriedade) {
        throw new Error("Propriedade não encontrado");
    }

    await propriedadeRepository.delete({id});

    return propriedade;
}