//vue-router 初始路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@renderer/components/layout/index.vue'
import General from '@renderer/views/General.vue'
import Shortcuts from '@renderer/views/Shortcuts.vue'
import Sync from '@renderer/views/Sync.vue'
import Advanced from '@renderer/views/Advanced.vue'
const routes = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'General',
        path: '/general',
        component: General
      },
      {
        name: 'Shortcuts',
        path: '/shortcuts',
        component: Shortcuts
      },
      {
        name: 'Sync',
        path: '/sync',
        component: Sync
      },
      {
        name: 'Advanced',
        path: '/advanced',
        component: Advanced
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
