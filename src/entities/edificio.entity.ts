import {Entity, Column, PrimaryColumn, OneToMany, ManyToOne, Decimal128, CreateDateColumn} from "typeorm"
import { v4 as uuid } from "uuid"
import { Compartimento } from "./compartimento.entity";
import { Propriedade } from "./propriedade.entity";

@Entity("edificio")
export class Edificio{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 50} )
    nome: string;

    @Column({length: 120} )
    descricao: string;

    @Column({type: "decimal", precision: 8, scale: 2})
    largura: number;

    @Column({type: "decimal", precision: 8, scale: 2})
    comprimento: number;

    @Column({ type: "int" })
    pavimento: number;

    @Column({ type: "int" })
    subsolo: number;

    @ManyToOne((type) => Propriedade, propriedade => propriedade.edificio, {
        onDelete: "CASCADE"
    })
    propriedade: Propriedade;

    @OneToMany((type) => Compartimento, compartimento => compartimento.edificio, {
        eager: true,
        onDelete: "CASCADE"
    })
    compartimento: Compartimento;

    @CreateDateColumn()
    created: Date; 

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}   