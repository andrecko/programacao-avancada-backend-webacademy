// console.log('Hello, world, Javascript!')

// //variáveis

// var x = 10 //number
// //formas mais convenientes de declarar variáveis
// let y = 50
// const z = "''"

// y = 20
// console.log(y)

// if(true){
//     let y = 15
//     console.log(y)
// }

// console.log(y)

// //tipos

// const nome = "André"
// console.log(nome)
// console.log(typeof nome)

// const idade = 25
// console.log(idade)
// console.log(typeof idade)

// const peso = 76.5
// console.log(peso)
// console.log(typeof peso)

// //null
// const nada = null
// console.log(nada)
// console.log(typeof nada)

// //undefined
// let indefinido
// console.log(indefinido)
// console.log(typeof indefinido)

// //bool
// const vouf = true
// console.log(vouf)
// console.log(typeof vouf)

// //array
// const vetor = ['Java', 10, false]
// console.log(vetor[1])
// console.log(typeof vetor)
// console.log(vetor.length)

//object literals - estruturas que descrema entidade
// const usuario = {
//     email: 'andre@gmail.com',
//     senha: 'senha',
//     nome: 'André',
//     idade: 25
// }

// console.log(typeof usuario)

// const nome = 'André Luiz'
// console.log(nome.length)
// // const stringParaVetor = nome.split('')
// // console.log(stringParaVetor)
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())
// const nomeMaiusculo = nome.toUpperCase()
// console.log(nomeMaiusculo)

// console.log(nomeMaiusculo[0])
// console.log(nomeMaiusculo[nomeMaiusculo.length-1])
// console.log(nomeMaiusculo.slice(0,5))

// //arrays, vetores, listas
const lista = ['a','b','c','d','e',]
// console.log(lista.length)
// console.log(lista[2])
// console.log(typeof lista)
// lista[5] = 'f'
// console.log(lista[5])
// lista[0] = 'x'
// console.log(lista)
// //lista = 'Testando atribuição de texto para lista'
// lista.push('g')
// console.log(lista)
// lista.pop()
// console.log(lista)
// lista.shift()
// lista.shift()
// lista.shift()
// console.log(lista)
// lista.unshift('h')
//console.log(lista)

//object literals - estruturas que descrema entidade
// const produto = {
//     nome: 'Camisa',
//     preco: 9.99,
//     emEstoque: true,
//     size: ['P','M','G'],
//     'Cor': 'azul'
// }

// console.log(produto['Cor'])

// //destructuring - recurso para objetos para extrair conteúdo de dentro deles
// const { preco, emEstoque } = produto
// console.log(preco)
// console.log(emEstoque)

// const [char1, char2] = lista
// console.log(char1)
// console.log(char2)

// //JSON - JavaScript Object Notation
// const doguinho = {
//     nome: 'Scooby',
//     idade: 10
// }

// const json = JSON.stringify(doguinho)
// console.log(json)
// console.log(typeof json)
// const json2 = JSON.parse(json)
// console.log(json2)
// console.log(typeof json2)

// const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10},')
// console.log(jsonErrado)

vetor = [1,2,3,4,5]

notas = {
    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4]
}

const { n1, n2, n3, n4, n5 } = notas

const jsonNotas = {
    n1: n1,
    n2: n2,
    n3: n3,
    n4: n4,
    n5: n5
}

json1 = JSON.stringify(jsonNotas)
console.log(json1)

const x = 5
const y = 5

calculadora = {
    soma: x+y,
    subtracao: x-y,
    multiplicacao: x*y,
    divisao: x/y
}

const jsonCalculadora = {
    calculadora
}

console.log(calculadora)