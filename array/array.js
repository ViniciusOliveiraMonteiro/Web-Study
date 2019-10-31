console.log(typeof Array, typeof new Array, typeof [])

let nomes = new Array('Vinicius, Minie')

console.log(nomes)

nomes = ['Ednalva', 'Francisco', 'Minie']

console.log(nomes)

console.log(nomes[0])
console.log(nomes[1], nomes[2], nomes[3])

nomes[2] = 'Vinicius'
nomes.push('Michele')

console.log(nomes.length)
console.log(nomes)

nomes[6] = 'Minie'

console.log(nomes.length)
console.log(nomes[4] === undefined)
nomes[5] = null
console.log(nomes[5] === null)

nomes.sort()
console.log(nomes)

delete nomes[1]
console.log(nomes[1])

nomes = ['Vinicius', 'Ednalva', 'Francisco',]
nomes.splice(1, 2)
console.log(nomes)

nomes.splice(1, 2, 'Ednalva', 'Francisco')
console.log(nomes)
