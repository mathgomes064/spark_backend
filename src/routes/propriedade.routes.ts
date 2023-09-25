import { Router } from "express";

const propriedadeRoutes = Router();

import { createPropriedadeController } from "../controllers/propriedade/createPropriedade.controller";
import { listPropriedadeController } from "../controllers/propriedade/listPropriedade.controller";
import { updatePropriedadeController } from "../controllers/propriedade/updatePropriedade.controller";
import { deletePropriredadeController } from "../controllers/propriedade/deletePropriedade..controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { listPropriedadeByIdController } from "../controllers/propriedade/listPropriedadeById.controller";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";

propriedadeRoutes.post("", authTokenMiddleware, permissionMiddleware("propriedade", "adicionar"), createPropriedadeController)
propriedadeRoutes.get("", authTokenMiddleware, permissionMiddleware("propriedade", "visualizar"), listPropriedadeController)
propriedadeRoutes.get("/:id", authTokenMiddleware, listPropriedadeByIdController)
propriedadeRoutes.patch("/:id", authTokenMiddleware, permissionMiddleware("propriedade", "editar"), updatePropriedadeController)
propriedadeRoutes.delete("/:id", authTokenMiddleware, deletePropriredadeController)

export default propriedadeRoutes;