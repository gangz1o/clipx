//vue-router 初始路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@renderer/components/layout/index.vue'
import General from '@renderer/views/General.vue'
import Shortcuts from '@renderer/views/Shortcuts.vue'
import Sync from '@renderer/views/Sync.vue'
import Advanced from '@renderer/views/Advanced.vue'
import Clipboard from '@renderer/components/clipboard/index.vue'
const routes = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    redirect: '/general',
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
  },
  {
    name: 'Clipboard',
    path: '/clipboard',
    component: Clipboard
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
