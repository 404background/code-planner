const nodeRedButton = {
//id: [ function, innderHTML ]
  'start-node-red': [ 'StartNodeRED()', 'Start' ],
  'display-reload-node': [ 'DisplayNodeRED()', 'Editor' ],
  'display-node-ui': [ 'DisplayNodeUi()', 'UI Dashboard' ],
  'display-node-split': [ 'DisplaySplit()', 'Split' ],
  'node-red-list': [ 'NodeRedList()', 'list']
}

function iconNode() {
  const divID = ['node']
  window.common.iconInit('node', divID)
  node = document.getElementById(divID[0])

  for(i in nodeRedButton) {
    let element = document.createElement('button')
    element.setAttribute('id', i)
    element.setAttribute('onclick', nodeRedButton[i][0])
    element.innerHTML = nodeRedButton[i][1]
    node.appendChild(element)
  }
  let nodeView = document.createElement('div')
  nodeView.setAttribute('id', 'node-view')
  node.appendChild(nodeView)

  DisplayNodeRED()
}

function StartNodeRED() {
  window.os.exec('npm run node-red')
}

function DisplayNodeRED() {
  let nodeView = document.getElementById('node-view')
  if(nodeView.hasChildNodes()) {
    nodeView.removeChild(nodeView.firstChild)
  }
  let webview = document.createElement('webview')
  webview.setAttribute('id', 'node-red')
  webview.setAttribute('src', 'http://localhost:8000/red')
  nodeView.appendChild(webview)
}

function DisplayNodeUi() {
  let nodeView = document.getElementById('node-view')
  nodeView.removeChild(nodeView.firstChild)
  let webview = document.createElement('webview')
  webview.setAttribute('id', 'node-red')
  webview.setAttribute('src', 'http://localhost:8000/api/ui')
  nodeView.appendChild(webview)
}

function DisplaySplit() {
  let splitView = document.createElement('div')
  splitView.setAttribute('id', 'node-split')
  let leftView = document.createElement('webview')
  leftView.setAttribute('id', 'node-left-view')
  leftView.setAttribute('src', 'http://localhost:8000/red')
  let rightView = document.createElement('webview')
  rightView.setAttribute('id', 'node-right-view')
  rightView.setAttribute('src', 'http://localhost:8000/api/ui')
  let splitter = document.createElement('div')
  splitter.setAttribute('id', 'node-splitter')

  let nodeView = document.getElementById('node-view')
  nodeView.removeChild(nodeView.firstChild)
  nodeView.appendChild(splitView)

  splitView.appendChild(leftView)
  splitView.appendChild(splitter)
  splitView.appendChild(rightView)
}

function NodeRedList() {
  window.os.exec('start npm list')
}
