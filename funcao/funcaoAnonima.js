const soma = function(a, b){
    return a + b
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2, 3)
imprimirResultado(2, 3, function(a, b){
    return a - b
})
imprimirResultado(2, 3, (a, b) => a * b)

const pessoa = {
    falar: function(){
        console.log('Oi')
    }
}

pessoa.falar()

