import { AppDataSource } from "../../data-source";
import { Proprietario } from "../../entities/proprietario.entity";

export const deleteProprietarioService = async(id: string) =>{
    const proprietarioRepository = AppDataSource.getRepository(Proprietario);

    const proprietario = await proprietarioRepository.findOneBy({ id });
    
    if (!proprietario) {
        throw new Error("Proprietario não encontrado");
    }

    await proprietarioRepository.delete({id});

    return proprietario;
}