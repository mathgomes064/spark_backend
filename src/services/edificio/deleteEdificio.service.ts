import { AppDataSource } from "../../data-source";
import { Edificio } from "../../entities/edificio.entity";

export const deleteEdificioService = async(id: string) =>{
    const edificioRepository = AppDataSource.getRepository(Edificio);

    const edificio = await edificioRepository.findOneBy({ id });
    
    if (!edificio) {
        throw new Error("edificio não encontrado");
    }

    await edificioRepository.delete({id});
}