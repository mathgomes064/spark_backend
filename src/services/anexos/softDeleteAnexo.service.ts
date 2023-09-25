import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";


export const deleteAnexoService = async(id: string) =>{
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const anexos = await anexoRepository.findOneBy({id});

    if (!anexos) {
        throw new Error("Anexo não encontrado");
    }

    const excluido = true;

    await anexoRepository.update(id, {...{excluido}});

    const deletedAnexo = await anexoRepository.findOneBy({id});

    return deletedAnexo;
}