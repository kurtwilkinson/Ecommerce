import { createRouter, createWebHistory } from 'vue-router';

import ItemIndex from "../components/Item/List.vue"
import ItemCreate from "../components/Item/Create.vue"

const routes = [
  {
    path: '/',
    name: 'items.index',
    component: ItemIndex
  },
  {
    path: '/items/create',
    name: 'items.create',
    component: ItemCreate
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
