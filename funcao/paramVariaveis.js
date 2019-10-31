function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2, 3))
console.log(soma())
console.log(soma(2))
console.log(soma('a', 'b', 'c'))
console.log(soma(2, 3, 'Teste', false, 3.25))
console.log(soma(4.4, 5.5))