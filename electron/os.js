const { ipcMain, dialog, shell } = require('electron')
const fs = require('fs')

let fileOpen = ipcMain.handle('file-open', async (event) => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
      filters: [{ name: 'Documents', extensions: ['txt'] }],
  })
  if (canceled) return { canceled, data: [] }
  const data = filePaths.map((filePath) =>
      fs.readFileSync(filePath, { encoding: 'utf8' })
  )
  return { canceled, data }
})
  
let fileSave = ipcMain.handle('file-save', async (event, data) => {
  const { canceled, filePath } = await dialog.showSaveDialog({
      filters: [{ name: 'Documents', extensions: ['txt'] }],
  })
  if (canceled) { return }
  fs.writeFileSync(filePath, data)
})

let openExternal = ipcMain.handle('open-external', async (event, url) => {
  shell.openExternal(url)
})

module.exports = { fileOpen, fileSave, openExternal }
