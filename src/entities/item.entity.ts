import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { TipoItem } from "./tipoItem.entity";
import { Compartimento } from "./compartimento.entity";
import { ItemAtributo } from "./itemAtributo.entity";

@Entity("item")
export class Item{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    descricao: string;

    @Column()
    quantidade: number;

    @OneToMany((type) => ItemAtributo, itemAtributo => itemAtributo.item, {
        eager: true,
        onDelete: "CASCADE"
    })
    itemAtributos: ItemAtributo[];
    
    @ManyToOne((type) => Compartimento, compartimento => compartimento.item, {
        onDelete: "CASCADE"
    })
    compartimento: Compartimento;

    @ManyToOne((type) => TipoItem, tipoItem => tipoItem.item, {
        onDelete: "CASCADE"
    })
    tipoItem: TipoItem;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
