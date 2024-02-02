// tipos primitivos booleans e false
let ligado: boolean | number= 1
let nome: string = "fabio"
let idade: number = 30
let alutra: number = 1.9

//null ou undefined
let nulo: null = null
let indefindo: undefined = undefined

// any: qualquer coisa 
let retorno: void
let retornoView: any = false //usando quando


let produto: object = {
  name: "fabio"
}

type ProdutoLoja = {
  name: string,
  preco: number,
  unidade: number
}
interface ProdutoLojaInterface {
  name: string,
  preco: number,
  unidade: number
}

let produtos: ProdutoLojaInterface = {
  name: 'bola',
  preco: 23,
  unidade: 1000
}
console.log(produtos)

// array

let dados: (string | number)[] = ["felipe","ana",'fabio',123]
let dados2: Array<string | number> = ["felipe","ana","adriana"]
console.log(dados2)

let infos: (string | number)[] = ['felipe',30]

//tuplas segue a exata orden

let boleto:[string,number,number] = ["agua conta",1,123]

//data
let aniversario: Date = new Date("2023-12-01 05:00")
console.log(aniversario.toString())