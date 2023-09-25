import {Entity, Column, PrimaryColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("permission")
export class Permission{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    visualizar: boolean;

    @Column()
    editar: boolean;

    @Column()
    adicionar: boolean;

    @Column()
    deletar: boolean;

    @Column()
    tabela: string;

    @ManyToOne((type) => User, user => user.permission, {
        onDelete: "CASCADE"
    })
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}