<template>
  <div class="space-y-8">
    <div class="space-y-6">
      <h3 class="text-[#1d1d1f] text-lg font-medium">基本设置</h3>

      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              :checked="autoLaunch"
              class="sr-only peer"
              @change="toggleAutoLaunch"
            />
            <div
              class="w-9 h-5 bg-[#d2d2d7] peer-focus:outline-none rounded-full peer transition-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-none peer-checked:bg-[#2a64c5]"
            ></div>
          </label>
          <span class="text-sm text-[#1d1d1f]">随系统启动</span>
        </div>

        <div class="flex items-center space-x-4">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              :checked="soundEnabled"
              class="sr-only peer"
              @change="toggleSound"
            />
            <div
              class="w-9 h-5 bg-[#d2d2d7] peer-focus:outline-none rounded-full peer transition-none peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-none peer-checked:bg-[#2a64c5]"
            ></div>
          </label>
          <span class="text-sm text-[#1d1d1f]">复制提示音</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGeneralStore } from '@renderer/stores/useGeneralStore'
import { storeToRefs } from 'pinia'
const generalStore = useGeneralStore()
const { autoLaunch, soundEnabled } = storeToRefs(generalStore)

const toggleAutoLaunch = () => {
  generalStore.toggleAutoLaunch()
  window.api.toggleAutoLaunch(autoLaunch.value)
}

const toggleSound = () => {
  generalStore.toggleSound()
  window.api.toggleSound(soundEnabled.value)
}
</script>

<style scoped></style>
