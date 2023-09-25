import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Compartimento } from "../../entities/compartimento.entity"

export const listCompartimentoService = async(edificio_id: string) =>{
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const compartimentos = await compartimentoRepository.find({
        where: {
            edificio: {id: edificio_id}
        }
    });

    const compartimentosWithThumbnail = await Promise.all(
    compartimentos.map(async (compartimento:any) => {
    const anexos = await anexoRepository.find({
        where: {
        id_ref: compartimento.id
        }
    });

    // Vincula apenas o primeiro anexo correspondente como miniatura
    if (anexos.length > 0) {
        compartimento.thumbnail = anexos[0];
    }


    return compartimento;
    })
    );

    return compartimentosWithThumbnail;
}