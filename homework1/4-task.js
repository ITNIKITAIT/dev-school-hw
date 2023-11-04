const myFunc = (number) => {
    if (number > 1 && typeof(number) == "number") {
        for (let i = 2; i < number/2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(myFunc(163.5))