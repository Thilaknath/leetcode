function facto(x) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * facto(x - 1)
}

console.log(facto(3))