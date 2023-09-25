import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { ItemAtributo } from "./itemAtributo.entity";
import { TipoItemValor } from "./tipoItemValor.entity";
import { TipoItem } from "./tipoItem.entity";

export enum opcoesDeAtributo{
    SIM = "sim",
    NAO = "não",
    OPCIONAL = "opcional"
}

@Entity("tipoItemAtributo")
export class TipoItemAtributo{
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

    @Column({default: false})
    excluido: boolean;

    @OneToMany((type) => TipoItemValor, tipoItemValor => tipoItemValor.tipoItemAtributo , {
        eager: true,
        onDelete: "CASCADE"
    })
    tipoItemValor: TipoItemValor;

    @ManyToOne((type) => TipoItem, tipoItem => tipoItem.tipoItemAtributo, {
        onDelete: "CASCADE"
    })
    tipoItem: TipoItem;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}