import { AppDataSource } from "../../data-source";
import { ItemAtributo } from "../../entities/itemAtributo.entity";

export const deleteItemAtributoService = async(id: string) =>{
    const itemAtributoRepository = AppDataSource.getRepository(ItemAtributo);

    const itemAtributo = await itemAtributoRepository.findOneBy({ id });
    
    if (!itemAtributo) {
        throw new Error("Item Atributo não encontrado");
    }

    await itemAtributoRepository.delete({id});

    return itemAtributo;
}