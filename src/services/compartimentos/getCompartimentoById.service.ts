import { AppDataSource } from "../../data-source";
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Compartimento } from "../../entities/compartimento.entity";

export const compartimentoByIdService = async(id: string) => {
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const anexoRepository = AppDataSource.getRepository(AnexoDocumento);
    const compartimento: any | null = await compartimentoRepository.findOne({
        where: {
            id: id
        }
    });

    if (!compartimento) {
        throw new Error('Compartimento not found');
    }

    
    await Promise.all(compartimento.item.map(async (item: any) => {
        const anexos = await anexoRepository.find({
            where: {
                id_ref: item.id,
                ref: 'Item'
            }
        });

        if (anexos.length > 0) {
            item.thumbnail = anexos[0];
        }

        return item;
    }));


    return compartimento;
}
