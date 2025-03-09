import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    autoLaunch: false,
    soundEnabled: false
  }),
  actions: {
    toggleAutoLaunch() {
      this.autoLaunch = !this.autoLaunch
    },
    toggleSound() {
      this.soundEnabled = !this.soundEnabled
    }
  },
  persist: true
})
