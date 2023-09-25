import { Router } from "express";
import { createQuadroController } from "../controllers/quadro/createQuadro.controller";
import { listQuadroController } from "../controllers/quadro/listQuadros.controller";
import { updateQuadroController } from "../controllers/quadro/updateQuadro.controller";
import { deleteQuadroController } from "../controllers/quadro/deleteQuadro.controller";
import { listQuadroByIdController } from "../controllers/quadro/listQuadroById.controller";
import { listQuadroWithDpsController } from "../controllers/quadro/listQuadroWithDps.controller";
import { getQuadrosByPropriedadeController } from "../controllers/quadro/getQuadrosByPropriedade.controller";

const quadroRoutes = Router();

quadroRoutes.post("", createQuadroController) 
quadroRoutes.get("/:compartimento_id", listQuadroController) 
quadroRoutes.get("/filter/:quadro_id", listQuadroByIdController) 
quadroRoutes.get("/filter/dps/:quadro_id", listQuadroWithDpsController) 
quadroRoutes.get("/compartimento/edificio/propriedade/:prop_id", getQuadrosByPropriedadeController) 
quadroRoutes.patch("/:quadro_id", updateQuadroController) 
quadroRoutes.delete("/:quadro_id", deleteQuadroController) 

export default quadroRoutes;

