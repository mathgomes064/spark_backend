import { Router } from "express";

const proprietarioRoutes = Router();

import { createProprietarioController } from "../controllers/proprietario/createProprietario.controller";
import { listProprietariosController } from "../controllers/proprietario/listProprietarios.controller";
import { updateProprietarioController } from "../controllers/proprietario/updateProprietario.controller";
import { deleteProprietarioController } from "../controllers/proprietario/deleteProprietario.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";

proprietarioRoutes.post("", authTokenMiddleware, permissionMiddleware("proprietario", "adicionar"), createProprietarioController)
proprietarioRoutes.get("", authTokenMiddleware, permissionMiddleware("proprietario", "visualizar"), listProprietariosController)
proprietarioRoutes.patch("/:id", authTokenMiddleware, permissionMiddleware("proprietario", "editar"), updateProprietarioController)
proprietarioRoutes.delete("/:id", authTokenMiddleware, deleteProprietarioController)


export default proprietarioRoutes;