// Faça um algoritmo que a partir de um horário (hora, minuto, segundo) e uma
// quantidade de segundos transcorridos, calcule o segundo horário.

let horario1 = { hora: 20, minutos: 52, segundos: 02 }
let segundosTranscorridos = 3353

const h2 = Math.ceil((horario1.hora - (segundosTranscorridos / 3600)))
const m2 = Math.ceil(horario1.minutos - (h2 / 60))
const s2 = Math.ceil(horario1.segundos - (m2 / 60))
const horario2 = { hora: h2, minutos: m2, segundos: s2 }

console.log(horario2)