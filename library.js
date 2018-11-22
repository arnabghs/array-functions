const map = function (inputArray,mapper){
  let resultArray = [];
  for (index in inputArray){
    resultArray[index] = mapper(inputArray[index]);
  }
  return resultArray;
}


const filter = function(inputArray,predicate){
  let resultArray = [];
  for (index in inputArray){
    if (predicate(inputArray[index]) == true){
      resultArray.push(inputArray[index]);
    }
  }
  return resultArray;
}

const reduce = function(inputArray,reducer,initialValue){
  let source = filter(inputArray,(x) => x == x); // for array with empty elements
  let result = initialValue;
  let index = 0;
  if (initialValue == undefined){
    result = source[0];
    index = 1;
  }
  while (index < source.length){
    result = reducer(result,source[index],index);
    index++ ;
  }
  return result;
}

module.exports = { map,filter,reduce }
