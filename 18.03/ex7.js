// Faça um algoritmo que leia dois horários (hora, minuto, segundo) e calcule quantos
// segundos transcorreram entre estes dois horários
let horario1 = { hora: 20, minutos: 52, segundos: 02 }
let horario2 = { hora: 19, minutos: 56, segundos: 09 }

console.log((horario1.segundos - horario2.segundos) + ((horario1.minutos - horario2.minutos) * 60) + ((horario1.hora - horario2.hora) * 3600))
