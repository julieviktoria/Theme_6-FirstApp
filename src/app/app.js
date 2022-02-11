import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import routes from '../../routes.js';

const app_router = createRouter({
    routes: routes,
    history: createWebHistory()
})

createApp(App)
    .use(app_router)
    .mount('#app');