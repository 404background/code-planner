function iconLibrary() {
    let workColumn = document.getElementById('work-column')
    while(workColumn.firstChild) {
      workColumn.removeChild(workColumn.firstChild)
    }
    let iframe = document.createElement('iframe')
    iframe.setAttribute('src', './plugin/library/library.html')
    iframe.setAttribute('id', 'work-iframe')
    workColumn.appendChild(iframe)
}

const inputList = {
  "folder-name": "text",
  "node-name": "text",
  "node-category": "text",
  "node-color": "color",
  "node-icon": "text",
  "node-input": "number",
  "node-output": "number",
  "mcu-select": "checkbox"
}

function editorInput() {
  let editor = document.getElementById("node-editor")
  for(let i in inputList) {

      let label = document.createElement("label")
      label.setAttribute("for", i)
      editor.appendChild(label)

      let input = document.createElement("input")
      input.setAttribute("id", i)
      input.setAttribute("type", inputList[i])
      editor.appendChild(input)
  }   
}
