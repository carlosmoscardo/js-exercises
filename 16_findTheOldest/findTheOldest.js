const people = [
    {
        name: "Carly",
        yearOfBirth: 1006,
        // yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const findTheOldest = function(arr) {
    let sol = arr.reduce((acc, val) => {
        if (val.yearOfDeath === undefined) {
            const date = new Date().getFullYear();
            acc.push(val);
            val.yearOfDeath = date;
            return acc;
        } else {
            acc.push(val);
            return acc;
        }
    }, []).sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    let ans = sol[0];
    return ans;
};

console.log(findTheOldest(people));

// let sol = arr.filter(val => val.yearOfDeath !== undefined).sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));

// Do not edit below this line
module.exports = findTheOldest;
