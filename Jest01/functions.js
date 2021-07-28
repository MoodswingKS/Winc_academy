// const addOne = function(numbers) {
//   return numbers.map(number => number+1 )
// }


// const getWordLengths = function(someWords) {
//   return someWords.map(word => word.length)
// };

const findNeedle = function(words) {
  const needle = 'needle';
  return words.indexOf(needle);

};

module.exports = findNeedle;