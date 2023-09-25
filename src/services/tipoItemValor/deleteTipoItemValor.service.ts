import { AppDataSource } from "../../data-source";
import { TipoItemValor } from "../../entities/tipoItemValor.entity";

export const deleteTipoItemValorService = async(id: string) =>{
    const tipoItemValorRepository = AppDataSource.getRepository(TipoItemValor);
    
    const tipos = await tipoItemValorRepository.findOneBy({id});

    if (!tipos) {
        throw new Error("Tipo item valor não encontrado");
    }

    const excluido = true;

    await tipoItemValorRepository.update(id, {...{excluido}});

    const deletedTipoItemValor = await tipoItemValorRepository.findOneBy({id});

    return deletedTipoItemValor;
}