import express from 'express';
import userRoutes from './routes/user.routes';
import userLoginRoute from './routes/userLogin.routes';
import edificioRoutes from './routes/edificio.routes';
import anexoRoutes from './routes/anexo.routes';
import compartimentoRoutes from './routes/compartimento.routes';
import tipoRoutes from './routes/tipoCompartimento.routes';
import tipoItemRoutes from './routes/tiposDeItem.routes';
import itemRoutes from './routes/item.routes';
import proprietarioRoutes from './routes/proprietario.routes';
import propriedadeRoutes from './routes/propriedade.routes';
import tipoItemAtributosRoutes from './routes/tipoItemAtributo.routes';
import grupoItemRoutes from './routes/grupoItem.routes';
import tipoItemValorRoutes from './routes/tipoItemValor.routes';
import itemAtributoRoutes from './routes/itemAtributo.routes';
import anexoFiles from "./routes/anexoUpload.routes"
import cors from "cors";
import permissionRoute from './routes/permission.routes';
import morgan from 'morgan';
import quadroRoutes from './routes/quadro.routes';
import dpsRoutes from './routes/dps.routes';

const app = express();

const path = require('path')

app.use(cors());

app.use(express.json());
app.use(morgan('combined'));
app.use("/user", userRoutes);
app.use("/permissions", permissionRoute);
app.use("/login", userLoginRoute);
app.use("/proprietario", proprietarioRoutes);
app.use("/propriedade", propriedadeRoutes);
app.use("/itens", itemRoutes);
app.use("/tiposDeCompartimentos", tipoRoutes);
app.use("/compartimentos", compartimentoRoutes);
app.use("/edificio/anexos", anexoRoutes);
app.use("/edificio", edificioRoutes);
app.use("/quadro", quadroRoutes);
app.use("/tipoItem", tipoItemRoutes);
app.use("/grupoItem", grupoItemRoutes);
app.use("/tipoItemAtributo", tipoItemAtributosRoutes);
app.use("/tipoItemValor", tipoItemValorRoutes);
app.use("/itemAtributo", itemAtributoRoutes);
app.use("/dps_tipo", dpsRoutes);

app.use("/", anexoFiles)
app.use("/files", express.static(path.resolve(__dirname, 'files')))


export default app;
