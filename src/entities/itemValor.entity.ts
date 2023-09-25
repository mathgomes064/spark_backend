import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne, OneToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { ItemAtributo } from "./itemAtributo.entity";

@Entity("ItemValor")
export class ItemValor{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 100})
    valor: string;

    @Column({default: false})
    excluido: boolean;

    @ManyToOne((type) => ItemAtributo, ItemAtributo => ItemAtributo.itemValor, {
        onDelete: "CASCADE"
    })
    ItemAtributo: ItemAtributo

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}