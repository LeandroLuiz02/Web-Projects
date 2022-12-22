function throwError(err) {
    throw 'error message'
}

function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    
    catch (e) { // roda em caso de erro dentro do try
        throwError(e)
    }

    finally {
        console.log('final')
    }
}

const obj = {nome: 'Leandro'}
printName(obj)