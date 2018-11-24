const map = function (mapper,inputArray){
  let resultArray = [];
  for (index in inputArray){
    resultArray[index] = mapper(inputArray[index]);
  }
  return resultArray;
}

const filter = function(predicate,inputArray){
  let resultArray = [];
  for (index in inputArray){
    if (predicate(inputArray[index]) == true){
      resultArray.push(inputArray[index]);
    }
  }
  return resultArray;
}

const reduce = function(reducer,inputArray,initialValue){
  let source = filter((x) => x == x,inputArray); // for array with empty elements
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

const mapPrime = function(inputArray,mapper){
  return reduce((x,y) => x.concat(mapper(y)),inputArray,[]);
}

const filterPrime = function(inputArray,predicate){
  return reduce((x,y) => {
    if(predicate(y)) x.push(y);
    return x;
  },inputArray,[]);
}
const reducePrime = function(inputArray,reducer,initialValue){
  let source = filter((x) => x == x,inputArray); // for array with empty elements
  let result = initialValue;
  if (initialValue == undefined){
    result = source[0];
    source.shift();
  }
  if (source.length == 0){
    return result;
  }
  result = reducer(result,source[0]);
  source.shift();
  return reducePrime(source,reducer,result);
}


module.exports = { map,filter,reduce,mapPrime,filterPrime,reducePrime }
