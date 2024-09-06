const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return num;
    if ( num === 1 || num === 2) return 1;
    //To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence
    const fibNumbers = [0, 1, 1];
    for (let i=3; i<=num; i++) {
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2];
    }
    return fibNumbers[num];
};

// Do not edit below this line
module.exports = fibonacci;
