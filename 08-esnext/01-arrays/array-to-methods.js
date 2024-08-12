const heroes = ["Superman", "Batman", "Wonder Woman", "Green Lantern", "Flash"];

// * const sortedHeroes = heroes.toSorted();
// * const reversedHeroes = heroes.toReversed()
const deletedHeroes = heroes.toSpliced(0, 2, "Green Arrow");

console.table(heroes);
// * console.table(sortedHeroes);
// * console.table(reversedHeroes);
console.table(deletedHeroes);
