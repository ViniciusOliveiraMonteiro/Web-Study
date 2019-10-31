let ferrari = {
	modelo: 'F40',
	velMax: 240
}

let volvo = {
	modelo: 'V40',
	velMax: 180
}

console.log(ferrari.__proto__)
console.log(volvo.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}

const obj = new MeuObjeto()
console.log(typeof Object, typeof MeuObjeto)
console.log(typeof Object.prototype, typeof MeuObjeto.prototype)
console.log(obj.__proto__)
console.log(MeuObjeto.prototype)