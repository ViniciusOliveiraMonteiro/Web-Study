const obj = { a: 1, b: 2, c: 3, soma(){	return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3, "texto": "texto qualquer"}'))
console.log(JSON.parse('{ "nome": "Vinicius", "idade": 25,  "pais": [{ "nome": "Ednalva", "grau": "mãe" }, {"nome": "Francisco", "grau": "pai"}] }'))