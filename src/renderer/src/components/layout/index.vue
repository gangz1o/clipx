<template>
  <div class="h-screen w-screen bg-gray-100">
    <div class="window-header drag h-9 flex items-center justify-center backdrop-blur">
      <h1 class="text-xl font-medium select-none">
        {{ routeTitles[router.currentRoute.value.path] || 'ClipX' }}
      </h1>
    </div>
    <el-container class="h-[calc(100%-36px)]">
      <el-aside width="110px" class="bg-gray-100 backdrop-blur border-r border-gray-200">
        <el-menu
          mode="vertical"
          :default-active="activeMenu"
          class="mac-menu h-full"
          @select="handleSelect"
        >
          <el-menu-item index="/general" class="mac-menu-item">
            <div class="flex flex-col items-center justify-center w-full h-full">
              <el-icon size="24px"><Setting /></el-icon>
              <span class="text-sm font-medium mt-1">通 用</span>
            </div>
          </el-menu-item>
          <el-menu-item index="/shortcuts" class="mac-menu-item">
            <div class="flex flex-col items-center justify-center w-full h-full">
              <el-icon size="24px"><Rank /></el-icon>
              <span class="text-sm font-medium mt-1">快捷键</span>
            </div>
          </el-menu-item>
          <el-menu-item index="/sync" class="mac-menu-item">
            <div class="flex flex-col items-center justify-center w-full h-full">
              <el-icon size="24px"><Connection /></el-icon>
              <span class="text-sm font-medium mt-1">同 步</span>
            </div>
          </el-menu-item>
          <el-menu-item index="/advanced" class="mac-menu-item">
            <div class="flex flex-col items-center justify-center w-full h-full">
              <el-icon size="24px"><Star /></el-icon>
              <span class="text-sm font-medium mt-1">高 级</span>
            </div>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="bg-gray-100 backdrop-blur p-8">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Connection, Rank, Setting, Star } from '@element-plus/icons-vue'
const activeMenu = ref('/general')
const router = useRouter()

// 定义路由标题映射
const routeTitles: Record<string, string> = {
  '/general': '通用',
  '/shortcuts': '快捷键',
  '/sync': '同步',
  '/advanced': '高级'
}

//监听路由变化更新标题
watch(
  () => router.currentRoute.value.path,
  (path) => {
    const title = routeTitles[path] || 'ClipX'
    document.title = `${title}`
  },
  { immediate: true }
)
// 监听菜单点击事件
const handleSelect = (key: string) => {
  router.push(key)
}
</script>

<style scoped lang="scss">
.mac-menu {
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0.03);
  --el-menu-active-color: #2a64c5;
  border: none !important;
  padding: 8px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
}

.mac-menu-item {
  height: 80px !important;
  line-height: 1.2 !important;
  border-radius: 8px !important;
  padding: 0 !important;
  margin: 0 !important;

  // 重置 Element Plus 的默认样式
  :deep(.el-menu-item) {
    padding: 0 !important;
  }

  // 确保图标和文字容器占满整个菜单项
  > div {
    width: 100% !important;
    height: 100% !important;
  }

  .el-icon {
    margin: 0 !important;
    height: auto !important;
  }

  &.is-active {
    background-color: rgba(0, 102, 204, 0.1) !important;

    .el-icon {
      color: #2a64c5 !important;
    }
    span {
      color: #2a64c5 !important;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03) !important;
  }
}

// 添加过渡效果
.mac-menu-item {
  transition: all 0.2s ease-in-out !important;

  .el-icon,
  span {
    transition: color 0.2s ease-in-out !important;
  }
}
</style>
