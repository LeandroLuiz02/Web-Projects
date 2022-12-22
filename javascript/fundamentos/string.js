const escola = 'cod3rx'
let index = 5
console.log(index.toString())

if (escola.charAt(index) == 'a') {
    console.log(escola)
}
else {
    console.log(escola.charAt(index))
}

//template strings
const template = `olá, ${escola}`
console.log(template)

const up = input => input.toUpperCase()
console.log(up(template))