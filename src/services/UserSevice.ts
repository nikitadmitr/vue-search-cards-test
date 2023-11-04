import axios from 'axios';
import type User from '@/types/User';

const API_URL: string = import.meta.env.VITE_API_URL;

export default class UserService {
   async getUsers(query?: string): Promise<User[]> {
      try {
         const url: string = query ? `${API_URL}?term=${query}` : API_URL;
         const response = await axios.get<User[]>(url);
         return response.data;
      } catch (error: any) {
         throw error;
      }
   }
}
