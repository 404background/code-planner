function iconJupyter() {
  const divID = ["jupyter-input"]
    let workColumn = document.getElementById('work-column')
    window.common.iconInit('library', divID)
  const jupyterDiv = [
    jupyterDiv
  ]
    while(workColumn.firstChild) {
      workColumn.removeChild(workColumn.firstChild)
    }

    for(let divNumber=0; divNumber<jupyterDiv.length; divNumber++) {
      for(let list in jupyterDiv[divNumber]) {
        let element = document.createElement(jupyterDiv[divNumber][list][0])
        element.setAttribute('id', list)
        for(let i=0; i<jupyterDiv[divNumber][list][1].length; i++) {
          element.setAttribute(jupyterDiv[divNumber][list][1][i][0], jupyterDiv[divNumber][list][1][i][1])
        }
        element.innerHTML = jupyterDiv[divNumber][list][2]
        let parent = document.getElementById(divID[divNumber])
        parent.appendChild(element)
      }
    }

    let webview = document.createElement('webview')
    webview.setAttribute('id', 'jupyter-view')
    webview.setAttribute('src', 'http://localhost:8888/lab')
    workColumn.appendChild(webview)
  }
