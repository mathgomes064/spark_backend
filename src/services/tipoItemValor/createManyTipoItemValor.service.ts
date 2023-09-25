import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";
import { ITipoItemValorCreate } from "../../interfaces/tipoItemValor";


export const createManyTipoItemValorService = async (data: ITipoItemValorCreate[]) => {
    const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);
    const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);
  
    const tipoItemValores: TipoItemValor[] = [];
  
    for (const item of data) {
      const { valor, excluido, tipo_item_atributo_id } = item;

      const tipoItem = await tipoItemAtributoRepository.findOne({
        where: { id: tipo_item_atributo_id },
      });
  
      const tipoItemValor = new TipoItemValor();
      tipoItemValor.valor = valor;
      tipoItemValor.excluido = excluido;
      tipoItemValor.tipoItemAtributo = tipoItem!;
  
      await tipoItemValorRepository.save(tipoItemValor);
      tipoItemValores.push(tipoItemValor);
    }

    return tipoItemValores;
  };