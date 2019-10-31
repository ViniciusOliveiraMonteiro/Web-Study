const produto = [
    {nome: 'NoteBook', preco: 2499, fragil: true},
    {nome: 'iPad', preco: 4399, fragil: true},
    {nome: 'Copo de vidro', preco: 3.99, fragil: true},
    {nome: 'Copo de plástico', preco: 2.99, fragil: false}
]

const produtoCaro = function(p){
    return p.preco >= 500
}

const produtoFragil = function(p){
    return p.fragil
}

console.log(produto.filter(produtoCaro).filter(produtoFragil))