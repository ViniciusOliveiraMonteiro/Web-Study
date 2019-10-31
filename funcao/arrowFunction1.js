let dobro = function (a){
    return 2 * a
}

dobroArrow = (a) => {
    return 2 * a
}

dobrado = a => 2 * a
console.log(dobrado(Math.PI))
console.log(dobroArrow(9))

let ola = function(){
    return 'Olá'
}

console.log(ola())

ola = () => console.log('Olá')
ola()

ola = _ => 'Olá'
console.log(ola())

