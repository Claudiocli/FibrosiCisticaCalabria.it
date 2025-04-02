import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DirectiveView from '@/views/DirectiveView.vue'
import DonationView from '@/views/DonationView.vue'
import InfoView from '@/views/InfoView.vue'
import StoryView from '@/views/StoryView.vue'
import CRRCView from '@/views/CRRCView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/direttivo',
      name: 'Direttivo',
      component: DirectiveView,
    },
    {
      path: '/donation',
      name: 'Donazioni',
      component: DonationView,
    },
    {
      path: '/fibrosicistica',
      name: 'La Fibrosi Cistica',
      component: InfoView,
    },
    {
      path: '/storia',
      name: 'Storia',
      component: StoryView,
    },
    {
      path: '/crrc',
      name: 'CRRC',
      component: CRRCView,
    },
  ],
})

export default router
