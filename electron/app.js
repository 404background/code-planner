const { app, BrowserWindow, Menu, screen, shell, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
const menuTemplate = require('./menu.js')
let darkMode  = require('./plugin/setting/dark_mode.js')

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
  win.webContents.on('will-navigate', handleUrlOpen);
  win.webContents.on('new-window', handleUrlOpen);

  win.loadFile('./app.html')
}

// async function pluginList() {
//   const pluginListPath = path.join(__dirname, 'plugin_list.json');
//   const pluginList = JSON.parse(fs.readFileSync(pluginListPath, 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//   }))
//   console.log(pluginList)
//   return pluginList
// }

ipcMain.handle('file-open', async (event) => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
      filters: [{ name: 'Documents', extensions: ['txt'] }],
  })
  if (canceled) return { canceled, data: [] }
  const data = filePaths.map((filePath) =>
      fs.readFileSync(filePath, { encoding: 'utf8' })
  )
  return { canceled, data }
})

ipcMain.handle('file-save', async (event, data) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
      filters: [{ name: 'Documents', extensions: ['txt'] }],
  })
  if (canceled) { return }
  fs.writeFileSync(filePath, data)
})

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
