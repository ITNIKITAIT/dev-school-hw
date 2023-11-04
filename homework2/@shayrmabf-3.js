const groupAnagrams = (arr) => {
    const result = new Array([arr[0]]);
    for (let i = 1; i < arr.length; i++) {
        let isAnagram = false;
        for (let a = 0; a < result.length; a++) {
            if (arr[i].split('').sort().join('') == result[a][0].split('').sort().join('')) {
                result[a].push(arr[i]);
                isAnagram = true;
                break;
            }
            else isAnagram = false;
        }
        if (isAnagram == false) result.push([arr[i]]);
    }
    return result;
}

console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese", 'cheees', 'art']));