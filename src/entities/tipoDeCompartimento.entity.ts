import {Entity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { Compartimento } from "./compartimento.entity";

@Entity("tipoCompartimento")
export class TipoCompartimento{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    descricao: string;

    // @OneToMany((type) => Compartimento, compartimento => compartimento.tipoCompartimento, {
    //     eager: true,
    //     onDelete: "CASCADE"
    // })
    // compartimento: Compartimento;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}