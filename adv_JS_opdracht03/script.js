const testData = ['Beer', 'Wine', 'Whisky', 'Gin', 'IPA'];
const secondData = ['Wodka', 'Baileys', 'Cognac'];

// const addCool = () => {
//   testData.push('cool');
// }

// const testDataAmount = () => {
//   console.log(testData.length);
// }

// const testDataFirst = item => {
//   console.log(testData[item])
// }

// let item = testData.length;

// addCool();
// testDataFirst(item);
// testDataAmount();
// console.log(testData);

// array.push = add a new item to the end
// array.pop = remove item from the end
// array.shift = remove item from the beginning
// array.unshift = add item to the beginning

// array.slice = grabs the items you tell it to grab
// array.splice = removes/replaces the items you tell it to 

const mergeData = () => {
  console.log("van", testData, "word je heel zat.")
  console.log("Een cocktail van", testData.join(" "), "maakt je kapot.")
}


mergeData()