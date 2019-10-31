const alunos = [
    {nome: 'Vinicius', nota: 8.5},
    {nome: 'Minie', nota: 5.2}
]

//Imperativo
let count = 0
for(let i = 0; i < alunos.length; i++){
    count += alunos[i].nota
}

console.log(count / alunos.length)

//Declarativo

const pegarNota = aluno => aluno.nota
const somaNota = (acumulador, nota) => acumulador + nota

const count2 = alunos.map(pegarNota).reduce(somaNota)
console.log(count2 / alunos.length)

