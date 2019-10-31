function falarDepoisDe(segundos, frase, e){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000),
        setTimeout(() => {
            reject(e)
        }, 2 * segundos * 1000)
    })
}

falarDepoisDe(3, 'Olá')
    .then(frase => frase.concat(' <3 !!'))
    .then(segundaFrase => console.log(segundaFrase))
    .catch(e => console.log(e))