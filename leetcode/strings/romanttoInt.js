// https://leetcode.com/problems/roman-to-integer/
let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    let val = 0;
    for(let i=0; i<s.length; i++) {
        console.log(`${symbols[s[i]]} and ${symbols[s[i + 1]]}` )
        symbols[s[i]] < symbols[s[i + 1]] ? val -= symbols[s[i]] : val += symbols[s[i]]
        console.log(`value is ${val}`)
    }
    
    return val
};

console.log(romanToInt("IVL"))