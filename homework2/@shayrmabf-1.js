const largestRadialSum = (arr, d) => {
    if (arr.length === 0) return 0;
    const n = arr.length;
    let result = -10000;
    let sum;
    for (let a = 0; a < n/d; a++) {
        if (sum > result) result = sum;
        sum = 0;
        for (let i = a; i < n; i += n/d) {
            sum += arr[i];
        }
    }
    if (sum > result) result = sum;
    return result;
}

console.log(largestRadialSum([1,2,3,4], 2));
console.log(largestRadialSum([1,5,6,3,4,2], 3))
console.log(largestRadialSum([1,1,0], 1))

console.log(largestRadialSum([3], 1))
console.log(largestRadialSum([9,10,2], 3))
console.log(largestRadialSum([-2,-1,-2,-2], 2))
