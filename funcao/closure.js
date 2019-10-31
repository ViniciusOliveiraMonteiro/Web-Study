const x = 'Global'

function fora() {
	const x = 'Local'

	function dentro() {
		//const x = 'Global'
		return x
	}
	return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())