import Chance from 'chance'
import {difference, intersection, isSuperSet, union} from "set-operations"
import {pickAll} from "ramda";
import Array from "../cypress/page-objects/arrayClass";
import arrayClass from "../cypress/page-objects/arrayClass";

let planets = [
        {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
        {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
        {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
        {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
        {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
        {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
        {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
        {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
    ]

// 1. Print data from array - printArray

it('12.2.1. Print data from array - printArray', function () {

    Array.printPlanets(planets)

})

it('12.2.2. Add new property to the objects in array', function () {

    planets = planets.map(planet => {
        return {
            ...planet,
            solarSystem: true
        }
    });

    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })

    planets.forEach(planet => {
        cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(', '));
    })

})

it('12.2.3. Add new object to array', function () {

    planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})

    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })

    Array.printPlanets(planets)

})

it('12.2.4. Sum radius - REDUCE', function () {

    const summRadius = planets.reduce((acc, planet) =>{
        acc += planet.radius
        return acc
    }, 0)
    cy.log(summRadius)

})


it('12.2.5. Choose planets with distance > 5 - FILTER', function () {

    const getPlanetsWithDistance = planets.filter(planet => planet.distance > 5)
    cy.log(getPlanetsWithDistance)

    cy.log(Array.getPlanetsWithDistance(planets,5))

})

it('12.2.6. Delete object from array', function () {

    const findPlanet = planets.findIndex(planet => planet.planet === 'SomeNewPlanet')
    planets.splice(findPlanet,1)

    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })

})

it('12.2.7. Sort by radius - SORT', function () {

    planets.sort((a,b) => {
        return a.radius > b.radius ? 1 : -1
    })

    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })
})

it('12.2.8. Sort planets by name', function () {

    planets.sort((a,b) => {
        return a.planet > b.planet  ? 1 : -1
    })

    planets.forEach(planet => {
        cy.log(JSON.stringify(planet));
    })
})

it('12.2.9. Array length', function () {

    cy.log(planets.length)

})

