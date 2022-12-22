{
    {
        {
            var sera = 'sera??'
            // nao funciona com o let (escopo da variavel declarada com o var é global)
        }
    }
}
//console.log(sera)

{
    let b = 4;
    //console.log(b)
}

{
    let b = 'variavel b';
    //console.log(b)
}

// declaração com var pode ser duplicada (nao gera erro)

/*
let a = 1
{
    let a = 4
    {
        let a = 5
        console.log(a)
    }
    console.log(a)
}
console.log(a) // BRO WTF
*/