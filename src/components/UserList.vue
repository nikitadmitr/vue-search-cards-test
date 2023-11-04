<template>
   <section class="users">
      <AppLoader v-if="isLoading" />
      <div v-else-if="isUsersEmpty">Пользователи не найдены</div>
      <div v-else class="user-list">
         <AppModal :isModalOpened="isUserModalOpened" @closeModal="closeUserModal">
            <template #content>
               <div class="user-card user-card--expanded">
                  <div class="user-card__header">
                     <h2 class="subtitle user-card__title">{{ currentUser?.name }}</h2>
                     <span class="modal__close-button" @click="closeUserModal">
                        <CloseIcon />
                     </span>
                  </div>
                  <div class="user-card__block">
                     <div class="user-card__list">
                        <div class="user-card__list-item">
                           <p class="user-card__label">Телефон:</p>
                           <p class="user-card__value">+7 (918) 078-17-05</p>
                        </div>
                        <div class="user-card__list-item">
                           <p class="user-card__label">Почта:</p>
                           <p class="user-card__value">yysavch1@mts.ru</p>
                        </div>
                        <div class="user-card__list-item">
                           <p class="user-card__label">Дата приема:</p>
                           <p class="user-card__value">15.10.2020</p>
                        </div>
                        <div class="user-card__list-item">
                           <p class="user-card__label">Должность:</p>
                           <p class="user-card__value">Дизайнер</p>
                        </div>
                        <div class="user-card__list-item">
                           <p class="user-card__label">Подразделение:</p>
                           <p class="user-card__value">
                              Трайб автоматизированных систем контактных центров
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="user-card__block">
                     <div class="user-card__list-item user-card__list-item--wide">
                        <p class="user-card__label">Дополнительная информация:</p>
                        <p class="user-card__value">
                           Разработчики используют текст в качестве заполнителя макта страницы.
                           Разработчики используют текст в качестве заполнителя макта страницы.
                        </p>
                     </div>
                  </div>
               </div>
            </template>
         </AppModal>
         <div v-for="(user, index) in users" :key="index" class="user-list__item">
            <UserCard :user="user" @openModal="openUserModal" />
         </div>
      </div>
   </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { useUserStore } from '@/stores/user';

import type User from '@/types/User';
import UserCard from '@/components/UserCard.vue';
import CloseIcon from '@/assets/icons/CloseIcon.vue';

export default defineComponent({
   name: 'UserList',
   components: {
      UserCard,
      CloseIcon
   },
   setup() {
      const userStore = useUserStore();

      userStore.fetchUsers();

      const isUserModalOpened = ref(false);
      const currentUser = ref<User | null>(null);

      const closeUserModal = () => {
         isUserModalOpened.value = false;
      };
      const openUserModal = (user: User) => {
         isUserModalOpened.value = true;
         currentUser.value = user;
      };

      const users = computed(() => userStore.users);
      const isLoading = computed(() => userStore.isLoading);
      const isUsersEmpty = computed(() => users.value.length === 0);

      return {
         users,
         isLoading,
         isUsersEmpty,
         isUserModalOpened,
         closeUserModal,
         openUserModal,
         currentUser
      };
   }
});
</script>
