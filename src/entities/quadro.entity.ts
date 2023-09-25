import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany, CreateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"
import { Compartimento } from "./compartimento.entity";
import { Edificio } from "./edificio.entity";
import { DPS_tipo } from './dps_tipo.entity';

@Entity("quadro")
export class Quadro{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
     quadro_descricao: string;

     @Column()
     tipo_qgbt: string;

     @Column()
     tamanho_qgbt: string;

     @Column({type: "int"})
     quantidade_circuito: number;

     @Column({type: "int"})
     monofasico: number;

     @Column({type: "int"})
     bifasico: number

     @Column({type: "int"})
     trifasico: number;

     @Column()
     disjuntor_principal: string;

     @Column()
     polos: string;

     @Column()
     possui_dps: string;

     @Column()
     quantidade_dps: string;

    @ManyToOne((type) => DPS_tipo, dps_tipo => dps_tipo.quadro, {
        onDelete: "CASCADE"
    })
    dps_tipo: DPS_tipo;
     
     @ManyToOne((type) => Compartimento, compartimento => compartimento.quadro, {
        onDelete: "CASCADE"
     })
     compartimento: Compartimento

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

