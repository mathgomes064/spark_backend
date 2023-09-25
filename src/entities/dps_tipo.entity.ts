import {Entity, Column, PrimaryColumn, ManyToOne, OneToMany, CreateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"
import { Compartimento } from "./compartimento.entity";
import { Edificio } from "./edificio.entity";
import { Quadro } from "./quadro.entity";

@Entity("dps_tipo")
export class DPS_tipo{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
     classe: string;

    @Column({length: 120})
     corrente: string;

    @Column({length: 120})
     tensao: string;
     
     @OneToMany((type) => Quadro, quadro => quadro.dps_tipo, {
        onDelete: "CASCADE",
        eager: true
     })
     quadro: Quadro

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}