const { app, BrowserWindow, Menu, screen, shell, ipcMain, nativeTheme } = require('electron/main')
const path = require('node:path')
const menuTemplate = require('./menu.js')

function createWindow () {
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu) 
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  const win = new BrowserWindow({
    width: width,
    height: height,
    minWidth: 600,
    minHeight: 400,
    useContentSize: true,
    title: 'Code Planner',
    titleBarOverlay: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  const handleUrlOpen = (e, url)=>{
    if( url.match(/^http/)){
      e.preventDefault()
      shell.openExternal(url)
    }
  }
  win.webContents.on('will-navigate', handleUrlOpen);
  win.webContents.on('new-window', handleUrlOpen);

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
