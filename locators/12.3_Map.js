//Exercise 1 - ???

const entries = [
    ["Mercury", {radius: 2440, density: 5.43, distance: 0.395}],
    ["Venus", {radius: 6052, density: 5.24, distance: 0.723}],
    ["Earth", {radius: 6378, density: 5.52, distance: 1}],
    ["Mars", {radius: 3396, density: 3.93, distance: 1.53}],
    ["Jupiter", {radius: 71492, density: 1.33, distance: 5.21}],
    ["Saturn", {radius: 60268, density: 0.69, distance: 9.551}],
    ["Uranus", {radius: 25559, density: 1.27, distance: 19.213}],
    ["Neptune", {radius: 24764, density: 1.64, distance: 30.07}],
]

let newPlanetsMap = new Map(entries)

it('12.3.1 New Map', function (){

    cy.log(newPlanetsMap)

})

it('12.3.2 Print Map', function () {

    //newPlanetsMap.forEach((value, key) => {
    //cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '))
    //})

    for (let [key, value] of newPlanetsMap) {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]));
    }
})

it('12.3.3 Return data about a planet', function () {

    cy.log(newPlanetsMap.get('Saturn'))

})

it('12.3.4 Return size of Map', function () {

    cy.log(newPlanetsMap.size)

})

let newPlanetsSet = new Set(['Mercury', 'Not Mercury']);

it('12.3.5 Check if Map has values from Set', function () {

    newPlanetsSet.forEach(item => {
        cy.log('Such planet is present in map: ' + newPlanetsMap.has(item));
    });

})

it('12.3.6 Delete an object from Map', function () {

    newPlanetsMap.delete('Uranus')
    for (let [key, value] of newPlanetsMap) {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]));
    }

})

let newPlanetsMapForMerge = new Map([
    ["Moon", {radius: 1100, density: 1.04, distance: 0.167}]
])

it('12.3.7 Merge maps', function () {

    newPlanetsMapForMerge.forEach((value, key) => newPlanetsMap.set(key, value))

    for (let [key, value] of newPlanetsMap) {
        cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]));
    }
})

it('12.3.8 Walk over all keys of object', function () {

    let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395}

    for (let key in planet) {
        cy.log(planet[key])
    }
})