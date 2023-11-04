<template>
   <div class="modal">
      <div
         class="modal__overlay"
         :class="{ 'modal__overlay--visible': isModalOpened }"
         @click="closeModal"
      ></div>
      <div class="modal__block" :class="{ 'modal__block--visible': isModalOpened }">
         <div class="modal__content">
            <slot name="content" />
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
   name: 'UserModal',
   props: {
      isModalOpened: Boolean as PropType<boolean>
   },
   emits: {
      closeModal: (value: boolean) => true
   },
   setup(props, { emit }) {
      const closeModal = (): void => {
         emit('closeModal', false);
      };

      return {
         closeModal
      };
   }
});
</script>
