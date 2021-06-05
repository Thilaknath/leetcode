var fs = require('fs')

function parse() {
fs.readFile('podStatus.txt', 'utf8', function(err, data) {
  console.log(data)
})
}

parse()