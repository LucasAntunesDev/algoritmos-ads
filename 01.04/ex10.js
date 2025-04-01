// Faça um algoritmo que leia 3 números inteiros. Escreva qual é o maior número
const numero1 = 13
const numero2 = 14
const numero3 = 15

if (numero1 > numero2 && numero1 > numero3) {
  console.log(`${numero1} (1º numero) é o maior número`)
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(`${numero2} (2º numero) é o maior número`)
} else {
  console.log(`${numero3} (3º numero) é o maior número`)
}
