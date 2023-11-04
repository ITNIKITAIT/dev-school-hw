const myFunc = (number) => {
    a = String(number).split('');
    let result = [];
    while (a.length > 0) {
        let max = a[0];
        let index = 0;
        for (let i = 1; i < a.length; i++) {
            if (a[i] > max) {
                max = a[i];
                index = i;
            }
        }
        result.push(max);
        a.splice(index, 1);
    }
    return result.join('');
}

console.log(myFunc(123456789))