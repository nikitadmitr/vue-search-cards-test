import { createApp } from 'vue';
import { createPinia } from 'pinia';

import components from '@/components/UI';

import App from './App.vue';

const app = createApp(App);

for (const component in components) {
   app.component(component, components[component as keyof typeof components]);
}

app.use(createPinia());

app.mount('#app');

import '@/assets/scss/base.scss';
