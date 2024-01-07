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
  setup: () => {
    document.querySelector('.file-open').addEventListener('click', async () => {
        const { canceled, data } = await ipcRenderer.invoke('file-open')
        if (canceled) { return }
        document.querySelector('.text-area').value = data[0] || ''
    })
    document.querySelector('.file-save').addEventListener('click', async () => {
        const data =  document.querySelector('.text-area').value
        await ipcRenderer.invoke('file-save', data)
    })
  },
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
  folderName: (path) => ipcRenderer.invoke('folder-name', path)
})
