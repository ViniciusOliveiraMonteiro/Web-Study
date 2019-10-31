const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45 }',
	'{ "nome": "Caderno", "preco": 10.00 }',
	'{ "nome": "Kit de Lápis", "preco": 41.22 }',
	'{ "nome": "Caneta", "preco": 7.50 }'
]

const preco = carrinho.map(function(e){
	
	console.log(`R$ ${JSON.parse(e).preco}`)
})

