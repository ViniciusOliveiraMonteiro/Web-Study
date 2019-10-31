const times = new Set()
times.add('Bahia')
times.add('Vitória')
times.add('Bahia de Feira').add('Vitória da Conquista').add('Bahia')

console.log(times)

console.log(times.size)
console.log(times.has('Bahia'))
times.delete('Vitória da Conquista')
console.log(times.has('Vitória da Conquista'))

const nomes = ['Vinicius', 'Ednalva', 'Francisco', 'Vinicius']
const nomeSet = new Set(nomes)

console.log(nomeSet)