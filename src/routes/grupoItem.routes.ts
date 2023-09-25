import { Router } from "express";

const grupoItemRoutes = Router();

import { createGrupoItemController } from "../controllers/grupoItem/createGrupoItem.controller";
import { updateGrupoItemController } from "../controllers/grupoItem/updateGrupoItem.controller";
import { deleteGroupItemController } from "../controllers/grupoItem/hardDeleteGrupoItem.controller";
import { softDeleteGrupoItemController } from "../controllers/grupoItem/softDeleteGrupoItem.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { listGrupoItemController } from "../controllers/grupoItem/listGrupoItem.controller";

grupoItemRoutes.post("", authTokenMiddleware, createGrupoItemController)
grupoItemRoutes.get("", authTokenMiddleware, listGrupoItemController)
grupoItemRoutes.patch("/:id", authTokenMiddleware, updateGrupoItemController)
grupoItemRoutes.delete("/:id", authTokenMiddleware, deleteGroupItemController)
grupoItemRoutes.delete("/sf/:id", authTokenMiddleware, softDeleteGrupoItemController)

export default grupoItemRoutes;