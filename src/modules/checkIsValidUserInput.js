'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  if (typeof userInput !== 'number') {
    return false;
  }

  const string = userInput.toString();

  if (string[0] === '0' || string.length !== 4) {
    return false;
  }

  for (let i = 0; i < string.length; i++) {
    if (string.slice(i + 1).includes(string[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
