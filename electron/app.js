const { app, BrowserWindow, Menu, screen, shell } = require('electron')
const path = require('path')
const fs = require('fs')
const menuTemplate = require('./menu.js')
let os = require('./os.js')

function createWindow () {
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu) 
  const primaryDisplay = screen.getPrimaryDisplay()

  const win = new BrowserWindow({
    show: false,
    backgroundColor: '#2e2c29',
    title: 'Code Planner',
    titleBarOverlay: true,
    webPreferences: {
      nodeIntegration: false,
            enableRemoteModule: true,
            contextIsolation: true,
            webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  const handleUrlOpen = (e, url)=>{
    if( url.match(/^http/)){
      e.preventDefault()
      shell.openExternal(url)
    }
  }
  win.webContents.on('will-navigate', handleUrlOpen)
  win.webContents.on('new-window', handleUrlOpen)
  win.once('ready-to-show', () => {
    win.show()
  })
  win.maximize()
  win.loadFile('./app.html')
}

app.whenReady().then(() => {
  // ipcMain.handle('plugin-list', pluginList)
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
    app.quit()
})
