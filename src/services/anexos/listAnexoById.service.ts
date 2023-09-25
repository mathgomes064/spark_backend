import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Propriedade } from "../../entities/propriedade.entity";

export const listAnexoByService = async(id_ref: string) =>{
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);
    const anexo = await anexoRepository.find({
        where: {
            id_ref:id_ref,
            excluido: false
        }
    })
    if(anexo != undefined){
        return anexo
    }
    throw Error("Anexo not found.")
}