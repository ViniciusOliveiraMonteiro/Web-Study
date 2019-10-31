const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const dobj2 = {a, b, c}

console.log(obj1, dobj2)

const nomeAtri = 'nota'
const valor = 10

const obj3 = {}
obj3[nomeAtri] = valor
console.log(obj3)

const dobj4 = {[nomeAtri]: valor}
console.log(dobj4)

const obj5 = {
	funcao1: function(){

	},
	funcao2(){

	}
}

console.log(obj5)