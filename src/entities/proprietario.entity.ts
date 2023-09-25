import {Entity, Column, PrimaryColumn, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { Propriedade } from "./propriedade.entity";

@Entity("proprietario")
export class Proprietario{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    tipo_pessoa: string;

    @Column({length: 120})
    nome: string;

    @Column({length: 14, unique: true})
    cpf_cnpj: string;

    @Column({length: 50})
    email: string;

    @Column({length: 20})
    celular: string;

    @OneToMany((type) => Propriedade, propriedade => propriedade.proprietario, {
        eager: true,
        onDelete: "CASCADE"
    })
    propriedade: Propriedade
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}