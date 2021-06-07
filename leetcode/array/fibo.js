function fibo(n){
    let a = 1 
    let b = 0
    let temp

    while ( n >= 0){
        temp = a
        a = a + b
        b = temp
        n--
    }

    return b

}

console.log(fibo(4))