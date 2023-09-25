import { AppDataSource } from "../../data-source";
import { Compartimento } from "../../entities/compartimento.entity";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";

export const getCompartimentosByPropriedadeService = async (propriedadeId: string) => {
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const compartimentos = await compartimentoRepository.createQueryBuilder("compartimento")
        .leftJoin("compartimento.edificio", "edificio")
        .leftJoin("edificio.propriedade", "propriedade")
        .where("propriedade.id = :propriedadeId", { propriedadeId })
        .addSelect("edificio.id") 
        .addSelect("edificio.nome") 
        .getMany();

    const compartimentosWithThumbnail = await Promise.all(
        compartimentos.map(async (compartimento: any) => {
            const anexos = await anexoRepository.find({
                where: {
                    id_ref: compartimento.id,
                },
            });

            if (anexos.length > 0) {
                compartimento.thumbnail = anexos[0];
            }

            return compartimento;
        })
    );

    return compartimentosWithThumbnail;
};


