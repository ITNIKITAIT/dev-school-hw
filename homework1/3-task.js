const myFunc = (m) => {
    let count = 0;
    let i = 1;
    while (m > 0) {
        m = m - i ** 3;
        i++;
        count++;
    }
    if (m === 0) {
        return count;
    }
    else {
        return -1;
    }
}

console.log(myFunc(36))