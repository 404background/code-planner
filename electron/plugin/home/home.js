function iconHome() {
    const divID = []
    for(let i=1; i<5; i++) {
        divID.push(`div${i}`)
    }
    window.common.iconInit('home', divID)

    let h1 = document.createElement('h1')
    h1.innerHTML = 'Welcome'
    div1.appendChild(h1)

    let button = document.createElement('button')
    button.setAttribute('onclick', 'buttonDarkMode()')
    button.innerHTML = 'Display Mode'
    div1.appendChild(button)
    div1.appendChild(document.createElement('br'))

    let commandLabel = document.createElement("label")
    commandLabel.setAttribute("for", 'inputCommand')
    commandLabel.innerHTML = 'Command:'
    div2.appendChild(commandLabel)

    let execInput = document.createElement("input")
    execInput.setAttribute("type", 'text')
    execInput.setAttribute("id", 'inputCommand')
    div2.appendChild(execInput)

    let execButton = document.createElement("button")
    execButton.setAttribute("class", 'exec-handle')
    execButton.setAttribute('onclick', 'buttonExec()')
    execButton.innerHTML = 'Execute'
    div2.appendChild(execButton)

    const commandResister = {
        "Node-RED": "npm run node-red",
        "Jupyter Lab": "npm run win-jupyter",
    }

    let commandList = document.createElement('ul')
    for(let i in commandResister) {
        let command = document.createElement('li')
        command.setAttribute('onclick', 'commandListClick(this)')
        command.setAttribute('class', 'open-external')
        command.innerHTML = commandResister[i]
        commandList.appendChild(command)
    }
    div2.appendChild(commandList)

    let audio = document.createElement("button")
    audio.setAttribute('onclick', 'audio()')
    audio.innerHTML = 'Audio'
    div2.appendChild(audio)

    let urlLabel = document.createElement("label")
    urlLabel.setAttribute("for", 'inputURL')
    urlLabel.innerHTML = 'URL:'
    div3.appendChild(urlLabel)

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
        "Node-RED UI": "http://localhost:8000/api/ui"
    }

    let urlList = document.createElement('ul')
    for(let i in urlResister) {
        let url = document.createElement('li')
        url.setAttribute('onclick', 'urlListClick(this)')
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
    const homeURL = document.getElementById('inputURL')
    const webview = document.getElementById('main-view')
    webview.setAttribute('src', homeURL.value)
}

function urlListClick(element) {
    const webview = document.getElementById('main-view')
    webview.setAttribute('src', element.innerHTML)
}

function openExternal() {
    const url = document.getElementById('open-external').innerHTML
    window.os.openExternal()
}

function buttonExec() {
    const command = document.getElementById('inputCommand').value
    window.os.exec(command)
}

function commandListClick(element) {
    window.os.exec(element.innerHTML)
}

function audio() {
    audio = new Audio()
    audio.src = "../user/create/voicevox/こんにちは.wav"
    audio.play()
}
