import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Item } from "../../entities/item.entity";
import { ItemAtributo } from "../../entities/itemAtributo.entity";
import { ItemValor } from "../../entities/itemValor.entity";

export const getItensByPropriedadeService = async (propriedadeId: string) => {
    const itensRepository = AppDataSource.getRepository(Item);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);

    const itens = await itensRepository.createQueryBuilder("item")
        .leftJoinAndSelect("item.compartimento", "compartimento")
        .leftJoinAndSelect("compartimento.edificio", "edificio")
        .leftJoinAndSelect("edificio.propriedade", "propriedade")
        .leftJoinAndSelect("item.itemAtributos", "itemAtributo")
        .leftJoinAndSelect("itemAtributo.itemValor", "itemValor")
        .where("propriedade.id = :propriedadeId", { propriedadeId })
        .getMany();

    const itensWithThumbnail = await Promise.all(
        itens.map(async (item: any) => {
            const anexos = await anexoRepository.find({
                where: {
                    id_ref: item.id,
                },
            });

            if (anexos.length > 0) {
                item.thumbnail = anexos[0];
            }

            return item;
        })
    );

    return itensWithThumbnail;
};

