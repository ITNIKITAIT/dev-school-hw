const getRootProperty = (obj, n) => {
    for (let key in obj) {
        if (typeof obj[key] == 'object' && Array.isArray(obj[key]) == false) {
            let result = getRootProperty(obj[key], n)
            if (result !== null) {
                return key;
            }
        }
        else {
            if (Array.isArray(obj[key]) == true && obj[key].some((number) => number == n)) {
                return key;
            }
        }
    }
    return null;
}

const object = {
    'rin': {
        "mkg": {
            "zma": [21, 45, 66, 111],
            "mii": {
                "ltf": [2, 5, 3, 9, 21]
            }, 
            "fv": [1, 3, 6, 9]
        }, 
        "rmk": {
        "   amr": [50, 50, 100, 150, 250]
        }
    }, 
    "fik": {
        "er": [592, 92, 32, 13],
        "gp": [12, 34, 116, 29]
    }
}
console.log(getRootProperty(object, 29))

