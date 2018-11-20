const map = function (inputArray,callbackFunction){
  let resultArray = [];
  for (index in inputArray){
    resultArray[index] = callbackFunction(inputArray[index]);
  }
  return resultArray;
}
module.exports = {map }
