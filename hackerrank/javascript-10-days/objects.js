// https://www.hackerrank.com/challenges/js10-count-objects/problem

function getCount(objects) {
   return objects.filter(o => o.x === o.y).length
}

console.log(getCount([{x:1, y:2}, {x:2, y:2}, {x:2, y:2}, {x:2, y:2}]))