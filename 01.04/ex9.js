// Faça um algoritmo que leia o salário do usuário (tipo real) e o valor da prestação de um
// empréstimo. Se o valor da prestação for superior a 25% do salário, escreva que o
// Empréstimo não pode ser realizado. Caso contrário, escreva que o Empréstimo pode ser
// realizado

const salario = 200000.4;
const prestacaoDoEmprestimo = 50000.89;

const verificarPossibilidadeDeEmprestimo =
  prestacaoDoEmprestimo >= salario * 0.25;

if (verificarPossibilidadeDeEmprestimo) {
  console.log("Empréstimo não pode ser realizado. =(");
} else {
  console.log("O empréstimo pode ser realizado =D");
}
