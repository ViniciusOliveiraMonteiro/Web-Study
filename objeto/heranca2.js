Object.prototype.atributo0 = '0'
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B', atributo3: '3'}
const filho = {__proto__: pai, atributo3: 'C'}

console.log(filho.atributo3, filho.atributo1, filho.atributo2, filho.atributo0)

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(aceleracao){
		if(this.velAtual + aceleracao <= this.velMax){
			this.velAtual += aceleracao
		}else{
			this.velAtual = this.velMax
		}
	},
	status(){
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`
	}
}

const ferrari = {
	modelo: 'F40',
	velMax: 280
}

const volvo = {
	modelo: 'V40',
	status(){
		return `${this.modelo}: ${super.status()}`
	}
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(190)
console.log(volvo.status())

ferrari.acelerarMais(250)
console.log(ferrari.status())