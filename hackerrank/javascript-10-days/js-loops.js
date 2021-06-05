//https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
    for (let c of s){
        let vowels = ["a", "e", "i", "o", "u"]
        if (vowels.includes(c)){
            console.log(c)
        }
    }

    for (let c of s){
        let vowels = ["a", "e", "i", "o", "u"]
        if (!vowels.includes(c)){
            console.log(c)
        }
    }
}

vowelsAndConsonants("javascriptloops")