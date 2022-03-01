const stdin = '../stdin'

// Leitura
const input = require("fs").readFileSync(stdin, "utf8")

const valores = input.split("\n")

const R = parseInt(valores.shift())

const pi = 3.14159

// const volume = (4/3.0)*pi*R**3 
const volume = (4/3.0)*pi*Math.pow(R, 3)

console.log(`VOLUME = ${volume.toFixed(3)}`)