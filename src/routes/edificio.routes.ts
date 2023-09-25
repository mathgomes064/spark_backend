import { Router } from "express";

const edificioRoutes = Router();

import { createEdificioController } from "../controllers/edificio/createEdificio.controller";
import { listEdificioController } from "../controllers/edificio/listEdificio.controller";
import { editEdificioController } from "../controllers/edificio/editEdificio.controller";
import { deleteEdificioController } from "../controllers/edificio/deleteEdificio.controller";
import { edficioByIdController } from "../controllers/edificio/edficioById.controller";

import { authTokenMiddleware } from "../middlewares/authToken.middleware";

edificioRoutes.post("", authTokenMiddleware, createEdificioController);
edificioRoutes.get("/:property_id", authTokenMiddleware, listEdificioController);
edificioRoutes.patch("/:id", authTokenMiddleware, editEdificioController);
edificioRoutes.delete("/:id", authTokenMiddleware, deleteEdificioController);
edificioRoutes.get("/:property_id/:edf_id", authTokenMiddleware, edficioByIdController);


export default edificioRoutes;


