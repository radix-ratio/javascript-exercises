const reverseString = function(string) {
    let reversedStringArr = [];

    for (let i = string.length-1; i >= 0; i--) {
        reversedStringArr.push(string[i]);
    }

    return reversedStringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
