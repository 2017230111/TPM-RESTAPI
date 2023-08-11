import * as UserService from "../services/users.js";
import express from "express";

const router = express.Router();

router.get("/users", UserService.getAllUser);
router.post("/users", UserService.createUser);
router.put("/users/:id", UserService.updateUser);
router.delete("/users/:id", UserService.deleteUser);
router.get("/users/:id", UserService.getUserByUserId);

export default router;
