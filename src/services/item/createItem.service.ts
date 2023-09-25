import { AppDataSource } from "../../data-source";
import { Item } from "../../entities/item.entity";
import { TipoItem } from "../../entities/tipoItem.entity";
import { IItemCreate } from "../../interfaces/item";
import { Compartimento } from "../../entities/compartimento.entity";
import { ItemAtributo } from "../../entities/itemAtributo.entity";
import { ItemValor } from "../../entities/itemValor.entity";

export class createItemService{
    // const itemRepository = AppDataSource.getRepository(Item);
    // const compartimentoRepository = AppDataSource.getRepository(Compartimento)
    // const tipoItemRepository = AppDataSource.getRepository(TipoItem)

    // const compartimento = await compartimentoRepository.findOne({
    //     where: {id: data.compartimento_id}
    // })

    // const tipo_item = await tipoItemRepository.findOne({
    //     where: {id: data.tipo_item_id}
    // })

    // const newItem = new Item()
    // newItem.descricao = data.descricao
    // newItem.quantidade = data.quantidade
    // newItem.compartimento = compartimento!
    // newItem.tipoItem = tipo_item!

    // itemRepository.create(newItem);
    // await itemRepository.save(newItem);

    // return newItem;

    private itemRepository: any;
    private tipoItemRepository: any;
    private itemAtributoRepository: any;
    private itemValorRepository: any;
    private compartimentoRepository: any

    constructor() {
        this.itemRepository = AppDataSource.getRepository(Item);
        this.tipoItemRepository = AppDataSource.getRepository(TipoItem);
        this.itemAtributoRepository = AppDataSource.getRepository(ItemAtributo);
        this.itemValorRepository = AppDataSource.getRepository(ItemValor);
        this.compartimentoRepository = AppDataSource.getRepository(Compartimento);
    }

    async createItem(data: IItemCreate): Promise<Item | null> {
        const tipoItem = await this.tipoItemRepository.findOne({ where: { id: data.tipo_item_id } });
        const compartimento = await this.compartimentoRepository.findOne(
            {
                where :{
                    id: data.compartimentoId
                }
            }
        )
        if (!tipoItem) {
            throw new Error('TipoItem not found');
        }

        if(!compartimento){
            throw new Error('Compartimento not found');
        }

        const item = this.createItemEntity(data, tipoItem, compartimento);
        await this.itemRepository.save(item);
        await this.handleInputs(data.inputs, item);

        return item;
    }

    private createItemEntity(data: IItemCreate, tipoItem: TipoItem, compartimento:any): Item {
        const newItem = new Item();
        newItem.compartimento = compartimento
        newItem.descricao = data.descricao;
        newItem.quantidade = data.quantidade;
        newItem.tipoItem = tipoItem;
        return newItem;
    }

    private async handleInputs(inputs: any[], item: Item) {
        for (let input of inputs) {
            const attribute = this.createAttribute(input, item);
            await this.itemAtributoRepository.save(attribute);

            const value = this.createValue(input, attribute);
            await this.itemValorRepository.save(value);
        }
    }

    private createAttribute(input: any, item: Item): ItemAtributo {
        const attribute = new ItemAtributo();
        attribute.selecionavel = input.selecionavel;
        attribute.unidade = input.unidade;
        attribute.sigla = input.sigla;
        attribute.item = item;
        attribute.descricao = input.descricao
        return attribute;
    }

    private createValue(input: any, attribute: ItemAtributo): ItemValor {
        const value = new ItemValor();
        value.valor = input.valor;
        value.ItemAtributo = attribute;
        return value;
    }
}
