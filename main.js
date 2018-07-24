const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")
const fragment = document.createDocumentFragment();

planets.forEach(function (planet) {
    let createPara = document.createElement("div");
    createPara.textContent = planet;
    fragment.appendChild(createPara);

})

planetEl.appendChild(fragment);

///////Part 2


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


const upperCasePlanets = planets.map(function (planet) {
    let upperCaseLetter = planet.charAt(0).toUpperCase();
    let restOfWord = planet.slice(1);
    return upperCaseLetter + restOfWord;
});

console.log(upperCasePlanets);




/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


const specificPlanets = planets.filter(function (planet){
    return planet.includes('e');
})

console.log(specificPlanets);


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese."]

const sentenceFromArray = words.reduce(function (currentTotal, next) {
    return `${currentTotal} ${next}`;
})
console.log(sentenceFromArray);