const verifyPassword = require('./functions.js');

// conditions:
// Password < 9 characters
// Password can't be null
// Password has 1 or more uppercase char
// Password has 1 or more lowercase char
// Password has 1 or more numbers

// if password >= 3 conditions = its true
// condition 4 must always be true

test("password is not null", function() {
  expect(verifyPassword.isNotNull()).not.toBeNull();
});

test("password has right length", function() {
  expect(verifyPassword.hasRightLength('123kas')).toBe(true);
  expect(verifyPassword.hasRightLength('123456789')).toBe(false);
});

test("password has at least 1 lowercase char", function() {
  expect(verifyPassword.hasUpperCaseCharacter('Kasper')).toBe(true);
});

test("password has at least 1 uppercase char", function() {

  expect(verifyPassword.hasLowerCaseCharacter('Kasper')).toBe(true);
});

test("password has at least 1 number", function() {

  expect(verifyPassword.hasDigit('Kasper1')).toBe(true);
});

test("password has >= 4 conditions true, 4th has to be true", function() {
  const conditions = [true, true, true, true, true]
  expect(verifyPassword.minimumConditionsReached(conditions)).toBe(true);
});

test("password is verified", function() {
  expect(verifyPassword.verifyPassword('Kasper')).toBe(true);
  expect(verifyPassword.verifyPassword('123456789')).toBe(false);
  expect(verifyPassword.verifyPassword('123kS')).toBe(true);
})