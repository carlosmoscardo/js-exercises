const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function(arr) {
    return arr.reduce((acc, val) => {
        acc.push(val.title);
        return acc;
    }, []);
};

getTheTitles(books) // ['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;
