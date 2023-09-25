import { Router } from "express";
import { createTipoItemController } from "../controllers/tipoItem/createTipoItem.controller";
import { listByGroupController, listTipoItemController } from "../controllers/tipoItem/listTipoItem.controller";
import { updateTipoItemController } from "../controllers/tipoItem/updateTipoItem.controller";
import { deleteTipoItemCotroller } from "../controllers/tipoItem/deleteTipoItem.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { listTipoItemByIdController } from "../controllers/tipoItem/listTipoItemById.controller";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";
import { listItemWithGroupController } from "../controllers/tipoItem/listItemWithGroup.controller";
import { listTipoItemByLinhaController } from "../controllers/tipoItem/listTipoItemByLinha.controller";
import { getByItemController } from "../controllers/tipoItem/getByItem.controller";

const tipoItemRoutes = Router();

tipoItemRoutes.post("", authTokenMiddleware, permissionMiddleware("itens", "adicionar"), createTipoItemController);
tipoItemRoutes.get("", authTokenMiddleware, permissionMiddleware("itens", "visualizar"),listTipoItemController)
tipoItemRoutes.get("/group/:group_id", authTokenMiddleware, permissionMiddleware("itens", "visualizar"),listByGroupController)
tipoItemRoutes.get("/gr/:id", authTokenMiddleware, permissionMiddleware("itens", "visualizar"), listItemWithGroupController)
tipoItemRoutes.get("/:id", authTokenMiddleware, listTipoItemByIdController)
tipoItemRoutes.get("/filter/:cor", authTokenMiddleware, listTipoItemByLinhaController)
tipoItemRoutes.get("/item/:itemId", authTokenMiddleware, getByItemController)
tipoItemRoutes.patch("/:id", authTokenMiddleware,  permissionMiddleware("itens", "editar"),updateTipoItemController)
tipoItemRoutes.delete("/:id", authTokenMiddleware, deleteTipoItemCotroller)

export default tipoItemRoutes;
