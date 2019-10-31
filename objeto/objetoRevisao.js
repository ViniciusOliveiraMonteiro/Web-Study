const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
	modelo: 'Gol',
	valor: 35000,
	proprietario:{
		nome: 'Vinicius',
		idade: 25,
		endereco:{
			rua: '2 travessa manoel drumond',
			numero: 27,
		}
	},
	condutores:[{
		nome: 'Francisco',
		idade: 59
	},{
		nome: 'Ednalva',
		idade: 50
	}],
	calcularSeguro: function(){
		// ...
	}
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Peixe'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
//console.log(carro.condutores.length) tentando acessar um atributo de algo não definido