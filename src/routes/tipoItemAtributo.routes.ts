import { Router } from "express";

const tipoItemAtributosRoutes = Router();

import { createTipoItemAtributoController } from "../controllers/tipoItemAtributo/createTipoItemAtributo.controller";
import { listTipoItemAtributoController } from "../controllers/tipoItemAtributo/listTipoItemAtributo.controller";
import { updateTipoItemAtributoController } from "../controllers/tipoItemAtributo/updateTipoItemAtrbuto.controller";
import { deleteTipoItemAtributoController } from "../controllers/tipoItemAtributo/deleteTipoItemAtributo.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";

tipoItemAtributosRoutes.post("", authTokenMiddleware, permissionMiddleware("itens", "adicionar"), createTipoItemAtributoController)
tipoItemAtributosRoutes.get("", authTokenMiddleware, permissionMiddleware("itens", "visualizar"), listTipoItemAtributoController)
tipoItemAtributosRoutes.patch("/:id", authTokenMiddleware, permissionMiddleware("itens", "editar"), updateTipoItemAtributoController)
tipoItemAtributosRoutes.delete("/:id", authTokenMiddleware, deleteTipoItemAtributoController)

export default tipoItemAtributosRoutes;