import {Entity, Column, PrimaryColumn, OneToMany,} from "typeorm";
import { v4 as uuid } from "uuid";
import { Permission } from "./permissions.entity";

@Entity("user")
export class User{
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({length: 120})
    name: string;

    @Column({length: 20})
    telefone: string;

    @Column({length: 50, unique: true})
    email: string;

    @Column({type: "text", nullable: true})
    password: string;
    
    @Column({length: 11, unique: true})
    cpf: string;

    @OneToMany((type) => Permission, permission => permission.user, {
        eager: true,
        onDelete: "CASCADE",
    })
    permission: Permission 
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}