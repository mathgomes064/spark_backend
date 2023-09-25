import { AppDataSource } from "../../data-source";
import { Propriedade } from "../../entities/propriedade.entity";
import { Proprietario } from "../../entities/proprietario.entity";
import { IPropriedadeCreate } from "../../interfaces/propriedade";


export const createPropriedadeService = async({nome, numero, logradouro,  bairro,  cidade, estado, complemento, cep, proprietario_id}: IPropriedadeCreate) => {
    const propriedadeRepository = AppDataSource.getRepository(Propriedade);
    const proprietarioRepository = AppDataSource.getRepository(Proprietario)

    const proprietario = await proprietarioRepository.findOne({
        where: {id: proprietario_id}
    })

    const propriedade = new Propriedade()
    propriedade.nome = nome,
    propriedade.numero = numero,
    propriedade.logradouro = logradouro,
    propriedade.bairro = bairro,
    propriedade.cidade = cidade,
    propriedade.estado = estado, 
    propriedade.complemento = complemento, 
    propriedade.cep = cep, 
    propriedade.proprietario = proprietario!

    propriedadeRepository.create(propriedade);
    await propriedadeRepository.save(propriedade);

    return propriedade;
}