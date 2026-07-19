import User, { IUser } from "../models/user.model";

export class UserRepository {
  // Get all users
  static async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  // Get a single user by ID
  static async getUserById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  // Create a new user
  static async createUser(data: Partial<IUser>): Promise<IUser> {
    const user = new User(data);
    return user.save();
  }

  // Update a user by ID
  static async updateUser(
    id: string,
    data: Partial<IUser>,
  ): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete a user by ID
  static async deleteUser(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }
}
