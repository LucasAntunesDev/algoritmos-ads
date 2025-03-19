// Escrever um algoritmo que lê a1, an e r, respectivamente o primeiro termo de uma
// progressão aritmética, o último termo da progressão e a razão desta progressão.
// Calcular e escrever a soma dos termos desta progressão

let a1 = 1
let an = 10
let r = 2

let termos = [a1]
let n = a1

for (let i = 0; i <= 8; i++) {
    termos.push(n += 2)
}

console.log(termos)