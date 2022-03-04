const stdin = '../stdin'

// Leitura
const input = require("fs").readFileSync(stdin, "utf8")

const valores = input.split("\n")

// Tres valores 
const [A, B, C] = valores[0].split(" ")

// Área do triângulo retângulo
const areaTriangulo = (parseFloat(A)*parseFloat(C))/2

// A área do círculo
const pi = 3.14159
const areaCirculo = pi*Math.pow(parseFloat(C), 2)

// a área do trapézio
const areaTrapezio = (parseFloat(A)+ parseFloat(B))*parseFloat(C)/2

// a área do quadrado 
const areaQuadrado = Math.pow(parseFloat(B), 2)

// a área do retângulo
const areaRetangulo = parseFloat(A)*parseFloat(B)

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}\n`, `CIRCULO: ${areaCirculo.toFixed(3)}\n`, `TRAPEZIO: ${areaTrapezio.toFixed(3)}\n`, `QUADRADO: ${areaQuadrado.toFixed(3)}\n`, `RETANGULO: ${areaRetangulo.toFixed(3)}`)