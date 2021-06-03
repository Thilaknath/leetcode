function smUniq(nums) {
    let uniq = [ ...new Set(nums)]

    return uniq.reduce((a,b) => a + b, 0)
}

console.log(smUniq([1,2,3,2]))