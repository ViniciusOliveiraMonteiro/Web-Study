function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Vinicius'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}.`)