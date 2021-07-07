// A

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const spiderMan = superheroes.find( ({name}) => name === 'Spiderman' );
console.log(spiderMan);

// // B
const arrayValue = [1, 2, 3];
const mapArray  = arrayValue.map(x => x*2);

console.log(mapArray);

// // C
console.log([1, 4, 3, 6, 9, 7, 11].some(x => x > 10));
console.log([1, 2, 1, 2, 1, 2].some(x => x > 10));

// // D
const countries = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
console.log(countries.includes('Italy'));

// // E

const mapArray2 = [1, 4, 3, 6, 9, 7, 11];
const tenfold = () => {
  mapArray2.forEach(x => x*10);
}
console.log(tenfold())
// result should be [10, 40, 30, 60, 90, 70, 110]

// // F

const arrTotal = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrTotal.reduce(reducer));
// result should be: false

