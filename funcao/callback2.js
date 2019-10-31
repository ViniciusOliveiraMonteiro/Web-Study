const notas = [7.1, 5.4, 6.3, 9.8, 8.3, 3.2, 4.8]

const notasBaixas1 = []
for(i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2)

const notaMenorQue7 = (notas) => notas < 7
const notasBaixas3 = notas.filter(notaMenorQue7)

console.log(notasBaixas3)
