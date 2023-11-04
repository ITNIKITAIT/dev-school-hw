const findIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let rightPart = 0;
        let leftPart = 0;
        if (i < arr.length - 1) {
            rightPart = arr.slice(i + 1).reduce((total, item) => total += item);
        }
        if (i > 0) {
            leftPart = arr.slice(0, i).reduce((total, item) => total += item);
        }
        if (rightPart === leftPart) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1,2,3,4,2,1]))