//classe
class Character {
  private name?: string
  stregth: number
  skill: number
  constructor(name:string, stregth: number, skill: number) {
    this.name = name
    this.stregth = stregth
    this.skill = skill
  }
  attack():void | string {
    return `Attach with ${this.stregth} points`
  }
}
const p1 = new Character('fabio',10,98)
console.log(p1.attack())

class Magician extends Character {
  magicPoints: number
  constructor(name:string, stregth: number, skill: number,magicPoints: number) {
    super(name, stregth, skill)
    this.magicPoints = magicPoints
  }
}
const p2 = new Magician("Mago", 9, 30,100)

