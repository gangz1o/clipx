import { createWindow } from './window'
import { app, BrowserWindow } from 'electron'
import { handleAutoLaunch, handleSound } from './ipcGeneral'
import { electronApp, optimizer } from '@electron-toolkit/utils'

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  //处理开机自启和声音
  handleAutoLaunch()
  handleSound()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
