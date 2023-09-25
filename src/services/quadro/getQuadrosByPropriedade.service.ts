import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Quadro } from "../../entities/quadro.entity";

export const getQuadrosByPropriedadeService = async (propriedadeId: string) => {
    const quadroRepository = AppDataSource.getRepository(Quadro);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const quadros = await quadroRepository.createQueryBuilder("quadro")
        .leftJoin("quadro.compartimento", "compartimento")
        .leftJoin("compartimento.edificio", "edificio")
        .leftJoin("edificio.propriedade", "propriedade")
        .where("propriedade.id = :propriedadeId", { propriedadeId })
        .getMany();

    const quadrosWithThumbnail = await Promise.all(
        quadros.map(async (quadro: any) => {
            const anexos = await anexoRepository.find({
                where: {
                    id_ref: quadro.id,
                },
            });

            if (anexos.length > 0) {
                quadro.thumbnail = anexos[0];
            }

            return quadro;
        })
    );

    return quadrosWithThumbnail;
};
