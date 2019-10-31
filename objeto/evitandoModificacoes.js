const pessoa = Object.preventExtensions({
	nome: 'Vinicius',
	idade: 25
})

console.log('É extensível:', Object.isExtensible(pessoa))

delete pessoa.idade
pessoa.peso = 65
pessoa.nome = 'Michele'

console.log(pessoa)

const animal = Object.seal({
	nome: 'Minie',
	especie: 'Cão',
	gênero: 'Fêmea',
	idade: 7
})

console.log('Está selado:', Object.isSealed(animal))
delete animal.especie
animal.nome = 'Marley'
animal.cidade = 'Salvador'
console.log(animal)

const casa = Object.freeze({
	rua: 'Rua tal',
	bairro: 'Bairro tal',
	numero: 123
})

console.log('Congelado:', Object.isFrozen(casa))

delete casa.rua
casa.numero = 999
casa.proprietario = 'Ednalva'

console.log(casa)