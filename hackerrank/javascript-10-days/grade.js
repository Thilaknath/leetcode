// https://www.hackerrank.com/challenges/js10-if-else/problem

function getGrade(score) {
    let grade;
    
    if( score > 25){
        grade = "A"
    } else if (score > 20){
        grade = "B"
    } else if (score > 20){
        grade = "B"
    } else if (score > 15){
        grade = "C"
    } else if (score > 10){
        grade = "D"
    } else if (score > 10){
        grade = "E"
    } else {
        grade = "F"
    }
    
    return grade;
}

console.log(getGrade(26))