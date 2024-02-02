"use strict";
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        return `Attach with ${this.stregth} points`;
    }
}
const p1 = new Character('fabio', 10, 98);
console.log(p1.attack());
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Mago", 9, 30, 100);
