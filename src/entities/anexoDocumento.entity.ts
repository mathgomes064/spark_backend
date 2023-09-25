import {Entity, Column, PrimaryColumn} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("anexoDocumento")
export class AnexoDocumento{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    nome: string;

    @Column({length: 120})
    file_name: string;

    @Column({length: 250})
    path: string;

    @Column({length: 100})
    host: string;

    @Column({length: 120})
    tipo: string;

    @Column({default: false})
    excluido: boolean;

    @Column({length: 200})
    url: string;

    @Column({length: 200})
    ref: string;

    @Column({length: 36})
    id_ref: string;

    // @ManyToOne((type) => Propriedade, propriedade => propriedade.anexoPropriedade, {
    //     onDelete: "CASCADE"
    // })
    // propriedade: Propriedade;

    // @ManyToOne((type) => Edificio, edificio => edificio.anexoPropriedade, {
    //     onDelete: "CASCADE"
    // })
    // edificio: Edificio

    // @ManyToOne((type) => Compartimento, compartimento => compartimento.anexoPropriedade , {
    //     onDelete: "CASCADE"
    // })
    // compartimento: Compartimento;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}