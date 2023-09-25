import { AppDataSource } from "../../data-source"
import { AnexoDocumento } from "../../entities/anexoDocumento.entity";
import { Item } from "../../entities/item.entity";

export const listItemByIdService = async (id: string) => {
  const itemRepository = AppDataSource.getRepository(Item);

  const item = await itemRepository.findOne({
    where: {
      id: id,
    },
    relations: ["tipoItem", "itemAtributos", "itemAtributos.itemValor"],
  });

  if (!item) {
    return null;
  }

  const tipoItem_id = {
    id: item.tipoItem.id,
    descricao: item.tipoItem.descricao,
  };

  const response = {
      id: item.id,
      descricao: item.descricao,
      quantidade: item.quantidade,
      tipo_item_id: tipoItem_id,
      itemAtributos: item.itemAtributos,
  };

  return response;
};



