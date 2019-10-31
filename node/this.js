console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function func(){
    console.log('Dentro da função')
    console.log(this === global)
    console.log(this === module)

    console.log(this === exports)
    console.log(this === module.exports)
    
}

func()