// const addOne = require('./functions.js');
// const getWordLengths = require('./functions.js');
const findNeedle = require('./functions.js');
// 1

// test("Add 1 to each item in myArray", function() {
//   const myArray = [31, 57, 12, 5];

//   const unchanged = [31, 57, 12, 5];
//   const expected = [32, 58, 13, 6];
//   const output = addOne(myArray);

//   expect(output).toEqual(expected);
//   expect(myArray).toEqual(unchanged);
// });

// 2

// test("Get word lengths", function() {
//   const words = ["sun", "potato", "roundabout", "pizza"];
//   const expected = [3, 6, 10, 5];

//   const output = getWordLengths(words);
//   expect(output).toEqual(expected);
// });

// 3

test("Find the needle", function() {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});