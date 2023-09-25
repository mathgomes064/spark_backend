import { Router } from "express";

const dpsRoutes = Router();
import { createDpsController } from "../controllers/dps_tipo/createDps.controller";
import { listDpsController } from "../controllers/dps_tipo/listDps.controller";

dpsRoutes.post("", createDpsController)
dpsRoutes.get("", listDpsController)

export default dpsRoutes;

