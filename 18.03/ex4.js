//Faça um algoritmo que leia as duas primeiras notas de um aluno e calcule qual o
//valor mínimo da terceira nota para que este aluno seja aprovado considerando média 7.
let nota1 = 6
let nota2 = 6
let nota3 = 0
let faltaParaAprovacao = 7 - ((nota1 + nota2 + nota3) / 3)

console.log(`É necessário para ser aprovado: ${faltaParaAprovacao}`)