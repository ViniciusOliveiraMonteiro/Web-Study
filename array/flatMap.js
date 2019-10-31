const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Vinicius',
        notas: 7.3
    },{
        nome: 'Minie',
        notas: 7.4
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Francisco',
        notas: 7.8
    },{
        nome: 'Ednalva',
        notas: 8.7
    }]
}]

const getNotaDoAluno = aluno => aluno.notas
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)