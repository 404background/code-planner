function iconNode() {
    let workColumn = document.getElementById('work-column')
    while(workColumn.firstChild) {
      workColumn.removeChild(workColumn.firstChild)
    }
    let iframe = document.createElement('iframe')
    iframe.setAttribute('src', './plugin/node/node.html')
    iframe.setAttribute('id', 'work-iframe')
    workColumn.appendChild(iframe)
}
