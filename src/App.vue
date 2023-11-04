<template>
   <main class="main">
      <div class="container">
         <SearchBar />
         <UserList />
      </div>
   </main>
</template>

<script lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import UserList from '@/components/UserList.vue';

export default {
   name: 'App',
   components: {
      SearchBar,
      UserList
   }
};
</script>
