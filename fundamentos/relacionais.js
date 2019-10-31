console.log('01)', '1' == 1)
console.log('02)', '2' === 2)
console.log('03)', '3' != 3)
console.log('04)', '4' !== 4)

console.log('05)', 5 > 6)
console.log('06)', 6 < 5)
console.log('07)', 7 <= 5)
console.log('08)', 8 >= 5)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime())
console.log('12)', d1.getTime() === d2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)