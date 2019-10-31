const anonimo = process.argv.indexOf('-a') != -1

if(anonimo){
    process.stdout.write('E ai anônimo!\n')
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ae, ${nome}!!\n`)
        process.exit()
    })
}
