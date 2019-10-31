Array.prototype.map2 = function(callback){
    const newArray = []
    for(i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
	'{ "nome": "Borracha", "preco": 3.45 }',
	'{ "nome": "Caderno", "preco": 10.00 }',
	'{ "nome": "Kit de Lápis", "preco": 41.22 }',
	'{ "nome": "Caneta", "preco": 7.50 }'
]

const preco = carrinho.map2(function(e){
	
	console.log(`R$ ${JSON.parse(e).preco}`)
})

