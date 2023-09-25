import { AppDataSource } from "../../data-source";
import { ItemAtributo } from "../../entities/itemAtributo.entity";
import { ItemValor } from "../../entities/itemValor.entity";
import { IItemValorCreate } from "../../interfaces/itemValor";


export const createManyItemValoresService = async (data: IItemValorCreate[]) => {
    const itemValorRepository = AppDataSource.getRepository(ItemValor);
    const itemAtributoRepository = AppDataSource.getRepository(ItemAtributo);
  
    const itemValores: ItemValor[] = [];
  
    for (const itens of data) {
      const { valor, item_atributo_id } = itens;

      const item = await itemAtributoRepository.findOne({
        where: { id: item_atributo_id },
      });
  
      const itemValor = new ItemValor();
      itemValor.valor = valor;
      itemValor.ItemAtributo = item!;
  
      await itemValorRepository.save(itemValor);
      itemValores.push(itemValor);
    }

    return itemValores;
  };