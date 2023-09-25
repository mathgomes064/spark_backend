import { Router } from "express";
import { userCreateController } from "../controllers/user/createUser.controller";
import { userListController } from "../controllers/user/listUser.controller";
import { userUpdateController } from "../controllers/user/updateUser.controller";
import { userDeleteController } from "../controllers/user/deleteUser.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";
import { permissionMiddleware } from "../middlewares/permissions/propriedadePermission.middleware";
import { userListProfileController } from "../controllers/user/userListProfile.controller";

const userRoutes = Router();

userRoutes.post("", userCreateController);
userRoutes.get("", authTokenMiddleware, permissionMiddleware("usuario", "visualizar"), userListController);
userRoutes.get("/me", authTokenMiddleware, userListProfileController);
userRoutes.patch("/:id", authTokenMiddleware, permissionMiddleware("usuario", "editar"), userUpdateController);
userRoutes.delete("/:id", authTokenMiddleware, userDeleteController);

export default userRoutes;


