import { Router } from "express";

const anexoRoutes = Router();

import { createAnexoController } from "../controllers/anexos/createAnexo.controller";
import { listAnexosController } from "../controllers/anexos/listAnexos.controller";
import { deleteAnexoController } from "../controllers/anexos/softDeleteAnexo.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { realDeleteAnexoController } from "../controllers/anexos/hardDeleteAnexo.controller";
import { listAnexoByIdController } from "../controllers/anexos/listAnexoById.controller";

anexoRoutes.post("", authTokenMiddleware, createAnexoController);
anexoRoutes.get("", authTokenMiddleware, listAnexosController);
anexoRoutes.get("/:id", authTokenMiddleware, listAnexoByIdController);
anexoRoutes.delete("/sd/:id", authTokenMiddleware, deleteAnexoController);
anexoRoutes.delete("/:id", authTokenMiddleware, realDeleteAnexoController);

export default anexoRoutes;
