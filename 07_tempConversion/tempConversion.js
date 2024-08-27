const convertToCelsius = function(fahrenheitDegrees) {
  return Math.round((fahrenheitDegrees - 32) * (5 / 9) * 10) / 10
};

const convertToFahrenheit = function(celsiusDegrees) {
  return Math.round((celsiusDegrees * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
