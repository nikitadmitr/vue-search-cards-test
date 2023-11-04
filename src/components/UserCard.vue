<template>
   <div class="user-card user-card--button" @click="clickHandler">
      <div class="user-card__header">
         <h2 class="subtitle">{{ user?.name }}</h2>
      </div>
      <div class="user-card__block">
         <div class="user-card__item">
            <div class="user-card__item-icon">
               <MobileIcon />
            </div>
            <div class="user-card__item-text">{{ user?.phone }}</div>
         </div>
         <div class="user-card__item">
            <div class="user-card__item-icon">
               <MailIcon />
            </div>
            <div class="user-card__item-text">{{ user?.email }}</div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

import type User from '@/types/User';
import MailIcon from '@/assets/icons/MailIcon.vue';
import MobileIcon from '@/assets/icons/MobileIcon.vue';

export default defineComponent({
   name: 'UserCard',
   components: {
      MailIcon,
      MobileIcon
   },
   props: {
      user: {
         type: Object as PropType<User>,
         required: true
      }
   },
   setup(props, { emit }) {
      const clickHandler = (): void => {
         emit('openModal', props.user);
      };

      return {
         clickHandler
      };
   }
});
</script>
