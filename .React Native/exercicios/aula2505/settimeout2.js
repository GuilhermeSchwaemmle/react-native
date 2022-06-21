function ola(){
    console.log('ola')
}

function tchau(){
    console.log('tchau')
}

function conversa(){
    console.log('tudo bem?')
}

function discussao(){
    console.log('cala boca')
}

function conversao(){
    console.log('conversa longa')
}

function testeSetTimeOut(callback, time){
    setTimeout(callback,time)
}

//invocar a função
ola()
testeSetTimeOut(conversa, 10000)
testeSetTimeOut(discussao, 7000)
testeSetTimeOut(conversao, 3000)
tchau()