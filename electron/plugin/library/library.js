// id: [ type, innerHTML, (default value) ]
const nodeInputList = {
    "folder-name": [ "text", "Folder Name:" ],
    "node-name": [ "text", "Node Name:" ],
    "node-category": [ "text", "category:", "examples" ],
    "node-color": [ "color", "color:", "#ffffff" ],
    "node-icon": [ "text", "<a href = https://nodered.jp/docs/creating-nodes/appearance>icon:<a>", "file.svg" ],
    "node-input": [ "number", "input:", "1" ],
    "node-output": [ "number", "output:", "1" ],
    "mcu-select": [ "checkbox", "for MCU?" ]
}

// id: [ Element, (Attribute), innerHTML ]
const nodeInputDiv = {
  "node-input-head": [ "h1", "", "Node Creator" ]
}

const nodeInstallDiv = {
  "node-create": [ "button", [ ["onclick", "nodeCreate()"] ], "Create" ],
  "node-ul-text": [ "h3", "", "In user/create/node" ],
  "node-list-button": [ "button", [ ["onclick", "buttonNodeName()"] ], "Node List" ],
  "node-ul": [ "ul", [ ["onload", "buttonNodeName()"] ], "" ],
  "node-install-text": [ "input", [ ["type", "text" ], [ "placeholder", "folder name" ] ], "" ],
  "node-install-button": [ "button", [ ["onclick", "nodeNpmInstall()"] ], "install" ],
  "node-uninstall-text": [ "input", [ ["type", "text" ], [ "placeholder", "node name" ] ], "" ],
  "node-uninstall-button": [ "button", [ ["onclick", "nodeNpmUninstall()"] ], "uninstall" ],
  "node-npm-list": [ "button", [ ["onclick", "npmList()"] ], "npm list" ]
}

const nodeFunctionDiv = {
  "node-label-function": [ "h2", "", "Function"],
  "node-function-text": [ "textarea", [ ["spellcheck", "false"], [ "class", "node-text" ] ], "msg.payload = \'hello\'"],
}

const nodeHelpDiv = {
  "node-label-help": [ "h2", "", "<a href = https://nodered.jp/docs/creating-nodes/help-style-guide>Help Text<a>"],
  "node-help-text": [ "textarea", [ ["spellcheck", "false"], [ "class", "node-text" ] ], ""]
}

const nodeFileJSDiv = {
  "node-label-js": [ "h2", "", "JS file" ],
  "node-save-js": [ "button", [ ["onclick", "buttonSaveFile('node-export-js', '.js')"] ], "Save" ],
  "node-export-js": [ "textarea", [ ["spellcheck", "false"], [ "class", "node-text" ] ], "" ]
}

const nodeFileHTMLDiv = {
  "node-label-html": [ "h2", "", "<a href = https://nodered.jp/docs/creating-nodes/node-html>HTML file<a>" ],
  "node-save-html": [ "button", [ ["onclick", "buttonSaveFile('node-export-html', '.html')"] ], "Save" ],
  "node-export-html": [ "textarea", [ ["spellcheck", "false"], [ "class", "node-text" ] ], "" ]
}

function iconLibrary() {
  const divID = ["node-input", "node-install", "node-function", "node-help", "node-file-js", "node-file-html"]
  window.common.iconInit('library', divID)
  const nodeDiv = [
    nodeInputDiv,
    nodeInstallDiv,
    nodeFunctionDiv, 
    nodeHelpDiv, 
    nodeFileJSDiv, 
    nodeFileHTMLDiv
  ]

  for(let divNumber=0; divNumber<nodeDiv.length; divNumber++) {
    for(let list in nodeDiv[divNumber]) {
      let element = document.createElement(nodeDiv[divNumber][list][0])
      element.setAttribute('id', list)
      for(let i=0; i<nodeDiv[divNumber][list][1].length; i++) {
        element.setAttribute(nodeDiv[divNumber][list][1][i][0], nodeDiv[divNumber][list][1][i][1])
      }
      element.innerHTML = nodeDiv[divNumber][list][2]
      let parent = document.getElementById(divID[divNumber])
      parent.appendChild(element)
    }
  }

  for(let i in nodeInputList) {
    let parent = document.getElementById(divID[0])

    // id: [ type, innerHTML, (default value) ]
    let label = document.createElement('label')
    label.setAttribute('for', i)
    label.innerHTML = nodeInputList[i][1]
    parent.appendChild(label)
    if(i != "mcu-select") {
      parent.appendChild(document.createElement('br'))
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
    parent.appendChild(input)
    parent.appendChild(document.createElement('br'))
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
  const folderName = nodeInput.item(0).value
  const nodeName = nodeInput.item(1).value
  const dir = './user/create/node/'
  const nodeDir = dir + folderName + '/' + nodeName
  const create = async () => {
    window.os.folderMakeArg('./user/create/node/' + folderName)
    window.os.fileSaveArg('node-function-text', './user/create/node/function.tmp')
    window.os.fileSaveArg('node-help-text', './user/create/node/help.tmp')
    window.os.execSync('python ./python/node_creater.py ' + command)
    window.os.fileOpenArg('node-export-js',  nodeDir + '.js')
    window.os.fileOpenArg('node-export-html', nodeDir + '.html')
  }
  create()
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
    for(i in result) {
      let li = document.createElement('li')
      li.innerHTML = result[i]
      ul.appendChild(li)
    }
  })
}

function nodeNpmInstall() {
  const nodeName = document.getElementById('node-install-text').value
  window.os.exec('npm install ./user/create/node/' + nodeName)
}

function nodeNpmUninstall() {
  const nodeName = document.getElementById('node-uninstall-text').value
  window.os.exec('npm uninstall ' + nodeName)
}

function npmList() {
  window.os.exec('start npm list')
}

function buttonSaveFile(id, fileFormat) {
  const nodeInput = document.getElementsByClassName('node-input')
  const folderName = nodeInput.item(0).value
  const nodeName = nodeInput.item(1).value
  const dir = './user/create/node/'
  const nodeDir = dir + folderName + '/' + nodeName
  window.os.fileSaveArg(id, nodeDir + fileFormat)
}
