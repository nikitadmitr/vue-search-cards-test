<template>
   <section class="search">
      <div class="input">
         <input v-model="searchTerm" type="text" class="input__field" @input="searchUsers" />
         <SearchIcon class="input__icon" />
      </div>
   </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useUserStore } from '@/stores/user';
import SearchIcon from '@/assets/icons/SearchIcon.vue';

export default defineComponent({
   name: 'SearchBar',
   components: {
      SearchIcon
   },
   setup() {
      const userStore = useUserStore();

      const searchTerm = ref<string>('');

      const searchUsers = () => {
         userStore.fetchUsers(searchTerm.value);
      };

      return {
         searchTerm,
         searchUsers
      };
   }
});
</script>
