// Faça um algoritmo que leia 3 números inteiros e escreva-os em ordem descrescente
const numero1 = 13
const numero2 = 50
const numero3 = 2000000000

const numeros = [numero1, numero2, numero3]

console.log(
  numeros.sort(function (a, b) {
    return b - a
  })
)
