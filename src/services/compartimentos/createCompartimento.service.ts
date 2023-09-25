import { AppDataSource } from "../../data-source"
import { Compartimento } from "../../entities/compartimento.entity"
import { Edificio } from "../../entities/edificio.entity";
import { Propriedade } from "../../entities/propriedade.entity";
import { TipoCompartimento } from "../../entities/tipoDeCompartimento.entity";
import { ICompartimentoCreate } from "../../interfaces/compartimento";


export const createCompartimentoService = async({descricao, largura, comprimento, andar_compartimento, edificio_id}: ICompartimentoCreate) => {
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const edificioRepository = AppDataSource.getRepository(Edificio);

    
    const edificio = await edificioRepository.findOne({
        where: {id: edificio_id}
    })

    const compartimento = new Compartimento()
    compartimento.descricao = descricao
    compartimento.largura = largura
    compartimento.comprimento = comprimento
    compartimento.andar_compartimento = andar_compartimento
    compartimento.edificio = edificio!

    compartimentoRepository.create(compartimento);
    await compartimentoRepository.save(compartimento);

    return compartimento;
}