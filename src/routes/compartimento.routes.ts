import { Router } from "express";
import { listCompartimentoController } from "../controllers/compartimentos/listCompartimento.controller";
import { createCompartimentoController } from "../controllers/compartimentos/createCompartimento.controller";
import { updateCompartimentoController } from "../controllers/compartimentos/updateCompartimento.controller";
import { deleteCompartimentoController } from "../controllers/compartimentos/deleteCompartimento.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { compartimentoByIdController } from "../controllers/compartimentos/getCompartimentoById.controller";
import { getCompartimentosByPropriedadeController } from "../controllers/compartimentos/getCompartimentosByPropriedade.controller";
import { getCompartimentosByEdificioController } from "../controllers/compartimentos/listCompartimentoByEdificio.controller";

const compartimentoRoutes = Router();

compartimentoRoutes.post("", authTokenMiddleware, createCompartimentoController);
compartimentoRoutes.get("/:compart_id", authTokenMiddleware, compartimentoByIdController);
compartimentoRoutes.get("/filter/edf/:edificio_id", authTokenMiddleware, listCompartimentoController);
compartimentoRoutes.get("/edificio/propriedade/:prop_id", authTokenMiddleware, getCompartimentosByPropriedadeController);
compartimentoRoutes.get("/edificio/propriedade/filter/:edf_id", authTokenMiddleware, getCompartimentosByEdificioController);
compartimentoRoutes.patch("/:id", authTokenMiddleware, updateCompartimentoController);
compartimentoRoutes.delete("/:id", authTokenMiddleware, deleteCompartimentoController);

export default compartimentoRoutes;

