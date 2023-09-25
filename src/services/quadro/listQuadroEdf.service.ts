import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Quadro } from "../../entities/quadro.entity";

export const listQuadroEdfService = async(edf_id: string) =>{
    const quadroRepository = AppDataSource.getRepository(Quadro);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const quadros = await quadroRepository.find({
        where: {
            compartimento: {id: edf_id}
        }
    });

    const quadrosWithThumbnail = await Promise.all(
        quadros.map(async (quadro:any) => {
        const anexos = await anexoRepository.find({
            where: {
            id_ref: quadro.id
            }
        });
    
        // Vincula apenas o primeiro anexo correspondente como miniatura
        if (anexos.length > 0) {
            quadro.thumbnail = anexos[0];
        }
    
        return quadro;
        })
        );

    return quadrosWithThumbnail;
}