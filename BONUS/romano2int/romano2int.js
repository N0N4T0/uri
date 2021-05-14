var stdin = '../../stdin'

// Leitura
var input = require("fs").readFileSync(stdin, "utf8")

romano2int(input)
console.log(`Número romano: ${input}`)


// FUNÇÃO
function romano2int(romano){
    romano = romano.toUpperCase()

    let n = 0
    const numeros = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i=0; i<romano.length; i++){
        let atual = romano[i]
        let prox = romano[i+1]

        if(prox && numeros[prox] > numeros[atual]){
            n -= numeros[atual]
        } else {
            n += numeros[atual]
        }
    }
    console.log(`Numero decimal: ${n}`)
    return n
}