const nums = [1, 2, 3, 4, 5, 6]

let resultado = nums.map(function(e){
	return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplica = e => e * 3
const toMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 

resultado = nums.map(soma10).map(triplica).map(toMoney)
console.log(resultado)
