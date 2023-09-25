import { AppDataSource } from "../../data-source"
import { Quadro } from "../../entities/quadro.entity";

export const listQuadroWithDpsService = async(quadro_id: string) => {
  const quadroRepository = AppDataSource.getRepository(Quadro);

  const quadro = await quadroRepository
    .createQueryBuilder("quadro")
    .leftJoin("quadro.dps_tipo", "dps_tipo")
    .select([
      "quadro.id",
      "quadro.quadro_descricao",
      "quadro.tipo_qgbt",
      "quadro.tamanho_qgbt",
      "quadro.quantidade_circuito",
      "quadro.monofasico",
      "quadro.bifasico",
      "quadro.trifasico",
      "quadro.disjuntor_principal",
      "quadro.polos",
      "quadro.possui_dps",
      "quadro.quantidade_dps",
      "dps_tipo.id",
      "dps_tipo.classe",
      "dps_tipo.corrente",
      "dps_tipo.tensao"
    ])
    .where("quadro.id = :quadro_id", { quadro_id })
    .getRawOne();

  if (!quadro) {
    return null;
  }

  return {
    id: quadro.quadro_id,
    quadro_descricao: quadro.quadro_quadro_descricao,
    tipo_qgbt: quadro.quadro_tipo_qgbt,
    tamanho_qgbt: quadro.quadro_tamanho_qgbt,
    quantidade_circuito: quadro.quadro_quantidade_circuito,
    monofasico: quadro.quadro_monofasico,
    bifasico: quadro.quadro_bifasico,
    trifasico: quadro.quadro_trifasico,
    disjuntor_principal: quadro.quadro_disjuntor_principal,
    polos: quadro.quadro_polos,
    possui_dps: quadro.quadro_possui_dps,
    quantidade_dps: quadro.quadro_quantidade_dps,
    dps_tipo_id: {
      id: quadro.dps_tipo_id,
      classe: quadro.dps_tipo_classe,
      corrente: quadro.dps_tipo_corrente,
      tensao: quadro.dps_tipo_tensao
    }
  };
}