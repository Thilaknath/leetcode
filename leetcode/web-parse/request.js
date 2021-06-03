'use strict';

const fs = require('fs');
const https = require('https');

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
async function getStockInformation(date) {

    return new Promise(async (resolve, reject) => {
        const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                resolve(body);
            });
        });
    })
    
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
}async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const date = readLine().trim();

  const result = await getStockInformation(date);
  const isEmpty = !Object.keys(result).length;
  if (isEmpty) {
      ws.write('No Results Found');
  } else {
      ws.write(`Open: ${result.data[0].open}\n`);
      ws.write(`High: ${result.data[0].high}\n`);
      ws.write(`Low: ${result.data[0].low}\n`);
      ws.write(`Close: ${result.data[0].close}\n`);
  }
}