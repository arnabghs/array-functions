const map = function (inputArray,mapper){
  let resultArray = [];
  for (index in inputArray){
    resultArray[index] = mapper(inputArray[index]);
  }
  return resultArray;
}


const filter = function(inputArray,predicate){
  let resultArray = [];
  let indexCount = 0;
  for (value of inputArray){
    if (predicate(value) == true){
      resultArray[indexCount] = value;
      indexCount++ ;
    }
  }
  return resultArray;
}

const reduce = function(inputArray,reducer,initialValue){
  let result = initialValue;
  for (index in inputArray){
    result = reducer(result,inputArray[index],index);
  }
  return result;
}

module.exports = { map,filter,reduce }
