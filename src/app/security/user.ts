import { Role } from "./role";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  password: string;
  token: string;
}