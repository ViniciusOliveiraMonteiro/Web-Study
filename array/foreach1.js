const aprovados = [ 'Vinicius', 'Ednalva', 'Francisco', 'Minie' ]

aprovados.forEach(function(nome, indice){
	console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(`${nome}`))

const quemFoiAprovado = aprovado => console.log('->', aprovado)
aprovados.forEach(quemFoiAprovado)