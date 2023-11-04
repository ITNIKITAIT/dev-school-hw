class Vector {
    constructor(arr) {
        this.cord = arr;
    }
    add(vector) {
        if (this.cord.length !== vector.cord.length) throw new Error;
        const newArray = [];
        for (let i = 0; i < this.cord.length; i++) {
            newArray.push(this.cord[i] + vector.cord[i]);
        }
        return new Vector(newArray);
    }
    subtract(vector) {
        if (this.cord.length !== vector.cord.length) throw new Error;
        const newArray = [];
        for (let i = 0; i < this.cord.length; i++) {
            newArray.push(this.cord[i] - vector.cord[i]);
        }
        return new Vector(newArray);
    }
    dot(vector) {
        if (this.cord.length !== vector.cord.length) throw new Error;
        let result = 0;
        for (let i = 0; i < this.cord.length; i++) {
            result += this.cord[i] * vector.cord[i]
        }
        return result;
    }
    norm() {
        let result = 0;
        for (let number of this.cord) {
            result += number ** 2;
        }
        return Math.sqrt(result);
    }
    toString() {
        let arr = this.cord;
        return `(${arr.join(',')})`;
    }
    equals(vector) {
        for (let i = 0; i < this.cord.length; i++) {
            if (this.cord[i] !== vector.cord[i]) return false;
        }
        return true;
    } 
}


// const a = new Vector([1,2]);
// const b = new Vector([1,3]);
// const c = new Vector([3,4, 9]);
// console.log(a.add(b))
// console.log(a.subtract(b))
// console.log(a.dot(b)) 
// console.log(a.norm())
// console.log(a.toString())
// console.log(a.equals(b))