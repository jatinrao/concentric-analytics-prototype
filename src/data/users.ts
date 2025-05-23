import { Email } from "../../tenant";

export interface User {
  id: number;
  username: string;
  password: string;
  name: string;
  tenant:string;
  email?:Email;
  profileImage:string;
  defaultLocale?:string;
}

export const users: User[] = [
  { id: 1, username: 'admin', password: 'password', name: 'Admin',tenant:"admin",profileImage:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { id: 2, username: 'test-user', password: 'password', name: 'Test User',tenant:"orgA",profileImage:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { id: 3, username: 'user-test', password: 'password', name: 'User Test',tenant:"orgB",profileImage:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
  { id: 3, username: 'test-user', password: 'password', name: 'Test User',tenant:"orgA",profileImage:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" },
];