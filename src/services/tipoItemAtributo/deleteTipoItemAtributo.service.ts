import { AppDataSource } from "../../data-source";
import { TipoItemAtributo } from "../../entities/tipoItemAtributo.entity";

export const deleteTipoItemAtributoService = async(id: string) =>{
    const tipoItemAtributoRepository = AppDataSource.getRepository(TipoItemAtributo);

    const tipos = await tipoItemAtributoRepository.findOneBy({id});

    if (!tipos) {
        throw new Error("Tipo item atributo não encontrado");
    }

    const excluido = true;

    await tipoItemAtributoRepository.update(id, {...{excluido}});

    const deletedTipoItemAtributo = await tipoItemAtributoRepository.findOneBy({id});

    return deletedTipoItemAtributo;
}