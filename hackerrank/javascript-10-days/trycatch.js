//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem

function reverseString(s) {
    try {
        s = s.split('').reverse().join("")
    } catch (expr) {
        console.log ("error" + expr.message)
    } finally {
        console.log (s)
    }
}

reverseString(1234)