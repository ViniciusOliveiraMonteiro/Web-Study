const sequencia = {
	_valor: 1,
	get valor(){return this._valor++},
	set valor(valor){
		if(valor > this._valor){
			this._valor = valor
		}
	}
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor, sequencia.valor)

sequencia.valor = 800

console.log(sequencia.valor, sequencia.valor, sequencia.valor)


//Simulando um get e set dentro de uma função, já que as funções get e set são exclusivas de objetos
function Sequencia(){
	_valor = 1
	this.getValor = () => _valor++

	this.setValor = (valor) => {
		if(valor > _valor){
			_valor = valor
		}
	}
}

const seq = new Sequencia()

console.log(seq.getValor())

seq.setValor(1000)

console.log(seq.getValor(), seq.getValor(), seq.getValor())