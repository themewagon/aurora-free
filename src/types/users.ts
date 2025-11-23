export interface User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  status: string;
  role: 'Admin' | 'Supervisor' | 'User';
  department: 'Engineering' | 'Design' | 'Marketing' | 'Human Resources' | 'Finance' | 'Support';
  phone: string;
  location: string;
  createdAt: string;
}
