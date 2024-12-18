import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';
import LibraryView from '../views/LibraryView.vue';
import LoginView from '../views/LoginView.vue';
import CadastroView from '../views/CadastroView.vue'; // Adiciona a rota para Cadastro

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/library',
      component: LibraryView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/cadastro', // Nova rota para o cadastro
      component: CadastroView
    }
  ]
});

export default router;
