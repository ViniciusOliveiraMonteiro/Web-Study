Number.prototype.entre = function(inico, fim){
    return this >= inico && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log("Aprovado com honra!")
    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    }else if(nota.entre(4, 6.99)){
        console.log("Recuperação")
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovado")
    }else{
        console.log("Nota inválida foi inserida")
    }

    console.log("Fim.")
}

imprimirResultado(0)
imprimirResultado(6.99)
imprimirResultado(9)