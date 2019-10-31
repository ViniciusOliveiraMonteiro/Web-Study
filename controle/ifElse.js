const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Sua nota é ' + nota + ', você foi aprovado!!')
    }else{
        console.log('Sua nota foi ' + nota + ', infelizmente você foi reporvado :(')
    }

}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Opa')
