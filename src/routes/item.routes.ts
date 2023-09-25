import { Router } from "express";
import { createItemController } from "../controllers/item/createItem.controller";
import { listItemController } from "../controllers/item/listItem.controller";
import { updateItemController } from "../controllers/item/updateItem.controller";
import { deleteItemController } from "../controllers/item/deleteItem.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";
import { getItensByPropriedadeController } from "../controllers/item/getItemByPropriedade.controller";
import { listItemByIdController } from "../controllers/item/getItemById.controller";

const itemRoutes = Router();

itemRoutes.post("", authTokenMiddleware, createItemController);
itemRoutes.get("/:id", authTokenMiddleware, listItemController);
itemRoutes.get("/propriedade/all/:prop_id", getItensByPropriedadeController);
itemRoutes.get("/filter/:item_id", listItemByIdController);
itemRoutes.patch("/:id", authTokenMiddleware, updateItemController);
itemRoutes.delete("/:id", authTokenMiddleware, deleteItemController);

export default itemRoutes;