const contadorA = require('./instanciaUnica')//sempre que for incrementado é alterada nas instâncias gerais
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//cada vez que for incrementado, só altera sua própria instância
const contadorD = require('./instanciaNova')()//cada vez que for incrementado, só altera sua própria instância

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)