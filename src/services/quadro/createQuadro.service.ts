import { AppDataSource } from "../../data-source"
import { Compartimento } from "../../entities/compartimento.entity"
import { DPS_tipo } from "../../entities/dps_tipo.entity";
import { Quadro } from "../../entities/quadro.entity";
import { AppError } from "../../errors/appError";
import { IQuadroCreate } from "../../interfaces/quadro";


export const createQuadroService = async({
    quadro_descricao,
    tipo_qgbt,
    tamanho_qgbt,
    quantidade_circuito,
    monofasico,
    bifasico,
    trifasico,
    disjuntor_principal,
    polos,
    possui_dps,
    quantidade_dps,
    compartimento_id,
    dps_tipo_id
}: IQuadroCreate) => {
    const quadroRepository = AppDataSource.getRepository(Quadro);
    const compartimentoRepository = AppDataSource.getRepository(Compartimento);
    const dpsRepository = AppDataSource.getRepository(DPS_tipo);

    const compartimento = await compartimentoRepository.findOne({
        where: {id: compartimento_id}
    })

    const dps = await dpsRepository.findOne({
        where: {id: dps_tipo_id}
    })
  
    try{
        const quadro = new Quadro()
        quadro.quadro_descricao = quadro_descricao
        quadro.tipo_qgbt = tipo_qgbt
        quadro.tamanho_qgbt = tamanho_qgbt
        quadro.quantidade_circuito = quantidade_circuito
        quadro.monofasico = monofasico
        quadro.bifasico = bifasico
        quadro.trifasico = trifasico
        quadro.disjuntor_principal = disjuntor_principal
        quadro.polos = polos
        quadro.possui_dps = possui_dps
        quadro.quantidade_dps = quantidade_dps
        quadro.compartimento = compartimento!
        quadro.dps_tipo = dps!

        quadroRepository.create(quadro);
        await quadroRepository.save(quadro);

        return quadro;
    }catch(e){
        throw new AppError(404, `${e}`)    
    }
    
}