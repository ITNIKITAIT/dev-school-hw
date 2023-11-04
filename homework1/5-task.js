const myFunc = (string) => {
    numArray = string.split(' ');
    let min = numArray[0];
    let max = numArray[0];
    for ( let i = 1; i < numArray.length; i++) {
        if (parseInt(numArray[i]) > max) {
            max = numArray[i];
        }
        else if (parseInt(numArray[i]) < min){
            min = numArray[i];
        }
    }
    return [max, min].join(' ');
}

console.log(myFunc("1 9 3 4 -5"))