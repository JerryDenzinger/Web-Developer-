const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName =  superheroes.random();
var mySupervilliannName = supervillains.random();

console.log(mySuperHeroName + " VS " + mySupervilliannName);