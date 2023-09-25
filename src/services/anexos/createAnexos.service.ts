import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity"
import { IAnexoCreate } from "../../interfaces/anexos";


export const createAnexoService = async(data: IAnexoCreate[]) =>{
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const anexos: AnexoDocumento[] = []

    for(const item of data){
        const {nome, file_name, tipo, excluido, url} = item;
        
        let tabela = item.ref

        const anexo = new AnexoDocumento()
        anexo.nome = nome,
        anexo.file_name = file_name,
        anexo.path = process.env.FILE_FOLDER_ROOT! + tabela + "/" + item.id_ref,
        anexo.host = process.env.CURRENT_FILE_HOST!,
        anexo.tipo = tipo,
        anexo.excluido = excluido,
        anexo.url = url
        anexo.ref = item.ref
        anexo.id_ref= item.id_ref

        await anexoRepository.save(anexo)
        anexos.push(anexo)
    }

    return anexos;
}