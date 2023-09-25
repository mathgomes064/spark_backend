import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany, CreateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { Proprietario } from "./proprietario.entity";
import { Edificio } from "./edificio.entity";
import { Compartimento } from "./compartimento.entity";

@Entity("propriedade")
export class Propriedade{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    nome: string;

    @Column({length: 120})
    numero: string;

    @Column({length: 200})
    logradouro: string;

    @Column({length: 120})
    bairro: string;

    @Column({length: 120})
    cidade: string;

    @Column({length: 50})
    estado: string;

    @Column({length: 50})
    complemento: string;

    @Column({length: 9})
    cep: string;

    @ManyToOne((type) => Proprietario, proprietario => proprietario.propriedade , {
        onDelete: "CASCADE"
    })
    proprietario: Proprietario | undefined

    @OneToMany((type) => Edificio, edificio => edificio.propriedade, {
        eager: true,
        onDelete: "CASCADE"
    })
    edificio: Edificio;

    @CreateDateColumn()
    created: Date; 

    // @OneToMany((type) => Compartimento, compartimento => compartimento.propriedade , {
    //     eager: true,
    //     onDelete: "CASCADE"
    // })
    // compartimento: Compartimento;

    // @OneToMany((type) => AnexoPropriedade, anexoPropriedade => anexoPropriedade.propriedade , {
    //     eager: true,
    //     onDelete: "CASCADE"
    // })
    // anexoPropriedade: AnexoPropriedade;

    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}