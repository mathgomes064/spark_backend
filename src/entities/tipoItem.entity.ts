import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Item } from "./item.entity";
import { GrupoItem } from "./grupoItem.entity";
import { TipoItemAtributo } from "./tipoItemAtributo.entity";
import { Compartimento } from "./compartimento.entity";

@Entity("tipoItem")
export class TipoItem{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    descricao: string;

    @Column({length: 120})
    linha: string;

    @Column({default: false})
    excluido: boolean

    @OneToMany((type) => TipoItemAtributo, tipoItemAtributo => tipoItemAtributo.tipoItem, {
        eager: true,
        onDelete: "CASCADE"
    })
    tipoItemAtributo: TipoItemAtributo;

    @OneToMany((type) => Item, item => item.tipoItem, {
        eager: true,
        onDelete: "CASCADE"
    })
    item: Item;

    @ManyToOne((type) => GrupoItem, grupoItem => grupoItem.tipoItem, {
        onDelete: "CASCADE"
    })
    grupoItem: GrupoItem;

    // @ManyToOne((type) => Compartimento, compartimento => compartimento.tipoItem, {
    //     onDelete: "CASCADE"
    // })
    // compartimento: Compartimento;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
