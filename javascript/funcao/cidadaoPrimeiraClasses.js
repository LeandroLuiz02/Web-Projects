// AULA 1 - FUNÇÕES - DESENVOLVIMENTO MODERNO WEB COM JS - Udemy
// 06-02-2023
// é possível tratar uma função como sendo um dado

// criar de forma literal
function fun1() {}

// armazenar em variável
const fun2 = function() {}

// armazenar em array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

const obj = []
console.log(typeof(obj))
obj.falar = function () {return 'opa! dale, meu nobre!'}
console.log(obj.falar())

//passar função como parâmetro de outra função (fodase)
function fun3(fun) {
    console.log(fun(2, 5))
}
fun3(array[0])

function soma() {
    var soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log("resultado: " + soma(1.1, 2.2))