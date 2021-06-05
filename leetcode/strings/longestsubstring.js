// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 * 
 * Using Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * Values should occcur only once.
 */
 var lengthOfLongestSubstring = function(s) {
    return ([...new Set(s)]).length
};

console.log(lengthOfLongestSubstring("pwwkew"))

const lengthOfLongestSubstring1 = function(s) {
    let longestStr = '';
    let currentStr = '';
  
    for(let i = 0; i < s.length; i++) {
      let letter = s[i];
      let index = currentStr.indexOf(letter);
  
      if(index > -1) {
        if(currentStr.length > longestStr.length) longestStr = currentStr;
        currentStr = currentStr.slice(index + 1) + letter;
      }
      else {
        currentStr += letter;
      }
    }
    if(currentStr.length > longestStr.length) longestStr = currentStr;
    return longestStr.length;
  }

  console.log(lengthOfLongestSubstring1("pwwkew"))