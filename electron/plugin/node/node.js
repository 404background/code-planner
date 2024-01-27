const nodeRedButton = {
//id: [ function, innderHTML ]
  'start-node-red': [ 'StartNodeRED()', 'Start' ],
  'display-reload-node': [ 'DisplayReloadNode()', 'Editor' ],
  'display-node-ui': [ 'DisplayNodeUi()', 'UI Dashboard' ],
  'node-red-list': [ 'NodeRedList()', 'list']
}

function iconNode() {
  let workColumn = document.getElementById('work-column')
  while(workColumn.firstChild) {
    workColumn.removeChild(workColumn.firstChild)
  }
  for(i in nodeRedButton) {
    let element = document.createElement('button')
    element.setAttribute('id', i)
    element.setAttribute('onclick', nodeRedButton[i][0])
    element.innerHTML = nodeRedButton[i][1]
    workColumn.appendChild(element)
  }

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

function NodeRedList() {
  window.os.exec('start npm list')
}
