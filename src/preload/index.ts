import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  toggleAutoLaunch: (autoLaunch: boolean) => ipcRenderer.invoke('toggleAutoLaunch', autoLaunch),
  toggleSound: (soundEnabled: boolean) => ipcRenderer.invoke('toggleSound', soundEnabled)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
