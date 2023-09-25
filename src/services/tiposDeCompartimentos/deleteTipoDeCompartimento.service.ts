import { AppDataSource } from "../../data-source"
import { TipoCompartimento } from "../../entities/tipoDeCompartimento.entity"


export const deleteTipoDeCompartimentoService = async(id: string) =>{
    const tipoRepository = AppDataSource.getRepository(TipoCompartimento);
    const tipo = await tipoRepository.findOneBy({id})   

    if (!tipo) {
        throw new Error("Tipo não encontrado");
    }

    await tipoRepository.delete({id})

    return tipo;
}