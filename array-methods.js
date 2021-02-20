const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the FOR EACH METHOD to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const printPlanets = document.getElementById("planets")
printPlanets.innerHTML = "<h2>Zombie Planets (ForEach) Of Us</h2>"

planets.forEach(planet => {
  printPlanets.innerHTML += `
  <section>${planet}</section>`;
});


/*
    Use the MAP METHOD to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.
*/ 

const printPlanetsToUpper = document.getElementById("planetsToUpper")
printPlanetsToUpper.innerHTML = "<h2>Zombie Planets Escape MAP </h2>"

const planetsToUpper = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1));
printPlanetsToUpper.innerHTML += `
  <section>${planetsToUpper}</section>`;

  

/*
    Use the FILTER METHOD to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.
*/

const printFilteredPlanets = document.getElementById("filteredPlanets")
printFilteredPlanets.innerHTML = "<h2>Zombie Planets That Contain EEEEEEEEK! </h2>"

let filteredPlanets = planets.filter(planet => planet.includes('e'));
printFilteredPlanets.innerHTML += `
  <section>${filteredPlanets}</section>`;
