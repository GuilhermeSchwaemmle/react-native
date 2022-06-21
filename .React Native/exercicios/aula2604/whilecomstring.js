var continuar = true
var opcao ="S"
/*
while(continuar){
  console.log('ola')
  continuar = (opcao.toLowerCase() == "s")
}
*/
var contador = 5
while(opcao.toLowerCase() == 's'){
    if(contador > 0){
      console.log(`ola ${contador}`)
    }
    else{
        opcao = "n"
    }
    contador--
}
console.log("continua execução")