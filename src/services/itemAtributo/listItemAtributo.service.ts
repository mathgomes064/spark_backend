import { AppDataSource } from "../../data-source";
import { ItemAtributo } from "../../entities/itemAtributo.entity";


export const listItemAtributoService = async() =>{
    const itemAtributoRepositpory = AppDataSource.getRepository(ItemAtributo);

    const itemAtributo = itemAtributoRepositpory.find()

    return itemAtributo;
}