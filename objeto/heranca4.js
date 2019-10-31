function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'R2D2'
MeuObjeto.prototype.falar = function(){
	return `Meu nome é ${this.nome}`
}
console.log(obj1.nome)
console.log(obj1.falar())

obj2.nome = 'C3PO'
console.log(obj2.falar())

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype

obj3.nome = 'Darth Vader'
obj3.falar = function(){
	return `${this.nome}: Luke, eu sou o seu pai!`
}

console.log(obj3.nome)
console.log(obj3.falar())

//Resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)