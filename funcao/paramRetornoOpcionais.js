function area(largura, altura){
    const area = altura * largura
    if(area > 20){
        console.log(`Área com tamanho inválido: área informada de ${area}`)
    }else{
        return area
    }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 6, 7, 8))
console.log(area(5, 5))