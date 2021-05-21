/* 
Uma equipe da Fórmula 1 deseja calcular o número mínimo de litros 
que deverá colocar no tanque de um de seus carros para que ele 
possa percorrer um determinado número de voltas até o primeiro reabastecimento. 

Escreva um programa (EM QUALQUER LINGUAGEM) que 
leia o comprimento da pista (em metros), 
o número total de voltas a serem percorridas no grande prêmio,
o número de reabastecimentos desejados e
o consumo de combustível do carro (em Km/L).

Calcular e escrever o número mínimo de litros necessários 
para percorrer até o primeiro reabastecimento. 
Considere que o número de voltas entre os reabastecimentos é o mesmo.

*/ 

var stdin = '../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

var valores = input.split("\n")

var compPista = parseInt(valores.shift())/1000
console.log(`Comprimiento de pista = ${compPista} em km`)

var totalVoltas = parseInt(valores.shift())
console.log(`Total de voltas = ${totalVoltas}`)

var reabast = parseInt(valores.shift())
console.log(`Reabastecimento = ${reabast}`)

var consumo = parseInt(valores.shift())
console.log(`COnsumo = ${consumo} km/L`)

var tanqueCarro = parseInt(valores.shift())
console.log(`Tanque do carro = ${tanqueCarro} L`)


var comprTotal = compPista*totalVoltas
console.log(`Total de voltas * comprimento  = ${comprTotal} Km`)

var litros = (comprTotal / consumo)/25
console.log(`Litros de gasolina por pit stop = ${litros} L`)



var minimoLitro = litros / tanqueCarro
console.log(`Mínimo de litros até 1 pit stop = ${minimoLitro} L`)
