import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { TipoItemAtributo } from "./tipoItemAtributo.entity";

@Entity("tipoItemvalor")
export class TipoItemValor{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 100})
    valor: string;

    @Column({default: false})
    excluido: boolean;

    @ManyToOne((type) => TipoItemAtributo, tipoItemAtributo => tipoItemAtributo.tipoItemValor , {
        onDelete: "CASCADE"
    })
    tipoItemAtributo: TipoItemAtributo;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}