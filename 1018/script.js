var stdin = '../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

var N = parseInt(input)
console.log(N)

var cem = parseInt(N/100)
console.log(`${cem} nota(s) de R$ 100,00`)
var N = N % 100

var cinq = parseInt(N/50)
console.log(`${cinq} nota(s) de R$ 50,00`)
var N = N % 50

var vinte = parseInt(N/20)
console.log(`${vinte} nota(s) de R$ 20,00`)    
var N = N % 20

var dez = parseInt(N/10)
console.log(`${dez} nota(s) de R$ 10,00`)    
var N = N % 10

var cinco = parseInt(N/5)
console.log(`${cinco} nota(s) de R$ 5,00`)    
var N = N % 5

var dois = parseInt(N/2)
console.log(`${dois} nota(s) de R$ 2,00`)    
var N = N % 2

var um = parseInt(N/1)
console.log(`${um} nota(s) de R$ 1,00`)    
