const quaseArray = { 0: 'Ana', 1: 'Bia', 2: 'Carla' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString',{
	value: function(){ return Object.values(this)},
	enumerable: false
})

console.log(quaseArray[0])
console.log(quaseArray.toString())

const arrayVerdadeiro = ['Ana', 'Bia', 'Carla']
console.log(quaseArray.toString(), arrayVerdadeiro)