import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";
import { AppError } from "../../errors/appError";
import { ITipoItemValorUpdate } from "../../interfaces/tipoItemValor";

export const updateManyValoresService = async (data: ITipoItemValorUpdate[]) => {
  const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);

  const updatedTipoItemValores: TipoItemValor[] = [];

  for (const tipoItemValor of data) {
    const { id, valor } = tipoItemValor;

    if (id && id != undefined) {
      const tipoItemValorToUpdate = await tipoItemValorRepository.findOneBy({ id });

      if (!tipoItemValorToUpdate) {
        throw new AppError(409, "Tipo item valor não encontrado");
      }

      await tipoItemValorRepository.update(id, { valor });

      const updatedTipo = await tipoItemValorRepository.findOneBy({ id });

      updatedTipoItemValores.push(updatedTipo!);
    } else{
      const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);
      const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);
    
      const tipoItemValores: TipoItemValor[] = [];
    
      for (const item of data) {
        const { valor, tipo_item_atributo_id } = item;

        const tipoItem = await tipoItemAtributoRepository.findOne({
          where: { id: tipo_item_atributo_id },
        });
    
        const tipoItemValor = new TipoItemValor();
        tipoItemValor.valor = valor!;
        tipoItemValor.excluido = false;
        tipoItemValor.tipoItemAtributo = tipoItem!;
    
        await tipoItemValorRepository.save(tipoItemValor);
        tipoItemValores.push(tipoItemValor);
      }

      return tipoItemValores;
    }
  }

  return updatedTipoItemValores;
};







