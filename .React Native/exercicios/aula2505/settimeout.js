function ola() {
    console.log('ola')
}

function tchau() {
    console.log('tchau')
}

function conversa() {
    setTimeout(
        function () {
            console.log('como vai?')
        }, 3000
    )
}

//invocar a função
ola()
conversa()
tchau()