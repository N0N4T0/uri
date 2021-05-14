var stdin = '../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

var N = parseInt(input)

var horas = parseInt(N / 3600)
N = N % 3600

var minutos = parseInt(N / 60)
N = N % 60

var segundos = parseInt(N)

console.log(`${horas}:${minutos}:${segundos}`)