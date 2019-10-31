const pessoa = {
	nome: 'Francisco',
	idade: 59,
	peso: 75,
	
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor} `)
})

Object.entries(pessoa).forEach(a => {
	console.log(`${a[0]}: ${a[1]} `)
})

Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true,
	writable: false,
	value: '29/01/1960'
})

pessoa.dataNascimento = '11/03/1994'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign

const obj1 = {a: 1}
const obj2 = {b: 2, c:3}
const obj3 = {a: 4}
const objF = Object.assign(obj1, obj2, obj3)
console.log(objF)

Object.freeze(objF)

objF.a = 100
console.log(objF)

