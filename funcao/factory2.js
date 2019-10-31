function criarProduto(nome, valor, desconto){
	return{
		
		nome,
		valor,
		desconto: 0.1
	}
}

console.log(criarProduto('Manga', 4.99))