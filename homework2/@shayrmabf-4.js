const sausages = (arr) => {
    let counter = 0;
    let result = '';
    for (package of arr) {
        for (goods of package){
            if (goods.length === 6 && goods[0] == '[' && goods[5] == ']'){
                if (goods.split('').slice(1, goods.length - 1).every((item) => item === goods[1]) === true) {
                    counter += 1;
                    if (counter == 5) continue;
                    goods = goods.split('').slice(1, goods.length - 1);
                    result += goods.join(' ') + ' ';
                }
                else counter = 0;
            }
        }
    }
    return result.trim();
}

console.log(sausages([ [ "(-)", "[IIII]", "[))))]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
"[IlII]" ], [ "IuI", "[))))]", "x", '[loli]', 'oooooo' ], ["[llll]", "[@@@@]", "[pppp]", "[tttt]", "[wwww]", '[llll]'] ]))

