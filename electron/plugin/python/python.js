function iconPython() {
    let workColumn = document.getElementById('work-column')
    while(workColumn.firstChild) {
      workColumn.removeChild(workColumn.firstChild)
    }

    let webview = document.createElement('webview')
    webview.setAttribute('id', 'node-red')
    webview.setAttribute('src', 'http://localhost:8888/lab')
    workColumn.appendChild(webview)
  }
