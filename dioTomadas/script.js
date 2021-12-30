var stdin = '../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

var valores = input.split("\n")


let line = valores.shift().split(' ');
let totalDeReguas = 0 

for(let i = 0; i<line.length; i++){
  totalDeReguas = parseInt(line[i]) + totalDeReguas
}

let quantidadeDeAparelhoLigados = totalDeReguas - 3

console.log(`Quantidade de reguas ${line.length}`)
console.log(`Quandida de tomadas nas reguas: ${totalDeReguas}`)
console.log(`Quandida de aparalhos ligados: ${quantidadeDeAparelhoLigados}`)