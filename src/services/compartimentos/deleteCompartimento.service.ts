import { AppDataSource } from "../../data-source";
import { Compartimento } from "../../entities/compartimento.entity";


export const deleteCompartimentoService = async(id: string) =>{
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);

    const compartimento = await compartimentoRepository.findOneBy({ id });
    
    if (!compartimento) {
        throw new Error("Compartimento não encontrado");
    }

    await compartimentoRepository.delete({id});

    return compartimento;
}