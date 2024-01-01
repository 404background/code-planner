function iconNode() {
    let workColumn = document.getElementById('work-column')
    while(workColumn.firstChild) {
      workColumn.removeChild(workColumn.firstChild)
    }

    let webview = document.createElement('webview')
    webview.setAttribute('id', 'node-red')
    webview.setAttribute('src', 'http://localhost:8000/red')
    workColumn.appendChild(webview)
  }
