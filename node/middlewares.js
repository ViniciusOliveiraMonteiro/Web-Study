//middleware pattern(chain of responsability)

const passo1 = (ctx, next) => { //O next() sempre chamara a próxima função da cadeia
    ctx.valor1 = 'mid1'
    next()    
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()    
}

const passo3 = ctx => ctx.valor3 = 'mid3' // não chamará uma próxima função, pois não possui o netx()

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        if(middlewares && indice < middlewares.length ){
          middlewares[indice](ctx, () => execPasso(indice + 1))
        }
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx)
