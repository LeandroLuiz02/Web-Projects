/*
 conjunto de pares {chave : valor}
 js permite a manipulação dinamica de objetos (linguagem fracamente tipada)
*/
const ob1 = {}
ob1.name = "motorola"
ob1.price = 1600
console.log(ob1)

const ob2 = {name : 'samsung', price : 1700}
console.log(ob2)

//------------------------------------------------------------------------//
//ob1 recebe o endereco armazenado por ob2 (atribuicao por referencia)
ob1 = ob2

// ja quando estamos lidando com tipos primitivos e nao com objetos, ocorre uma atribuicao por valor
let a, b = 2
a = b
