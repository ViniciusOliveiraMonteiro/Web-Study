const usuario = {
	nome: 'Vinicius',
	sobrenome: 'Monteiro',
	login: 'vinimonteiro',
	senha: '123456',
	email: 'vinicius@gmail.com'
}

console.log(usuario.email)

console.log(Math.ceil(6.1))

console.log(`${usuario.nome} ${usuario.sobrenome}`)

function Obj(nome){
	this.nome = nome
	this.exec = function(){
		console.log('Exec...')
	}
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()