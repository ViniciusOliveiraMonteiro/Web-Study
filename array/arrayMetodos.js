const jogadores = ['Messi', 'Cristiano', 'Rolnaldinho', 'Ronaldo']

jogadores.pop()
console.log(jogadores)

jogadores.push('Ronaldo')
console.log(jogadores)

jogadores.shift()
console.log(jogadores)

jogadores.unshift('Messi')
console.log(jogadores)

jogadores.splice(2, 0, 'Dybala', 'Neymar Jr', 'Roberto Carlos')
console.log(jogadores)

jogadores.splice(2, 1)
console.log(jogadores)

const jogadoresAposentados1 = jogadores.slice(4)
console.log(jogadoresAposentados1)

const jogadoresAposentados2 = jogadores.slice(3, 6)
console.log(jogadoresAposentados2)

