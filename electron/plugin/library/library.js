const nodeInputList = {
// id: [ type, innerHTML, (default value) ]
  "folder-name": [ "text", "Folder Name:" ],
  "node-name": [ "text", "Node Name:" ],
  "node-category": [ "text", "category:", "examples" ],
  "node-color": [ "color", "color:", "#ffffff" ],
  "node-icon": [ "text", "icon", "file.svg" ],
  "node-input": [ "number", "input", "1" ],
  "node-output": [ "number", "output", "1" ],
  "mcu-select": [ "checkbox", "for MCU?" ]
}

const nodeInstallList = {
// id: [ Element, (Attribute), innerHTML ]
  "node-create": [ "input", [ ["type", "submit"], ["value", "Create"], ["onclick", "nodeCreate()"] ], "" ],
  "node-ul-text": [ "p", "", "In user/create/node" ],
  "node-list-button": [ "button", [ ["onclick", "buttonNodeName()"] ], "Node List" ],
  "node-ul": [ "ul", [ ["onload", "buttonNodeName()"] ], "" ],
  "node-install-label": [ "label", [ ["for", "nodeInstallText" ]], "Folder Name: " ],
  "node-install-text": [ "input", [ ["type", "text" ]], "" ],
  "node-install-button": [ "button", [ ["onclick", "nodeInstall()"] ], "Install" ]
}

const nodeFuntionList = {
// id: [ Element, innerHTML ]
  "node-label-function": [ "h2", "Paste here your function node program."],
  "node-function-text": [ "textarea", "msg.payload = \'hello\'"]
}

const nodeExportList = {
// id: [ Element, innerHTML ]
  "node-label-js": [ "h2", "JS file" ],
  "node-export-js": [ "textarea", "" ],
  "node-label-html": [ "h2", "HTML file" ],
  "node-export-html": [ "textarea", "" ]
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
    // id: [ type, innerHTML, (default value) ]
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

  for(let i in nodeInstallList) {
    // id: [ Element, (Attribute), innerHTML ]
    let element = document.createElement(nodeInstallList[i][0])
    element.setAttribute('id', i)
    for(let j=0; j<nodeInstallList[i][1].length; j++) {
      element.setAttribute(nodeInstallList[i][1][j][0], nodeInstallList[i][1][j][1])
    }
    element.innerHTML = nodeInstallList[i][2]
    nodeEditor.appendChild(element)
  }

  for(let i in nodeFuntionList) {
    // id: [ Element, innerHTML ]
    let element = document.createElement(nodeFuntionList[i][0])
    element.setAttribute('id', i)
    element.innerHTML = nodeFuntionList[i][1]
    nodeFunction.appendChild(element)
  }

  for(let i in nodeExportList) {
    // id: [ Element, innerHTML ]
    let element = document.createElement(nodeExportList[i][0])
    element.setAttribute('id', i)
    element.innerHTML = nodeExportList[i][1]
    nodeExport.appendChild(element)
  }

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
  // let functionTemp = document.getElementById('node-function-text').value
  window.os.fileSaveArg('node-function-text', './user/create/node/function.tmp')
  window.os.exec('python ./python/node_creater.py ' + command)
}

function buttonNodeName() {
  async function nodeName() {
    const nodeName = await window.os.folderRead('./user/create/node')
    return nodeName
  }

  const ul = document.getElementById('node-ul')
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
  const nodeName = document.getElementById('node-install-text').value
  window.os.exec('npm install ./user/create/node/' + nodeName)
}
