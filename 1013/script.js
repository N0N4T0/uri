const stdin = '../stdin'

// Leitura
const input = require("fs").readFileSync(stdin, "utf8")

const valores = input.split(" ")

const x = 3

valores.forEach(element => {
    let newArray = []
    if(element <=x){
        newArray.push(element)
        
        console.log(element)
    }
}); 

// console.log(valores);