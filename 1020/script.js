var stdin = '../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

var total = parseInt(input)

var ano = parseInt(total/365)
console.log(`${ano} ano(s)`)
var total = total % 365

var mes = parseInt(total/30)
console.log(`${mes} mes(es)`)
var total = total % 30

var dia = total
console.log(`${dia} dia(s)`)