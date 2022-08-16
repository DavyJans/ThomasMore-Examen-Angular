import { Role } from "./role";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  userName: string;
  password: string;
  token: string;
  street: string;
  city: string;
  imageUrl: string;
}