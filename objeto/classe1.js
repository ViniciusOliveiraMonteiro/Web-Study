class Lancamento{
	constructor(nome, valor){
		this.nome = nome
		this.valor = valor
	}
}

class CicloFinanceiro{
	constructor(mes, ano){
		this.mes = mes
		this.ano = ano
		this.lancamentos = []
	}

	addLancamento(...lancamentos){
		lancamentos.forEach(l => this.lancamentos.push(l))
	}

	sumario(){
		let valorConsolidado = 0
		this.lancamentos.forEach(l => {
			valorConsolidado += l.valor
			
		})
		return valorConsolidado
	}
}

const salario = new Lancamento('Salario', 3000)
const luz = new Lancamento('Conta de luz', -150)
const faculdade = new Lancamento('Faculdade', -1000)

const contas = new CicloFinanceiro(7, 2019)

contas.addLancamento(salario, luz, faculdade)

console.log(contas.sumario())