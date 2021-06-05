// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    let arr =  strs.sort()
    let neA = []
    console.log(arr)
    console.log(arr[arr.length - 1])

    for (let i = 0; i < arr[0].length; i++){
        if (arr[0].charAt(i) === arr[arr.length - 1].charAt(i)){
            neA.push(arr[0].charAt(i))
        } else {
            return ""
        }
    }

    return neA.join("").toString()
};



console.log(longestCommonPrefix(["dog","racecar","car"]))