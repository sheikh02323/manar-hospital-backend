import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  // Create a new user
  static async createUser(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  // Get all users
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  // Get a single user by ID
  static async getUserById(req: Request, res: Response) {
    try {
      // Fix: Ensure userId is a string
      const userId = req.params.id as string;
      const user = await UserService.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  // Update a user by ID
  static async updateUser(req: Request, res: Response) {
    try {
      // Fix: Ensure userId is a string
      const userId = req.params.id as string;
      const updatedData = req.body;
      const updatedUser = await UserService.updateUser(userId, updatedData);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  // Delete a user by ID
  static async deleteUser(req: Request, res: Response) {
    try {
      // Fix: Ensure userId is a string
      const userId = req.params.id as string;
      const deleted = await UserService.deleteUser(userId);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}
