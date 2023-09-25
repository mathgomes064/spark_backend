import { DataSource } from "typeorm";
import path from 'path';
import "dotenv/config";
import { AnexoDocumento } from "./entities/anexoDocumento.entity";
import { Compartimento } from "./entities/compartimento.entity";
import { Edificio } from "./entities/edificio.entity";
import { GrupoItem } from "./entities/grupoItem.entity";
import { Item } from "./entities/item.entity";
import { ItemAtributo } from "./entities/itemAtributo.entity";
import { Propriedade } from "./entities/propriedade.entity";
import { Proprietario } from "./entities/proprietario.entity";
import { TipoItem } from "./entities/tipoItem.entity";
import { TipoItemAtributo } from "./entities/tipoItemAtributo.entity";
import { TipoItemValor } from "./entities/tipoItemValor.entity";
import { User } from "./entities/user.entity";
import { TipoCompartimento } from "./entities/tipoDeCompartimento.entity";
import { Permission } from "./entities/permissions.entity";


export const AppDataSource = new DataSource({
    type: "postgres",
    
    url: process.env.DATABASE_URL,

    synchronize: false,
    logging: false,
    entities: [
        "src/entities/**/*.ts"
    ],
    migrations: [
        "src/migrations/**/*.ts"
    ]
})