const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else {
        let total = 0;
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
            total += num1;
            num1++;
        }
        return total;
        } else if (num1 > num2) {
            let total = 0;
            for (let i = num1; i >= num2; i--) {
                total += num1;
                num1--;
            }
            return total;
        }
    };
}

console.log(sumAll(123, 1)) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
