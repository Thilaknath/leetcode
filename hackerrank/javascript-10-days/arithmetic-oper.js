// https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem

function getArea(length, width) {
    let area;
    area = length * width
    
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width)

    return perimeter;
}

console.log(getArea(3, 4.5))
console.log(getPerimeter(3, 4.5))