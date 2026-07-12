import { User } from "../models/user.model";

export class UserRepository {
  // Get all users
  static async getAllUsers() {
    return await User.findAll();
  }

  // Get a single user by ID
  static async getUserById(id: string) {
    return await User.findByPk(id); // Find by primary key
  }

  // Create a new user
  static async createUser(data: any) {
    return await User.create(data);
  }

  // Update a user
  static async updateUser(user: User, updatedData: any) {
    return await user.update(updatedData); // Update the user
  }

  // Delete a user
  static async deleteUser(user: User) {
    return await user.destroy(); // Delete the user
  }
}
