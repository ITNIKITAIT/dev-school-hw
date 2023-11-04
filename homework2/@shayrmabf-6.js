const perimeter = (arr) => {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].length;
        for (let a = 0; a < row; a++) {
            if (arr[i][a] == 'X') {
                if (i > 0 && arr[i - 1][a] === 'X') {
                    counter -= 2;
                }
                counter += 4;
                let next = a + 1;
                while (arr[i][next] == 'X') {
                    if (i > 0 && arr[i - 1][next] === 'X') {
                        counter -= 2;
                    }
                    counter += 2;
                    next++;
                    a = next;
                }
            }
        } 
    }
    return counter;
}

console.log("Total land perimeter: " + perimeter(['XOOXO',
'XOOXO',
'OOOXO',
'XXOXO',
'OXOOO']))