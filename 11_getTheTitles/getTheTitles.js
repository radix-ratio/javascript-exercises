const getTheTitles = function(books) {
    // return  books.reduce((titles, book) =>{
    //     if (!titles.includes(book.title)) {
    //         titles.push(book.title);
    //     }
    //     return titles;
    // }, []);
    return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
