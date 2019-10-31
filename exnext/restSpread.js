// operador ... rest = juntar spread = espalhar

//spread com obj
const estudantes = {nome: 'Vinicius', idade: 25}
const clone = {estuda: true, ...estudantes}
console.log(estudantes)

//spread com array
const grupoA = ['Ednalva', 'Francisco', 'Minie']
const grupoFinal = ['Wilson', ...grupoA, 'Zuleide']

console.log(grupoFinal)
