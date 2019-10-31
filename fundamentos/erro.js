function tratarErroELancar(erro){
    //throw new Error('...')
    // throw 10
    // throw true
     throw 'Ocorreu um erro inesperado'
    // throw{
    //     nome: erro.name,
    //     msg: erro.message,
    //     date: new Date
    // }
}

function imprimirNomeGritado(){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(a){
        tratarErroELancar(a)
    } finally{
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)