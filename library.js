const map = function (inputArray,callbackFunction){
  let resultArray = [];
  for (index in inputArray){
    resultArray[index] = callbackFunction(inputArray[index]);
  }
  return resultArray;
}


const filter = function(inputArray,callbackFunction){
  let resultArray = [];
  let indexCount = 0;
  for (value of inputArray){
    if (callbackFunction(value) == true){
      resultArray[indexCount] = value;
      indexCount++ ;
    }
  }
  return resultArray;
}

module.exports = { map,filter }
