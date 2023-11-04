class VigenèreCipher {
    constructor(key, alphabet) {
        this.key = key.repeat(alphabet.length).slice(0, alphabet.length);
        this.alphabet = alphabet;
    }
    encode(word) {
        let encodedWord = '';
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (this.alphabet.indexOf(char) === -1) {
                encodedWord += char;
                continue;
            };
            
            let cipher = this.alphabet.indexOf(char) +  this.alphabet.indexOf(this.key[i])
            if (cipher < this.alphabet.length) encodedWord += this.alphabet[cipher];
            else encodedWord += this.alphabet[cipher - this.alphabet.length];
        }
        return encodedWord;
    }
    decode(encodedWord) {
        let word = '';
        for (let i = 0; i < encodedWord.length; i++) {
            if (this.alphabet.indexOf(encodedWord[i]) === -1) {
                word += encodedWord[i];
                continue;
              };
            const indexEncodedWord = this.alphabet.indexOf(encodedWord[i]);
            const indexKey = this.alphabet.indexOf(this.key[i]);
            if (indexEncodedWord >= indexKey) {
                word += this.alphabet[indexEncodedWord - indexKey];
            }
            else {
                word += this.alphabet[this.alphabet.length - indexKey + indexEncodedWord];
            }
        }
        return word;
    }
}

const abc = "abcdefghijklmnopqrstuvwxyz";
const key = "password";

const c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars'));
console.log(c.encode('CODEWARS'));