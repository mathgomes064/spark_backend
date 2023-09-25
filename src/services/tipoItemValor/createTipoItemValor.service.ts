import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";
import { ITipoItemValorCreate } from "../../interfaces/tipoItemValor";


export const createTipoItemValorService = async({valor, excluido, tipo_item_atributo_id}: ITipoItemValorCreate) =>{
    const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);
    const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);

    const tipoItem = await tipoItemAtributoRepository.findOne({
        where: {id: tipo_item_atributo_id}
    })

    const tipoItemValor = new TipoItemValor()
    tipoItemValor.valor = valor,
    tipoItemValor.excluido = excluido,
    tipoItemValor.tipoItemAtributo = tipoItem!,

    tipoItemValorRepository.create(tipoItemValor);
    await tipoItemValorRepository.save(tipoItemValor);

    return tipoItemValor;
}