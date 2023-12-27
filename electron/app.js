const { app, BrowserWindow, Menu, ipcMain, nativeTheme } = require('electron/main')
const path = require('node:path')
const menuTemplate = require('./menu.js')

function createWindow () {
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu) 

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  win.loadFile('./app.html')
}

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
    app.quit()
})
