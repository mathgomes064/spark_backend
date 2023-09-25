import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity"


export const listAnexosService = async() => {
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const anexos = await anexoRepository.find();

    const currentAnexos = anexos.filter((anexo) => anexo.excluido == false);

    return currentAnexos;

    // const anexoRepository = AppDataSource.getRepository(AnexoPropriedade);

    // const anexos = await anexoRepository.find();

    // anexos.forEach((item) => 
    //     item.url=item.host+"/"+item.path+"/"+item.nome
    // )

    // const currentAnexos = anexos.filter((anexo) => anexo.excluido == false);

    // return currentAnexos;
}