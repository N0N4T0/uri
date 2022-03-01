const stdin = '../stdin'

// Leitura
const input = require("fs").readFileSync(stdin, "utf8")

const valores = input.split("\n")

const [codeItem1, quantityItem1, price1] = valores[0].split(" ")
const [codeItem2, quantityItem2, price2] = valores[1].split(" ")

const subTtotal1 = quantityItem1 * price1
const subTtotal2 = quantityItem2 * price2

const total = subTtotal1 + subTtotal2

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)