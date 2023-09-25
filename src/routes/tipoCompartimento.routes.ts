import { Router } from "express";
import { createTipoDeComparimentoController } from "../controllers/tiposDeCompartimentos/createTiposDeCompartimentos.controller";
import { listTipoDeCompartimentosController } from "../controllers/tiposDeCompartimentos/listTiposDeCompartimentos.controller";
import { updateTipoDeCompartimentoController } from "../controllers/tiposDeCompartimentos/updateTipoDeCompartimento.controller";
import { deleteTipoDeCompartimentoController } from "../controllers/tiposDeCompartimentos/deleteTipoDeCompartimento.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const tipoRoutes = Router();

tipoRoutes.post("", authTokenMiddleware, createTipoDeComparimentoController);
tipoRoutes.get("", authTokenMiddleware, listTipoDeCompartimentosController);
tipoRoutes.patch("/:id", authTokenMiddleware, updateTipoDeCompartimentoController);
tipoRoutes.delete("/:id", authTokenMiddleware, deleteTipoDeCompartimentoController);

export default tipoRoutes;
