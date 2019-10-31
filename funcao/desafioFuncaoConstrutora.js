function Pessoa(nome) {

	this.falar = function (){
		console.log(`Meu nome é ${nome}`)
	}
	
}

const pessoa1 = new Pessoa('Carlos')

pessoa1.falar()