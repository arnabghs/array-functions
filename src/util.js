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

const sum = function(accumulator,currentValue){
  return accumulator + currentValue;
}

const greatestNumber = function(previousValue,currentValue){
  return Math.max(previousValue,currentValue);
}

const filter2ndElement = function(previousValue,currentValue,index){
  let outputArray = previousValue;
  if (index%2 == 0){
    outputArray.push(currentValue);
  }
  return outputArray;
} 

module.exports = {
  identity,
  mulWith10,
  makeUpperCase,
  measureLength,
  numberGreaterThan10,
  longWords,
  sum,
  greatestNumber,
  filter2ndElement
}
