import Chance from 'chance'

it('If else', function () {

    let age = chance.age()
    cy.log(age)

    if (age >= 0 && age < 12) {
        cy.log('child')
    } else if (age >= 12 && age < 18) {
        cy.log('teen')
    } else if (age >= 18 && age < 60) {
        cy.log('adult')
    } else if (age >= 60 && age < 120) {
        cy.log('senior')
    }

})

it('Switch', function () {

    let age = chance.age()
    cy.log(age)
    switch (true) {
        case age >= 0 && age < 12:
            cy.log('child');
            break;
        case age >= 12 && age < 18:
            cy.log('teen');
            break;
        case age >= 18 && age < 60:
            cy.log('adult');
            break;
        case age >= 60 && age < 120:
            cy.log('senior');
            break;
    }
})

it('Ternary operator', function () {

    let age = chance.age()
    cy.log(age)
    let message = (age >= 0 && age < 12) ? 'child' :
        (age >= 12 && age < 18) ? 'teen' :
            (age >= 18 && age < 60) ? 'adult' :
                (age >= 60 && age < 120) ? 'child' :
                    'Not a man';
    cy.log(message)

})