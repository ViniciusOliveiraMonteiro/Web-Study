function getPreco(imposto = 0, moeda = 'R$'){
	return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
	nome: 'Notebook',
	preco: 3200,
	desconto: 0.10,
	getPreco
}

console.log(produto.getPreco())

const carro = {	preco: 50000, desconto: 0.15 }

console.log(getPreco.apply(carro, [0.20, 'U$']))

console.log(getPreco.call(carro, 0.58, 'R$'))