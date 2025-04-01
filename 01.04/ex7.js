// Faça um algoritmo que leia dois números inteiros e escreva se o primeiro é divisível pelo
// segundo.
const numero1 = 15;
const numero2 = 50;

const ehDivisivel = numero1 % numero2 === 0;

if (ehDivisivel && numero1 > numero2) {
  console.log(`${numero1} é divisível por ${numero2}`);
} else {
  console.log(`${numero1} NÃO é divisível por ${numero2}`);
}
