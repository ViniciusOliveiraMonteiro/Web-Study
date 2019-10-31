let a = 3

global.b = 123

this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// sem var ou let
abc = 3 // var global no node

console.log(global.abc)
