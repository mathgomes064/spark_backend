import {Entity, Column, PrimaryColumn, OneToMany, OneToOne, JoinColumn, ManyToMany, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { TipoItem } from "./tipoItem.entity";

@Entity("grupoItem")
export class GrupoItem{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    descricao: string;

    @Column({default: false})
    excluido: boolean;

    @OneToMany((type) => TipoItem, tipoItem => tipoItem.grupoItem , {
        eager: true,
        onDelete: "CASCADE"
    })
    tipoItem: TipoItem;

    @ManyToOne((type) => GrupoItem, (grupoItem) => grupoItem.grupoFilho, {
        nullable: true,
        onDelete: "CASCADE"
    })
    grupoParente: GrupoItem;

    @OneToMany((type) => GrupoItem, (grupoItem) => grupoItem.grupoParente, {
        cascade: true
    })
    grupoFilho: GrupoItem[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}