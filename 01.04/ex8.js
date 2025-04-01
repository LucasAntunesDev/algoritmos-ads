// Faça um algoritmo que leia um número inteiro e escreva-o se ele for divisível por 3 e 5 e
// não for divisível por 7.
const numero = 15;

const verificarDivisibilidade = (numero, divisor) => {
  return numero % divisor === 0;
};

if (
  verificarDivisibilidade(numero, 3) &&
  verificarDivisibilidade(numero, 5) &&
  verificarDivisibilidade(numero, 7) === false
) {
  console.log(`O número ${numero} é divisível por 3 e 5, mas não 7`);
}
