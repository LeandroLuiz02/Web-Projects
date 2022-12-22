/* exemplo simples de funcao
nao e necessario dar o tipo das entradas da func (linguagem fracamente tipada) */

function soma (a, b){ 
    if (!!(a+b)) {
        return (a+b)
    }
    else if (!!a) {
        return (a)
    }
    else {
        return (0)
    }
}

/*
console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())
*/

//INTERESSANTE, MO VEI

// ----------------- FUNCAO 2 ------------------------- //

const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(1, 2)
console.log(typeof imprimirSoma)

//funcao arrow (funciona da mesma maneira, so muda a sintaxe)
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(1, 2))
console.log(typeof soma2)


//return implicito (funciona da mesma maneira, so muda a sintaxe)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 1))
console.log(typeof subtracao)

