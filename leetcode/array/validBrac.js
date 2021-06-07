var isValid = function(s) {
    var temp = [];
    var map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    
    for(var i = 0; i < s.length; i++){
        console.log(`printing s[i] ${s[i]}`)
        if(s[i] === '(' || s[i] === '{' || s[i] === '[')
            temp.push(s[i]);
        else if(map[temp.pop()] !== s[i]){
            console.log(`printing pop ${map[temp.pop()]}`)
            return false;
        }
    }
    
    if(temp.length > 0)
        return false;
    else
        return true;
};

console.log(isValid("(())"))


let map1 = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
};

console.log(map1["("])