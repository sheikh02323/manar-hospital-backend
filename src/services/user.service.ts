import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../models/user.model";

export class UserService {
  // Get all users
  static async getAllUsers(): Promise<IUser[]> {
    return UserRepository.getAllUsers();
  }

  // Get a single user by ID
  static async getUserById(id: string): Promise<IUser | null> {
    return UserRepository.getUserById(id);
  }

  // Create a new user
  static async createUser(data: Partial<IUser>): Promise<IUser> {
    return UserRepository.createUser(data);
  }

  // Update a user by ID
  static async updateUser(
    id: string,
    data: Partial<IUser>,
  ): Promise<IUser | null> {
    return UserRepository.updateUser(id, data);
  }

  // Delete a user by ID
  static async deleteUser(id: string): Promise<IUser | null> {
    return UserRepository.deleteUser(id);
  }
}
