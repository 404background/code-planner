function iconNode() {
  let workColumn = document.getElementById('work-column')
  while(workColumn.firstChild) {
    workColumn.removeChild(workColumn.firstChild)
  }

  let StartNodeRED = document.createElement('button')
  StartNodeRED.setAttribute('id', 'start-node-red')
  StartNodeRED.setAttribute('onclick', 'StartNodeRED()')
  StartNodeRED.innerHTML = 'Start Node-RED'
  workColumn.appendChild(StartNodeRED)

  let DisplayReloadNode = document.createElement('button')
  DisplayReloadNode.setAttribute('id', 'display-reload-node')
  DisplayReloadNode.setAttribute('onclick', 'DisplayReloadNode()')
  DisplayReloadNode.innerHTML = 'Display Reload'
  workColumn.appendChild(DisplayReloadNode)

  let webview = document.createElement('webview')
  webview.setAttribute('id', 'node-red')
  webview.setAttribute('src', 'http://localhost:8000/red')
  workColumn.appendChild(webview)
}

function StartNodeRED() {
  window.os.exec('npm run node-red')
}

function DisplayReloadNode() {
  iconNode()
}
