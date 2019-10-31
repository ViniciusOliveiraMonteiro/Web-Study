const pessoa = {
	nome: 'Vinicius',
	idade: 25,
	endereco: {
		rua: '2ª Travessa Manoel Drumond',
		bairro: "Caixa d'água",
		numero: 27

	} 
}

const {nome, idade} = pessoa
console.log(`${nome} tem ${idade} anos`)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco:{ rua, numero}} = pessoa
console.log(`${nome} mora na rua ${rua}, na casa ${numero}.`)
