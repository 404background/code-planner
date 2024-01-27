const { contextBridge, ipcRenderer } = require('electron')

const iconList = {
  "home": "./images/house-solid.svg",
  // "search": "./images/magnifying-glass-solid.svg",
  // "stl":  "./images/cube-solid.svg",
  // "ino": "./images/microchip-solid.svg",
  "node": "./images/share-nodes-solid.svg",
  "python": "./images/python.svg",
  "library": "./images/book-solid.svg",
  // "brain": "./images/brain-solid.svg",
  // "setting": "./images/gear-solid.svg",
}

contextBridge.exposeInMainWorld('myApi', {
  // iconList: () => ipcRenderer.invoke('plugin-list'),
  iconDisplay: () => {
    let iconColumn = document.getElementById("icon-column")
    for(let i in iconList) {
        let icon = document.createElement("img")
        icon.setAttribute("id", `${i}-icon`)
        icon.setAttribute("src", `${iconList[i]}`)
        icon.setAttribute("class", "select-icon")
        icon.setAttribute("onclick", `icon${i.charAt(0).toUpperCase() + i.slice(1)}()`)
        iconColumn.appendChild(icon)

        let iconLoad = document.createElement("script")
        iconLoad.setAttribute("src", `./plugin/${i}/${i}.js`)
        iconColumn.appendChild(iconLoad)

        let cssLoad = document.createElement("link")
        cssLoad.setAttribute('rel', 'stylesheet')
        cssLoad.setAttribute('type', 'text/css')
        cssLoad.setAttribute('href', `./plugin/${i}/${i}.css`)
        iconColumn.appendChild(cssLoad)
    }
  },
})

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle')
})

contextBridge.exposeInMainWorld('os', {
  openExternal: () => ipcRenderer.invoke('open-external', url),
  exec: (command) => ipcRenderer.invoke('exec-handle', command),
  fileOpen: (id) => {
    async function open() {
      const { canceled, data } = await ipcRenderer.invoke('file-open')
      if (canceled) { return }
      document.getElementById(id).value = data[0] || ''
    }
    open()
  },
  fileOpenArg: (id, filePath) => {
    async function open() {
      const text = await ipcRenderer.invoke('file-open-arg', filePath)
      document.getElementById(id).value = text || ''
    }
    open()
  },
  fileSave: (id) => {
    async function save() {
      const data =  document.getElementById(id).value
      await ipcRenderer.invoke('file-save', data)
    }
    save()
  },
  fileSaveArg: (id, fileName) => {
    async function save() {
      const data =  document.getElementById(id).value
      await ipcRenderer.invoke('file-save-arg', data, fileName)
    }
    save()
  },
  folderRead: (path) => ipcRenderer.invoke('folder-read', path),
  folderMakeArg: (path) => ipcRenderer.invoke('folder-make-arg', path),
})

contextBridge.exposeInMainWorld('sleep', {
  ms: (ms) => ipcRenderer.invoke('sleep-ms', ms)
})
