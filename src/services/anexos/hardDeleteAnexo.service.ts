import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";


export const realDeleteAnexoService = async(id: string) =>{
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const anexo = await anexoRepository.findOneBy({ id });
    
    if (!anexo) {
        throw new Error("Anexo não encontrado");
    }

    await anexoRepository.delete({id});

    return anexo;
} 