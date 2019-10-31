//par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
	const saudacao = 'Colé'
	return saudacao
}

// Objeto são grupos aninhados de pares nome/valor
const cliente = {
	nome: 'Pero',
	idade: 20,
	ocupacao: 'Arquiteto',
	endereco:{
		rua: 'Rua tal',
		cidade: 'Cidade qualquer'
	}
}

console.log(saudacao)
console.log(exec())
console.log(cliente)