'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getProductDetails' function below.
 *
 * The function accepts STRING restEndpoint as parameter.
 */

function getProductDetails(restEndpoint) {
    // Write your code here

}

function main() {
    const restEndpoint = readLine();

    getProductDetails(restEndpoint);
}
