import {Entity, Column, PrimaryColumn, ManyToOne, OneToOne, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { Item } from "./item.entity";
import { TipoItemAtributo } from "./tipoItemAtributo.entity";
import { type } from "os";
import { ItemValor } from "./itemValor.entity";


export enum opcoesDeAtributo{
    SIM = "sim",
    NAO = "não",
    OPCIONAL = "opcional"
}

@Entity("itemAtributo")
export class ItemAtributo{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    descricao: string;

    @Column({type: "enum", enum: opcoesDeAtributo, default: opcoesDeAtributo.NAO})
    selecionavel: opcoesDeAtributo | string;

    @Column({length: 15})
    unidade: string;
    
    @Column({length: 5})
    sigla: string;

    @ManyToOne((type) => Item, item => item.itemAtributos, {
        onDelete: "CASCADE"
    })
    item: Item;

    @OneToMany((type) => ItemValor, ItemValor => ItemValor.ItemAtributo, {
        eager: true,
        onDelete: "CASCADE"
    })
    itemValor: ItemValor

    

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}