'use strict';

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {

  // answer from repo
  // let chars = new Set();

  // for (let i = 0; i < str.length; ++i) {
  //   if (chars.has(str[i])) {
  //     return false;
  //   }
  //   chars.add(str[i]);
  // }
  // return true;


  // my answer
  // using a Set data structure
  // Time complexity: O(n)
  // Space complexity: O(n)
  const charObj = new Set();
  for (let i = 0; i < str.length; i += 1) {
    if (charObj.has(str[i])){
      return false;
    } else if (str[i] !== ' ') {
      charObj.add(str[i]);
    }
  }
  return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSort(str) {
  // answer from repo
  // sort string using quicksort
  // str.sort();

  // for (var i = 1; i < str.length; ++i) {
  //   if (str[i] === str[i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  // my answer w/o using any data structures
  // Time complexity: O(n log n)
  // Space complexity: O(n)
  const newStr = str.sort();
  for (let i = 0; i < newStr.length; i += 1) {
    if (newStr[i].toLowerCase() === ' ') {
      continue;
    } else if (newStr[i] === newStr[i + 1]){
      return false;
    }
  }
  return true;
}
