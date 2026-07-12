import { UserRepository } from "../repositories/user.repository";

export class UserService {
  // Get all users
  static async getAllUsers() {
    return await UserRepository.getAllUsers();
  }

  // Get a single user by ID
  static async getUserById(id: string) {
    return await UserRepository.getUserById(id);
  }

  // Create a new user
  static async createUser(userData: any) {
    return await UserRepository.createUser(userData);
  }

  // Update a user by ID
  static async updateUser(id: string, updatedData: any) {
    const user = await UserRepository.getUserById(id);
    if (user) {
      return await UserRepository.updateUser(user, updatedData);
    }
    return null;
  }

  // Delete a user by ID
  static async deleteUser(id: string) {
    const user = await UserRepository.getUserById(id);
    if (user) {
      await UserRepository.deleteUser(user);
      return true;
    }
    return false;
  }
}
