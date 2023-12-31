function iconHome() {
    let workColumn = document.getElementById('work-column')
    if(workColumn.hasChildNodes())
    while(workColumn.firstChild) {
        workColumn.removeChild(workColumn.firstChild)
    }
    let homeContainer = document.createElement('div')

    let h1 = document.createElement('h1')
    h1.innerHTML = 'Welcome'
    homeContainer.appendChild(h1)

    let button = document.createElement('button')
    button.setAttribute('onclick', 'buttonDarkMode()')
    button.innerHTML = 'Display Mode'
    homeContainer.appendChild(button)

    let webview = document.createElement('webview')
    webview.setAttribute('class', 'web-view')
    webview.setAttribute('src', 'https://github.com/404background/code-planner')
    homeContainer.appendChild(webview)
    homeContainer.appendChild(webview)

    workColumn.appendChild(homeContainer)
}
