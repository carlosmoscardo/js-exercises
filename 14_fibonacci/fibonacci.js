const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } else if (num === 0 || num === "0") {
        return 0
    } else {
        let fibo = [1, 1];
        for (let i = 1; i < num - 1; i++) {
            fibo.push((fibo[fibo.length - 1] + fibo[fibo.length - 2]));
        }
        return fibo[num - 1];
    }
};

fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)

// Do not edit below this line
module.exports = fibonacci;
