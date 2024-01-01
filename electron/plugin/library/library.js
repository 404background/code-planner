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
