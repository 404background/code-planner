function iconHome() {
    let workColumn = document.getElementById('work-column')
    if(workColumn.hasChildNodes())
    while(workColumn.firstChild) {
        workColumn.removeChild(workColumn.firstChild)
    }

    for(let i=1; i<5; i++) {
        let div = document.createElement(`div${i}`)
        div.setAttribute("id", `div${i}`)
        workColumn.appendChild(div)
    }

    let h1 = document.createElement('h1')
    h1.innerHTML = 'Welcome'
    div1.appendChild(h1)

    let button = document.createElement('button')
    button.setAttribute('onclick', 'buttonDarkMode()')
    button.innerHTML = 'Display Mode'
    div1.appendChild(button)
    div1.appendChild(document.createElement('br'))

    let label = document.createElement("label")
    label.setAttribute("for", 'inputURL')
    label.innerHTML = 'URL:'
    div3.appendChild(label)

    let input = document.createElement("input")
    input.setAttribute("id", 'inputURL')
    input.setAttribute("type", 'url')
    div3.appendChild(input)

    let buttonWebView = document.createElement('button')
    buttonWebView.setAttribute('onclick', 'buttonWebView()')
    buttonWebView.innerHTML = 'Reload'
    div3.appendChild(buttonWebView)

    const urlResister = {
        "Repository": "https://github.com/404background/code-planner",
        "blog": "https://404background.com/",
        "Google": "https://google.com",
        "ChatGPT": "https://chat.openai.com",
        "Node-RED": "http://localhost:8000/red",
    }

    let urlList = document.createElement('ul')
    for(let i in urlResister) {
        let url = document.createElement('li')
        url.setAttribute('onclick', 'listClick(this)')
        url.innerHTML = urlResister[i]
        urlList.appendChild(url)
    }
    div3.appendChild(urlList)

    let webview = document.createElement('webview')
    webview.setAttribute('class', 'web-view')
    webview.setAttribute('id', 'main-view')
    webview.setAttribute('src', 'https://github.com/404background/code-planner')
    div4.appendChild(webview)
}

function buttonDarkMode() {
    window.darkMode.toggle()
}

function buttonWebView() {
    let homeURL = document.getElementById('inputURL')
    let webview = document.getElementById('main-view')
    webview.setAttribute('src', homeURL.value)
}

function listClick(element) {
    let list = document.getElementById(element.id)
    let webview = document.getElementById('main-view')
    webview.setAttribute('src', element.innerHTML)
}
