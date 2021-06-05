// https://www.hackerrank.com/challenges/js10-class/problem

class Polygon {
    constructor(val) {
        this.val = val;
    }
    
    perimeter() {
        return this.val.reduce(function(acc, cur){
            return acc + cur
        })
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);

console.log(rectangle.perimeter());