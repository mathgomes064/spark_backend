import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany, CreateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"
import { TipoCompartimento } from "./tipoDeCompartimento.entity";
import { Edificio } from "./edificio.entity";
import { Item } from "./item.entity";
import { Propriedade } from "./propriedade.entity";
import { Quadro } from "./quadro.entity";
import { TipoItem } from "./tipoItem.entity";

@Entity("compartimento")
export class Compartimento{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 250})
    descricao: string;

    @Column({type: "decimal", precision: 8, scale: 2})
    largura: number;

    @Column({type: "decimal", precision: 8, scale: 2})
    comprimento: number;

    @Column({type: "int"})
    andar_compartimento: number;

    @ManyToOne((type) => Edificio, edificio => edificio.compartimento, {
        onDelete: "CASCADE"
    })
    edificio: Edificio;

    @CreateDateColumn()
    created: Date;

    @OneToMany((type) => Quadro, quadro => quadro.compartimento, {
        eager: true,
        onDelete: "CASCADE"
    })
    quadro: Quadro

    @OneToMany((type) => Item, item => item.compartimento, {
        eager: true,
        onDelete: "CASCADE"
    })
    item: Item;

    // @ManyToOne((type) => Propriedade, propriedade => propriedade.compartimento , {
    //     onDelete: "CASCADE"
    // })
    // propriedade: Propriedade; 

    // @OneToMany((type) => AnexoPropriedade, anexoPropriedade => anexoPropriedade.compartimento , {
    //     eager: true,
    //     onDelete: "CASCADE"
    // })
    // anexoPropriedade: AnexoPropriedade;

    // @ManyToOne((type) => TipoCompartimento, tipoCompartimento => tipoCompartimento.compartimento, {
    //     onDelete: "CASCADE"
    // }) 
    // tipoCompartimento: TipoCompartimento;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}