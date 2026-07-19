import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  // Get all users
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  }

  // Get user by ID
  static async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
  const user = await UserService.getUserById(String(id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  }

  // Create a new user
  static async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  }

  // Update user by ID
  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
   const updatedUser = await UserService.updateUser(id as string, req.body);
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  }

  // Delete user by ID
  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedUser = await UserService.deleteUser(id as string);
      if (deletedUser) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
}
