const sumAll = function(startNumber, endNumber) {
    if (startNumber < 0 || endNumber < 0) {
        return "ERROR";
    } else if (typeof startNumber === "string" || typeof endNumber === "string") {
        return "ERROR";
    } else if (Number(startNumber) === startNumber  && startNumber % 1 !== 0|| Number(endNumber) === endNumber && endNumber % 1 !== 0) {
        return "ERROR";
    } else if (typeof startNumber !== "number" || typeof endNumber !== "number") {
        return "ERROR";
    } else if (startNumber > endNumber) {
        [startNumber, endNumber] = [endNumber, startNumber];
    } 
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
