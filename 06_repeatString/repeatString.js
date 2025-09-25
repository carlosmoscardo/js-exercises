const repeatString = function(str, num) {
    let sol = "";
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
        sol += str;
    }

    }
    return sol;
}

console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
