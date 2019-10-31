for(let letra of 'Vinicius'){
    console.log(letra)
}

const assuntosFaculdade = ['Grafos', 'GAAL', 'Compiladores', 'Autômatos']

for(let i in assuntosFaculdade){
    console.log(i)
}

for(let assunto of assuntosFaculdade){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c', 'd'])
for(let letra of s){
    console.log(letra)
}