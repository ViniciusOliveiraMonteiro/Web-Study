const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object()
console.log(obj2)


function Produto(nome, preco, desconto){
	this.nome = nome
	this.getPrecoComDesconto = function(){
		return `${this.nome} custa ${preco * (1 - desconto)}`
	}
}

const produto1 = new Produto('Biscoito', 2.50, 0.10)
const produto2 = new Produto('Suco', 1, 0.15)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())


function criarFuncionario(nome, salarioBase, faltas){
	return{
		nome,
		salarioBase,
		faltas,
		calcularSalario(){
			return (salarioBase / 30) * (30 - faltas)
		}
	}
}

const funcionario1 = criarFuncionario('Vinicius', 2500, 5)
console.log(funcionario1.calcularSalario())


const filha = Object.create(null)

filha.nome = 'Ana'
console.log(filha)

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)