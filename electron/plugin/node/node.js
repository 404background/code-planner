const nodeRedButton = {
//id: [ function, innderHTML ]
  'start-node-red': [ 'StartNodeRED()', 'Start' ],
  'display-reload-node': [ 'DisplayReloadNode()', 'Editor' ],
  'display-node-ui': [ 'DisplayNodeUi()', 'UI Dashboard' ],
  'node-red-list': [ 'NodeRedList()', 'list']
}

function iconNode() {
  const divID = ["node"]
  window.common.iconInit('node', divID)
  node = document.getElementById(divID[0])

  for(i in nodeRedButton) {
    let element = document.createElement('button')
    element.setAttribute('id', i)
    element.setAttribute('onclick', nodeRedButton[i][0])
    element.innerHTML = nodeRedButton[i][1]
    node.appendChild(element)
  }

  let webview = document.createElement('webview')
  webview.setAttribute('id', 'node-red')
  webview.setAttribute('src', 'http://localhost:8000/red')
  node.appendChild(webview)
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
