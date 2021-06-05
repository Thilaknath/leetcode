function reverseStr(s,k) {
    let r = s.substring(0, k)
    let g = s.substring(k,s.length)

    console.log(r)
    console.log(g)
    return r.c + g
}

console.log(reverseStr('abcdefg', 2))