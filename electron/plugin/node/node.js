function iconNode() {
  let workColumn = document.getElementById('work-column')
  while(workColumn.firstChild) {
    workColumn.removeChild(workColumn.firstChild)
  }

  let StartNodeRED = document.createElement('button')
  StartNodeRED.setAttribute('id', 'start-node-red')
  StartNodeRED.setAttribute('onclick', 'StartNodeRED()')
  StartNodeRED.innerHTML = 'Start'
  workColumn.appendChild(StartNodeRED)

  let DisplayReloadNode = document.createElement('button')
  DisplayReloadNode.setAttribute('id', 'display-reload-node')
  DisplayReloadNode.setAttribute('onclick', 'DisplayReloadNode()')
  DisplayReloadNode.innerHTML = 'Editor'
  workColumn.appendChild(DisplayReloadNode)

  let DisplayNodeUi = document.createElement('button')
  DisplayNodeUi.setAttribute('id', 'display-node-ui')
  DisplayNodeUi.setAttribute('onclick', 'DisplayNodeUi()')
  DisplayNodeUi.innerHTML = 'UI Dashboard'
  workColumn.appendChild(DisplayNodeUi)

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

function DisplayNodeUi() {
  let webview = document.getElementById('node-red')
  webview.setAttribute('src', 'http://localhost:8000/api/ui')
}
