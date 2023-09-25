import { Router } from "express";

const itemAtributoRoutes = Router();

import { createItemAtributoController } from "../controllers/itemAtributo/createItemAtributo.controller";
import { listItemAtributoController } from "../controllers/itemAtributo/listItemAtributo.controller";
import { updateItemAtributoController } from "../controllers/itemAtributo/updateItemAtributo.controller";
import { deleteItemAtributoController } from "../controllers/itemAtributo/deleteItemAtributo.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { updateManyItemValoresController } from "../controllers/itemValor/updateManyValores.controller";

itemAtributoRoutes.post("", authTokenMiddleware, createItemAtributoController)
itemAtributoRoutes.get("", authTokenMiddleware, listItemAtributoController)
itemAtributoRoutes.patch("", authTokenMiddleware, updateItemAtributoController)
itemAtributoRoutes.delete("/:id", authTokenMiddleware, deleteItemAtributoController)

itemAtributoRoutes.patch("/edit-values", authTokenMiddleware, updateManyItemValoresController)



export default itemAtributoRoutes;