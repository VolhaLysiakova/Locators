import Chance from "chance";
const chance = new Chance();
class Array {

    printPlanets(array) {
        array.forEach(function (planet) {
            cy.log(`planet: ${planet.planet}, radius: ${planet.radius}, 
            density: ${planet.density}, distance: ${planet.distance}`);
        });
    }

    //filters planets with distance greater then value
    getPlanetsWithDistance (array, value) {
        array = array.filter(function (planet) {
            return planet.distance > value;
        })
        return array;
    }

    //sorts array by particular property
    sortPlanetsByProperty(array, property){
        array.sort((a,b) => {
            return a.property > b.property ? 1 : -1
        })
    }

}
export default new Array();