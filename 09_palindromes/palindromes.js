const palindromes = function (str) {
    str = str.toLowerCase().replace(/[:;!?.,]/g, "").split(" ").join("");
    return str.split("").reverse().join('') === str;
};

// Do not edit below this line
module.exports = palindromes;
