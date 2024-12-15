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
  const notNumber = isNaN(+userInput);

  if (notNumber) {
    return false;
  }

  if (userInput[0] === '0' || userInput.length !== 4) {
    return false;
  }

  for (let i = 0; i < userInput.length; i++) {
    if (userInput.slice(0, i).includes(userInput[i])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  checkIsValidUserInput,
};
