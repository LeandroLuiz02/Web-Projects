const objeto = {
    nome: "Ana",
    idade: 19,
    cidade: "Recife"
}

const {nome = "nao identificado", estado = "PE"} = objeto
objeto.nome = "leandro"
console.log(nome, estado)
console.log(objeto.nome)