import { Router } from "express";

const userLoginRoute = Router();

import { userLoginController } from "../controllers/login/userLogin.controller";

userLoginRoute.post("", userLoginController);

export default userLoginRoute;

