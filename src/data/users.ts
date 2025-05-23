import { LocalesValues } from "intlayer";
import { Email } from "../../tenant";

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  tenant:string;
  email?:Email;
  defaultLocale?:LocalesValues;
}

export const users: User[] = [
  { id: 1, username: 'admin', password: 'password', name: 'Admin',tenant:"admin" },
  { id: 2, username: 'test-user', password: 'password', name: 'Test User',tenant:"orgA" },
  { id: 3, username: 'user-test', password: 'password', name: 'User Test',tenant:"orgB" },
  { id: 3, username: 'test-user', password: 'password', name: 'Test User',tenant:"orgA" },
];