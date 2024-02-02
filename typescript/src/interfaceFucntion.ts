//fuções
function addNumber(x: number,y: number):number {
  return x + y
}

let soma:number = addNumber(4,7)
console.log(soma)
function addToHello(name: string) {
  return `Hello ${name}`
}
console.log(addToHello('fabio'))

async function getDatabase(id: number): Promise<string> {
  return "fabio"
}

interface robot2 {
  id: number,
  name:string
  sayHello(): string
}
type robot1 = {
  readonly id: number,
  name: string
}

const bot: robot1 = {
  id: 1,
  name: "megaman"
}
console.log(bot)

class Pessoa implements robot2 {
  id: number
  name: string

  constructor(id: number,name:string) {
    this.id = id
    this.name = name
  }
  sayHello(): string {
    return `retorna string${this.name}`
  }
}

const p = new Pessoa(1,"gutsman")
console.log(p.sayHello())
