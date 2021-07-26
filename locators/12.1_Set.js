import Chance from 'chance'
import {difference, intersection, isSuperSet, union} from "set-operations"


let currencySet = new Set (["USD", "RUR", "BYN"])

it('12.1.2. Print set - forEach', function (){
    currencySet.forEach(currency =>{
        cy.log(currency)
    })
})

it('12.1.3. Add values to set - ADD', function (){
    currencySet.add("GBP").add("ZAR")
    cy.log(currencySet)
})

it('12.1.4. Check values in set - HAS', function (){
    cy.log("Set has value USD: " + currencySet.has('USD'))
    currencySet.delete('USD');
    cy.log("Set has value USD: " + currencySet.has('USD'))
})

it('12.1.5. Return random value - chance.pickone', function (){
    let currencyArray = Array.from(currencySet)
    cy.log(currencyArray)
    cy.log(chance.pickone(currencyArray))
    cy.log(chance.pickset(currencyArray, chance.integer({ min: 1, max: currencyArray.length })))
})

it('12.1.6. Several Sets ', function () {

    let setA = new Set ([1,2,3,4,5]),
        setB = new Set ([4,5]),
        setC = new Set ([3,4,6,7]);

    cy.log(isSuperSet(setA, setB))
    cy.log(isSuperSet(setA, setC))
    cy.log(union(setB, setC))
    cy.log(intersection(setA, setC))
    cy.log(difference(setA, setC))

})