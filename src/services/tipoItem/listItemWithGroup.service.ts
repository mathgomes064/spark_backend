import { AppDataSource } from "../../data-source"
import { TipoItem } from "../../entities/tipoItem.entity";


export const listItemWithGroupService = async(itemId: string) => {
  const tipoRepository = AppDataSource.getRepository(TipoItem);

  const tipo = await tipoRepository
    .createQueryBuilder("tipoItem")
    .leftJoin("tipoItem.grupoItem", "grupoItem")
    .select([
      "tipoItem.id",
      "tipoItem.descricao",
      "tipoItem.linha",
      "grupoItem.id",
      "grupoItem.descricao"
    ])
    .where("tipoItem.id = :itemId", { itemId })
    .andWhere("tipoItem.excluido = :excluido", { excluido: false })
    .getRawOne();

  if (!tipo) {
    return null;
  }

  return {
    id: tipo.tipoItem_id,
    descricao: tipo.tipoItem_descricao,
    linha: {
      descricao: tipo.tipoItem_linha
    },
    grupo_id: {
      id: tipo.grupoItem_id,
      descricao: tipo.grupoItem_descricao
    }
  };
}