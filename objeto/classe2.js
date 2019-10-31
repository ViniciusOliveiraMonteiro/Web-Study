class Avo{
	constructor(nome, sobrenome = 'Silva', profissao = 'Fazendeiro'){
		this.nome = nome
		this.sobrenome = sobrenome
		this.profissao = profissao
	}
}

class Pai extends Avo{
	constructor(nome, sobrenome, profissao){
		super(sobrenome, profissao)
		this.nome = nome
		
	}
}

class Filho extends Avo{
	constructor(nome, sobrenome, profissao){
		super(sobrenome, profissao)
		this.nome = nome
		
	}
}



const avo = new Avo('Luiz', 'Silva')

const pai = new Pai('Carlos')

const filho = new Filho('Joaquim')

console.log(avo, pai, filho)


