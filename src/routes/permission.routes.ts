import { Router } from "express";

const permissionRoute = Router();

import { createPermissonsController } from "../controllers/permissions/createPermissions.controller";
import { listPermissionController } from "../controllers/permissions/listPermissions.controller";
import { updatePermissionController } from "../controllers/permissions/updatePermissions.controller";
import { deletePermissionController } from "../controllers/permissions/deletePermissions.controller";

permissionRoute.post("", createPermissonsController)
permissionRoute.get("", listPermissionController)
permissionRoute.patch("", updatePermissionController)
permissionRoute.delete("/:id", deletePermissionController)

export default permissionRoute;

