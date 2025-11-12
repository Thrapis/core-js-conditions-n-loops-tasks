/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    return a > c ? a : c;
  }
  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x - king.x === queen.y - king.y ||
    queen.x - king.x === -(queen.y - king.y) ||
    queen.x === king.x ||
    queen.y === king.y
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    (a === b && a + b > c && c !== 0) ||
    (b === c && b + c > a && a !== 0) ||
    (c === a && c + a > b && b !== 0)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romano = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let result = '';
  let rest = num;
  while (rest > 0) {
    for (let i = 0; i < romano.length; i += 1) {
      const keyValue = romano[i];

      if (rest - keyValue[0] >= 0) {
        result += keyValue[1];
        rest -= keyValue[0];
        break;
      }
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const getWord = (sign) => {
    switch (sign) {
      case '-':
        return 'minus';
      case '.':
        return 'point';
      case ',':
        return 'point';
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  };

  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) result += ' ';
    result += getWord(numberStr[i]);
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let is = true;
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      is = false;
      break;
    }
  }
  return is;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const letter = `${digit}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balance = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let leftBalance = 0;
    let rightBalance = 0;

    for (let j = 0; j < i; j += 1) {
      leftBalance += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      rightBalance += arr[j];
    }

    if (leftBalance === rightBalance) {
      balance = i;
      break;
    }
  }
  return balance;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }

  let i = 0;
  let j = -1;
  let value = 1;
  let direction = 'right';
  while (value !== size * size + 1) {
    switch (direction) {
      case 'right':
        if (j + 1 === size || arr[i][j + 1] !== 0) {
          direction = 'bottom';
        }
        break;
      case 'bottom':
        if (i + 1 === size || arr[i + 1][j] !== 0) {
          direction = 'left';
        }
        break;
      case 'left':
        if (j - 1 === -1 || arr[i][j - 1] !== 0) {
          direction = 'top';
        }
        break;
      case 'top':
        if (i - 1 === -1 || arr[i - 1][j] !== 0) {
          direction = 'right';
        }
        break;
      default:
        break;
    }

    switch (direction) {
      case 'right':
        j += 1;
        break;
      case 'bottom':
        i += 1;
        break;
      case 'left':
        j -= 1;
        break;
      case 'top':
        i -= 1;
        break;
      default:
        break;
    }

    if (arr[i][j] === 0) {
      arr[i][j] = value;
      value += 1;
    }
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const size = matrix.length;
  const centerPoint = Math.ceil((size - 1) / 2);

  for (let deep = 0; deep < centerPoint; deep += 1) {
    for (let s = deep; s < size - deep - 1; s += 1) {
      const sStart = s;
      const sEnd = size - 1 - s;
      const deepStart = deep;
      const deepEnd = size - 1 - deep;

      [
        newMatrix[sEnd][deepStart],
        newMatrix[deepEnd][sEnd],
        newMatrix[sStart][deepEnd],
        newMatrix[deepStart][sStart],
      ] = [
        newMatrix[deepEnd][sEnd],
        newMatrix[sStart][deepEnd],
        newMatrix[deepStart][sStart],
        newMatrix[sEnd][deepStart],
      ];
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  const size = newArr.length;

  for (let step = Math.floor(size / 2); step > 0; step = Math.floor(step / 2)) {
    for (let i = step; i < size; i += 1) {
      for (
        let j = i - step;
        j >= 0 && newArr[j] > newArr[j + step];
        j -= step
      ) {
        [newArr[j], newArr[j + step]] = [newArr[j + step], newArr[j]];
      }
    }
  }

  return newArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let current = str;

  for (let j = 1; j <= iterations; j += 1) {
    let evens = '';
    let odds = '';
    for (let i = 0; i < current.length; i += 1) {
      if (i % 2 === 1) odds += current[i];
      else evens += current[i];
    }
    current = evens + odds;

    if (current === str) {
      j = iterations - (iterations % j);
    }
  }

  return current;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const strNumber = `${number}`;
  let focusIndex = -1;

  for (let i = strNumber.length - 2; i > 0; i -= 1) {
    if (strNumber[i] < strNumber[i + 1]) {
      focusIndex = i;
      break;
    }
  }
  if (focusIndex === -1) return number;

  let swapIndex = focusIndex + 1;
  for (let i = focusIndex + 2; i < strNumber.length; i += 1) {
    if (
      strNumber[i] < strNumber[swapIndex] &&
      strNumber[i] > strNumber[focusIndex]
    ) {
      swapIndex = i;
    }
  }

  const getDigitByIndex = (num, i) => {
    const numLength = `${num}`.length;
    return (
      ((num % 10 ** (numLength - i)) - (num % 10 ** (numLength - 1 - i))) /
      10 ** (numLength - 1 - i)
    );
  };

  const swapByIndex = (num, i1, i2) => {
    const strNum = `${num}`;
    const num1 = getDigitByIndex(num, i1);
    const num2 = getDigitByIndex(num, i2);
    return (
      num -
      num1 * 10 ** (strNum.length - 1 - i1) +
      num2 * 10 ** (strNum.length - 1 - i1) -
      num2 * 10 ** (strNum.length - 1 - i2) +
      num1 * 10 ** (strNum.length - 1 - i2)
    );
  };

  const swapNumber = swapByIndex(number, focusIndex, swapIndex);

  let resultNumber = swapNumber;
  let changes = true;
  while (changes) {
    changes = false;
    for (let i = focusIndex + 1; i < strNumber.length - 1; i += 1) {
      const iDigit = getDigitByIndex(resultNumber, i);
      const iplus1Digit = getDigitByIndex(resultNumber, i + 1);
      if (iDigit > iplus1Digit) {
        changes = true;
        resultNumber = swapByIndex(resultNumber, i, i + 1);
      }
    }
  }

  return resultNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
