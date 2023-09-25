import { Router } from "express";

const tipoItemValorRoutes = Router();

import { createTipoItemValorController } from "../controllers/tipoItemValor/createTipoItemValor.controller";
import { listTipoItemValorController } from "../controllers/tipoItemValor/listTipoItemValor.controller";
import { updateTipoItemValorController } from "../controllers/tipoItemValor/updateTipoItemValor.controller";
import { deleteTipoItemValorController } from "../controllers/tipoItemValor/deleteTipoItemValor.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { createManyTipoItemValorController } from "../controllers/tipoItemValor/createManyTipoItemValor.controller";
import { updateManyValoresController } from "../controllers/tipoItemValor/updateManyValores.controller";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";

tipoItemValorRoutes.post("", authTokenMiddleware, permissionMiddleware("itens", "adicionar"), createTipoItemValorController)
tipoItemValorRoutes.post("/many_values", authTokenMiddleware, permissionMiddleware("itens", "adicionar"), createManyTipoItemValorController)
tipoItemValorRoutes.get("", authTokenMiddleware, permissionMiddleware("itens", "visualizar"), listTipoItemValorController)
tipoItemValorRoutes.patch("/:id", authTokenMiddleware, permissionMiddleware("itens", "editar"), updateTipoItemValorController)
tipoItemValorRoutes.patch("", authTokenMiddleware, permissionMiddleware("itens", "editar"), updateManyValoresController)
tipoItemValorRoutes.delete("/:id", authTokenMiddleware, deleteTipoItemValorController)

export default tipoItemValorRoutes;