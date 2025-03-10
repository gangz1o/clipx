import { app, ipcMain } from 'electron'

export const handleAutoLaunch = () => {
  ipcMain.handle('toggleAutoLaunch', (_, enable: boolean) => {
    if (process.platform === 'darwin') {
      app.setLoginItemSettings({
        openAtLogin: enable,
        openAsHidden: true
      })
    } else {
      app.setLoginItemSettings({
        openAtLogin: enable,
        path: process.execPath
      })
    }
  })
}

export const handleSound = () => {
  ipcMain.handle('toggleSound', (_, enable: boolean) => {
    console.log('toggleSound', enable)
  })
}
