const a = [10]
console.log(a)

const [n1, , n3, n4, n5, n6 = 0] = [1, 2, 3, 4, 5]
console.log(n1, n3, n4, n5)

const [,[,nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)