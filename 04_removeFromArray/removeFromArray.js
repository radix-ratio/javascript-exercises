const removeFromArray = function (array, ...elementsToDelete) {
  return array.filter((arrayElement) => !elementsToDelete.includes(arrayElement));
};

// Do not edit below this line
module.exports = removeFromArray;
