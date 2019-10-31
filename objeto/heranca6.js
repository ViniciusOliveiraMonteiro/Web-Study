function Aula(nome, videoID){
	this.nome = nome
	this.videoID = videoID
}

const aula1 = new Aula('Início', '001')
const aula2 = new Aula('Meio', '002')
console.log(aula1, aula2)

function novo(f, ...params){
	const obj = {}
	obj.__proto__ = f.prototype
	f.apply(obj, params)
	return obj
}

const aula3 = novo('Meio-Fim', '003')
const aula4 = novo('Fim', '004')

console.log(aula3, aula4)
