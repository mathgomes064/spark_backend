import { AppDataSource } from "../../data-source";
import { Quadro } from "../../entities/quadro.entity";


export const deleteQuadroService = async(id: string) =>{
    const quadroRepository = AppDataSource.getRepository(Quadro);

    const quadro = await quadroRepository.findOneBy({ id });
    
    if (!quadro) {
        throw new Error("Quadro não encontrado");
    }

    await quadroRepository.delete({id});

    return quadro;
}