String.prototype.fruta = function(fruta){
    return this
}

const imprimirValor = function(fruta){
    switch(fruta){
        case 'Morango':
            console.log("O Preço do morango é R$ 10,00")
            break
        case 'Uva':
            console.log("Opreço da uva é R$ 3,00")
            break
        case 'Manga':
            console.log("O preço da manga é R$ 8,00")
            break
        default:
            console.log("Não temos essa fruta em estoque")
    }
}

imprimirValor('Abacaxi')
imprimirValor('Manga')
imprimirValor('Morango')