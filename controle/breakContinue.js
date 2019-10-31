const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for(x in numeros){
    if(x == 6){
        break
    }

    console.log(`${x} = ${numeros[x]}`)
}

console.log('\n')

for(y in numeros){
    if( y == 6){
        continue
    }

    console.log(`${y} = ${numeros[y]}`)
}

console.log('\n')

externo:
for(a in numeros){
    for(b in numeros){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
                
    }
    
}

