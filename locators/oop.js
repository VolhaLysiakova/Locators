function Man(firstName, lastName) {
    return {
        firstName,
        lastName,
        sayHello() {
            console.log(`Hello! I'm ${firstName}`)
        }
    }
}

const vasya = new Man('Vasya', 'Pupkin')

console.log(vasya)
console.log(vasya.firstName)
console.log(vasya.lastName)

vasya.sayHello()

function DeveloperMan (firstName, lastName) {
    const man = Man(firstName, lastName)
    return Object.assign({}, man, {
        code (smth) {
            console.log(`${this.firstName} coded ${smth}`)
        },
        sayHello() {
            man.sayHello()
            console.log('I am QA')
        }
    })
}

const fedya = DeveloperMan('Fedya', 'Petrov')
fedya.code('Java')
fedya.sayHello()





class Woman {
    constructor(firstWomanName, lastWomanName) {
        this.firstWomanName = firstWomanName
        this.lastWomanName = lastWomanName
    }
    sayWomanHello () {
        console.log(`Hello! I'm ${this.firstWomanName} ${this.lastWomanName}`)
    }
}

const zina = new Woman('Zina', 'Ivanova')
console.log(zina)
console.log(zina.firstWomanName)
zina.sayWomanHello()

class DeveloperWoman extends Woman {
    code (thing) {
        console.log(`${this.firstWomanName} coded ${thing}`)
    }
    sayWomanHello() {
        super.sayWomanHello();
        console.log('I am not a developer')
    }
}

const inga = new DeveloperWoman('Inga', 'Petrova')
inga.code('JS')

inga.sayWomanHello()

const skills = {
    code (thing) {},
    design (thing) {},
    sayWomanHello (){}
}

class DesignerDeveloperWoman {
    constructor(firstNameDesDev, lastNameDesDev) {
        this.firstNameDesDev = firstNameDesDev
        this.lastNameDesDev = lastNameDesDev

        Object.assign(this, {
            code: skills.code,
            design: skills.design,
            sayHello: skills.sayWomanHello
        })
    }
}
const tanyaDesDev = new DesignerDeveloperWoman('Tanya', 'Familiya')
console.log(tanyaDesDev)






