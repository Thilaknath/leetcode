// https://www.hackerrank.com/challenges/js10-function/problem

function main() {
    // const n = +(readLine());
    
    console.log(factorial(4));
}

function factorial(n) {
    if (n < 0) return;
    if (n === 0) return 1;
    return n * factorial(n - 1)
}

main()