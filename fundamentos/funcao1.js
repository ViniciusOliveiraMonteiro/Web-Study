//Função sem retorno
function imprimirSoma(a, b){
	console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 4, 6, 8, 10)
imprimirSoma()

//Funão com retorno
function soma(a, b = 5){
	return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
