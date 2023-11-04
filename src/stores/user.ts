import { ref } from 'vue';
import { defineStore } from 'pinia';

import UserService from '@/services/UserSevice';
import type User from '@/types/User';

export const useUserStore = defineStore('users', () => {
   const users = ref<User[]>([]);
   const isLoading = ref<Boolean>(false);

   const fetchUsers = async (query?: string): Promise<void> => {
      isLoading.value = true;
      const userService = new UserService();
      try {
         users.value = await userService.getUsers(query);
      } catch (error) {
         throw error;
      } finally {
         isLoading.value = false;
      }
   };

   return {
      users,
      isLoading,
      fetchUsers
   };
});
