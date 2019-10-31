const notas = [9.8, 7.5, 6.4, 10, 4.7]

for(let i in notas){
    console.log(`A sua nota ${i} é ${notas[i]}`)
}

const pessoa = {
    nome: 'Maria',
    sobrenome: 'Souza',
    idade: 20,
}

for(let dados in pessoa){
    console.log(`${dados} é ${pessoa[dados]}`)
}

