require('./global')

console.log(MeuApp.saudacao())
console.log(MeuApp.nome)

MeuApp.nome = 'Eu ainda sou um app global' //É possível alterar o objeto em qualquer arquivo, já que o mesmo é global
console.log(MeuApp.nome) //Posssível evitar isso utilizando Object.freeze na criação do objeto.
