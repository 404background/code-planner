const nodeInputList = {
// id: [ type, innerHTML, (default value) ],
  "folder-name": [ "text", "Folder Name:" ],
  "node-name": [ "text", "Node Name:" ],
  "node-category": [ "text", "category:", "examples" ],
  "node-color": [ "color", "color:", "#ffffff" ],
  "node-icon": [ "text", "icon", "file.svg" ],
  "node-input": [ "number", "input", "1" ],
  "node-output": [ "number", "output", "1" ],
  "mcu-select": [ "checkbox", "for MCU?" ]
}

function iconLibrary() {
  let workColumn = document.getElementById('work-column')
  while(workColumn.firstChild) {
    workColumn.removeChild(workColumn.firstChild)
  }

  let library = document.createElement('div')
  library.setAttribute('id', 'library')
  workColumn.appendChild(library)

  const divID = ["node-editor", "node-function", "node-export"]
  for(let i=1; i<4; i++) {
    let div = document.createElement('div')
    div.setAttribute("id", divID[i-1])
    library.appendChild(div)
  }

  nodeEditor = document.getElementById(divID[0])
  nodeFunction = document.getElementById(divID[1])
  nodeExport = document.getElementById(divID[2])

  for(let i in nodeInputList) {
    let label = document.createElement('label')
    label.setAttribute('for', i)
    label.innerHTML = nodeInputList[i][1]
    nodeEditor.appendChild(label)
    if(i != "mcu-select") {
      nodeEditor.appendChild(document.createElement('br'))
    }

    let input = document.createElement('input')
    input.setAttribute('id', i)
    input.setAttribute('type', nodeInputList[i][0])
    input.setAttribute('class', 'node-input')
    if(nodeInputList[i][2] !== undefined){
      input.setAttribute('value', nodeInputList[i][2])
    }
    if(i==="folder-name" || i==="node-name"){
      input.setAttribute('required', 'required')
    }
    nodeEditor.appendChild(input)
    nodeEditor.appendChild(document.createElement('br'))
  }

  let nodeCreate = document.createElement('input')
  nodeCreate.setAttribute('type', 'submit')
  nodeCreate.setAttribute('value', 'Create')
  nodeCreate.setAttribute('onclick', 'nodeCreate()')
  nodeEditor.appendChild(nodeCreate)

  let nodeUlText = document.createElement('p')
  nodeUlText.innerHTML = 'user/create/node'
  nodeEditor.appendChild(nodeUlText)

  let nodeUl = document.createElement('ul')
  nodeUl.setAttribute('id', 'node-list') 
  nodeUl.setAttribute('onload', 'buttonNodeName()')
  nodeEditor.appendChild(nodeUl)

  let nodeName = document.createElement("button")
  nodeName.setAttribute("id", 'buttonNodeName')
  nodeName.setAttribute('onclick', 'buttonNodeName()')
  nodeName.innerHTML = 'Node List'
  nodeEditor.appendChild(nodeName)
  nodeEditor.appendChild(document.createElement('br'))

  let nodeInstallLabel = document.createElement('label')
  nodeInstallLabel.setAttribute('for', 'nodeInstallText')
  nodeInstallLabel.innerHTML = 'npm install '
  nodeEditor.appendChild(nodeInstallLabel)

  let nodeInstallText = document.createElement('input')
  nodeInstallText.setAttribute('type', 'text')
  nodeInstallText.setAttribute('id', 'nodeInstallText')
  nodeEditor.appendChild(nodeInstallText)

  let nodeInstallButton = document.createElement('button')
  nodeInstallButton.setAttribute('onclick', 'nodeInstall()')
  nodeInstallButton.innerHTML = 'Install'
  nodeEditor.appendChild(nodeInstallButton)

  let functionText = document.createElement('textarea')
  functionText.setAttribute('id', 'functionText')
  nodeFunction.appendChild(functionText)

  let exportText = document.createElement('textarea')
  exportText.setAttribute('id', 'exportText')
  nodeExport.appendChild(exportText)

  buttonNodeName()
}

function nodeCreate() {
  let command = ""
  const nodeInput = document.getElementsByClassName('node-input')
  for (let i = 0; i < nodeInput.length; i++) {
    if(i == 7) {
      console.log(nodeInput.item(i).checked)
      command += nodeInput.item(i).checked + " "
    } else {
      console.log(nodeInput.item(i).value)
      command += nodeInput.item(i).value + " "
    }
  }
  console.log(document.getElementById('functionText').value)
  window.os.exec('python ./python/node_creater.py ' + command)
}

function buttonNodeName() {
  async function nodeName() {
    const nodeName = await window.os.folderRead('./user/create/node')
    return nodeName
  }

  const ul = document.getElementById('node-list')
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }

  nodeName().then(result => {
    console.log(result)
    for(i in result) {
      let li = document.createElement('li')
      li.innerHTML = result[i]
      ul.appendChild(li)
    }
  })
}

function nodeInstall() {
  const command = document.getElementById('nodeInstallText').value
  window.os.exec('npm install ./user/create/node/' + command)
}
