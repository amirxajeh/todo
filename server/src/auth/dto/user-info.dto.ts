import { User } from "../../users/dto/user-dto";

export class UserInfo implements Partial<User> {
  username!: string;
  id!: number;
  // roles!: string[];
  // I don't know how to use it
  // accessToken?: string;
}
