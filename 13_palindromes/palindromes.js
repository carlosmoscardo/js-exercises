const palindromes = function (str) {
    let str1 = str
        .toLowerCase()
        .split("")
        .filter(val => val !== "." && val !== " " && val !== "!" && val !== ",")
        .join("");
    
    let str2 = str
        .toLowerCase()
        .split("")
        .filter(val => val !== "." && val !== " " && val !== "!" && val !== ",")
        .reverse()
        .join("");

    if (str2 === str1) {
        return true
    } else {
        return false
    }
};

// const palindromes = function (str) {
//     return str
//         .toLowerCase()
//         .split("")
//         .filter(val => val !== "." && val !== " " && val !== "!" && val !== ",")
//         .reverse()
//         .join("");
// };

// console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
