String.prototype.reverse = function() {
	return this.split('').reverse().join('')
}

console.log('Meu nome é Vinicius'.reverse())

Array.prototype.first = function() {
	return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'f'].first())

String.prototype.toString = function() {  // Não faça isso
	return 'Lascou tudo'
}

console.log('Minha casa é top'.reverse())