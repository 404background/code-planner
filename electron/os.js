const { ipcMain, dialog, nativeTheme, shell } = require('electron')
const fs = require('fs')
const child_process = require('child_process')

let fileOpen = ipcMain.handle('file-open', async (event) => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
      filters: { name: 'All Files', extensions: ['*'] },
  })
  if (canceled) return { canceled, data: [] }
  const data = filePaths.map((filePath) =>
      fs.readFileSync(filePath, { encoding: 'utf8' })
  )
  return { canceled, data }
})

let fileOpenArg = ipcMain.handle('file-open-arg', async (event, filePath) => {
  return fs.readFileSync(filePath, { encoding: 'utf8' })
})
  
let fileSave = ipcMain.handle('file-save', async (event, data) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    filters: { name: 'All Files', extensions: ['*'] },
  })
  if (canceled) { return }
  fs.writeFileSync(filePath, data)
})

let fileSaveArg = ipcMain.handle('file-save-arg', async (event, data, fileName) => {
  fs.writeFileSync(fileName, data)
})

let folderRead = ipcMain.handle('folder-read', async(event, path) => {
  const folderRead = fs.promises.readdir(path)
  for(i in folderRead) {
    console.log(i)
  }
  return folderRead
})

let folderMakeArg = ipcMain.handle('folder-make-arg', async (event, path) => {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) throw err;
  })
})

let openExternal = ipcMain.handle('open-external', async (event, url) => {
  shell.openExternal(url)
})

let darkMode = ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

let execHandle = ipcMain.handle('exec-handle', async (event, command) => {
  child_process.exec(command, (error, stdout, stderr) => {
    if ( error instanceof Error) {
        console.error(error);
        console.log('exec Error *******');
        fs.appendFileSync('./user/error.log', error.toString().trim())
    } else {
        console.log(stdout);
        console.log('exec Success!');
        fs.appendFileSync('./user/console.log', stdout.toString().trim())
    }
  })
})

let execSyncHandle = ipcMain.handle('execSync-handle', async (event, command) => {
  child_process.execSync(command, (error, stdout, stderr) => {
    if ( error instanceof Error) {
        console.error(error);
        console.log('execSync Error *******');
        fs.appendFileSync('./user/error.log', error.toString().trim())
    } else {
        console.log(stdout);
        console.log('execSync Success!');
        fs.appendFileSync('./user/console.log', stdout.toString().trim())
    }
  })
})

let sleepMs = ipcMain.handle('sleep-ms', async (event, ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
})

module.exports = { 
  fileOpen, fileOpenArg,
  fileSave, fileSaveArg,
  folderRead, folderMakeArg,
  openExternal,
  darkMode,
  execHandle, execSyncHandle,
  sleepMs
}
