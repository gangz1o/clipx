import { app, BrowserWindow, globalShortcut } from 'electron'
import { createWindow } from './window'

app
  .whenReady()
  .then(() => {
    globalShortcut.register('CommandOrControl+;', () => {
      console.log('Alt+CommandOrControl+I is pressed')
    })
  })
  .then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
