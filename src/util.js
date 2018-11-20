const identity = function(input){
  return input;
}

const mulWith10 = function(input){
  return input*10;
}

const makeUpperCase = function(input){
  return input.toUpperCase();
}

const measureLength = function(input){
  return input.length;
}

const numberGreaterThan10 = function(input){
  if (input > 10) return true;
  return false;
}

const longWords = function(input){
  if (input.length > 6) return true;
  return false;
}

module.exports = {
  identity,
  mulWith10,
  makeUpperCase,
  measureLength,
  numberGreaterThan10,
  longWords
}
