import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router();

// GET all users
userRouter.get("/", UserController.getAllUsers);

// GET a single user by ID
userRouter.get("/:id", UserController.getUserById);

// POST a new user (create user)
userRouter.post("/", UserController.createUser);

// PUT (update) a user by ID
userRouter.put("/:id", UserController.updateUser);

// DELETE a user by ID
userRouter.delete("/:id", UserController.deleteUser);

export { userRouter };
