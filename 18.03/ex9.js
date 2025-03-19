// Leia um valor em R$ (considere que é um valor inteiro). Escreva a quantidade mínima
// de notas ($1, $2, $5, $10, $20, $50 e $100) para representar este valor

let valor = 156
let quantidadeMinimaDeNotas = 0

if (valor > 100) {
    quantidadeMinimaDeNotas += 1
    valor -= 100
}

if (valor > 50) {
    quantidadeMinimaDeNotas += 1
    valor -= 50
}

if (valor > 10) {
    quantidadeMinimaDeNotas += 1
    valor -= 10
}

if (valor > 5) {
    quantidadeMinimaDeNotas += 1
    valor -= 5
}

if (valor > 2) {
    quantidadeMinimaDeNotas += 1
    valor -= 2
}

if (valor > 1) {
    quantidadeMinimaDeNotas += 1
    valor -= 1
}

console.log(quantidadeMinimaDeNotas, valor)