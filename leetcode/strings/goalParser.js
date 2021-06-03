function goal (str) {
    let newA=[];
    
    for(let i=0; i<str.length-1; i++) {
        if(str.charAt(i) === 'G'){
            newA.push('G')
        }
        if(str.charAt(i) === '('){
            if(str.charAt(i + 1) === ')'){
                newA.push('o')
            } else {
                newA.push('al')
            }
        }
    }
    if(str.charAt(str.length-1) === 'G'){
        newA.push('G')
    }
    return newA.join("");
}

console.log(goal("(al)G(al)()()G"))